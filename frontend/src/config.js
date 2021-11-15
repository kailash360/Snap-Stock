const build = require('./build/contracts/Decentragram.json')

let DECENTRAGRAM_ABI = build.abi,
    DECENTRAGRAM_ADDRESS = build.networks[Object.keys(build.networks)[0]].address,
    ACCOUNT = '',
    METHODS = [],
    WEB3 = '';

const config = {
    DECENTRAGRAM_ABI,
    DECENTRAGRAM_ADDRESS,
    ACCOUNT,
    METHODS,
    WEB3
}

export default config;