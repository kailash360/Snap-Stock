const Decentragram = artifacts.require('./Decentragram.sol')

var expect = require('chai').expect

contract('Decentragram', ([deployer, author, tipper]) => {

    let decentragram, image_count;
    beforeEach(async() => {
        decentragram = await Decentragram.deployed();

        image_count = await decentragram.image_count()
        image_count = image_count.toNumber()
    })

    describe('Deployement', () => {

        //****SUCCESS*****//
        it('deploys successfully', () => {
            expect(decentragram).to.not.equal(null);
        })

        it('has valid properties', () => {
            expect(decentragram.address).to.not.equal('0x0')
            expect(decentragram.address).to.not.equal('')
            expect(decentragram.address).to.not.equal(null)
            expect(decentragram.abi).to.not.equal(null)
        })
    })

    describe('Author actions', () => {

        let result,
            hash = 'qwertyuiop',
            name = 'test image',
            description = 'running unit test',
            minimum_tip = 10;

        beforeEach(async() => {
            let uploadResult = await decentragram.upload_image(hash, name, description, author, minimum_tip)
            result = await uploadResult.logs[0].args

            image_count = await decentragram.image_count()
            image_count = image_count.toNumber()
        })

        it('uploads images', () => {
            expect(result.name).to.equal(name)
            expect(result.description).to.equal(description)
            expect(result.hash).to.equal(hash)
            expect(result.image_id.toNumber()).to.equal(image_count)
        })
    })

    describe('User Actions', () => {

        //Initialize the variables
        let result, image,
            hash = 'qwertyuiop',
            name = 'test image',
            description = 'running unit test',
            minimum_tip = 10;

        beforeEach(async() => {

            //Upload an image
            let uploadResult = await decentragram.upload_image(hash, name, description, author, minimum_tip)
            result = await uploadResult.logs[0].args

            //Update the image count 
            image_count = (await decentragram.image_count()).toNumber()

            //Fetch the uploaded image
            image = await decentragram.images(1)
        })

        it('lists all images', async() => {

            //condiitons for the uploaded image elemnt
            expect(image).to.be.an('Object')
            expect(image.name).to.be.equal(name)
            expect(image.description).to.be.equal(description)
            expect(image.hash).to.be.equal(hash)
            expect(image.minimum_tip.toNumber()).to.be.equal(minimum_tip)
        })

        it('allows users to tip images', async() => {

            // let tipped_result = await decentragram.tip_image(image_count, { from: tipper, value: toWei(1) })
            // tipped_result = await tipped_result.logs[0].args
            // console.log(tipped_result)
            //...
        })

    })

})