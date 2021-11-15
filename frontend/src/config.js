const build = require('./build/contracts/Decentragram.json')

let DECENTRAGRAM_ABI = build.abi,
    DECENTRAGRAM_ADDRESS = build.networks[Object.keys(build.networks)[0]].address,
    ACCOUNT = '',
    METHODS = [];

const config = {
    DECENTRAGRAM_ABI,
    DECENTRAGRAM_ADDRESS,
    ACCOUNT,
    METHODS
}

export default config;