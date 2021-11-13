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
        let result, image, tipper_balance, author_balance,
            hash = 'qwertyuiop',
            name = 'test image',
            description = 'running unit test',
            minimum_tip = 10;

        beforeEach(async() => {

            //Upload an image
            let result = await decentragram.upload_image(hash, name, description, author, minimum_tip)
            result = await result.logs[0].args

            //Update the image count 
            image_count = (await decentragram.image_count()).toNumber()

            //Fetch the uploaded image
            image = await decentragram.images(1)

            //Fetch the current balance of each of the users 
            old_author_balance = await web3.eth.getBalance(author)

            //convert the balace to big number
            old_author_balance = new web3.utils.BN(old_author_balance)
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

            let tipped_result = await decentragram.tip_image(image_count, { from: tipper, value: await web3.utils.toWei("0.01", "Ether") })
            tipped_result = await tipped_result.logs[0].args

            expect(tipped_result.image_id.toNumber()).to.be.equal(image_count);

            //check if the tip amount is equal to the value as sent
            let tip_amount = tipped_result.tip_amount.toString();
            expect(tip_amount).to.be.equal('10000000000000000')

            //Check if the balance is synced
            console.log("Balance =>", typeof(old_author_balance))
            console.log("Tip amount =>", typeof(tip_amount))

            tip_amount = new web3.utils.BN(tip_amount)
            let expected_balance = old_author_balance.add(tip_amount)
            let new_author_balance = await web3.eth.getBalance(author)
            new_author_balance = new web3.utils.BN(new_author_balance)

            expect(new_author_balance.toString()).to.be.equal(expected_balance.toString());
        })

    })

})