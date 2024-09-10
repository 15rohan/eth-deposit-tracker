const {JsonRpcProvider} = require('@ethersproject/providers');
require('dotenv').config();

const provider = new JsonRpcProvider(process.env.ALCHEMY_API_URL);

module.exports = provider;


