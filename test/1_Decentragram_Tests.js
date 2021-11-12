const Decentragram = artifacts.require('./Decentragram.sol')

var expect = require('chai').expect

describe('Author actions', () => {

    let decentragram = ''

    beforeEach(async() => {
        decentragram = await Decentragram.deployed()
    })

    it('compiles', () => {
        expect(decentragram).to.not.equal(null);
    })
})