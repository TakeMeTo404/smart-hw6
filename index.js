const abi = require('./abi.json')
const Web3 = require('web3')

const INFURA_PROVIDER_URL = 'https://goerli.infura.io/v3/78206d458f054785a3288d0ecf4880e2';
const CONTRACT_ADDRESS = '0x11501968f5aae89e731729618ef4d976556aca9e';


const web3 = new Web3(new Web3.providers.HttpProvider(INFURA_PROVIDER_URL));

web3.eth.getBalance // проверяем
const myContract = new web3.eth.Contract(abi, CONTRACT_ADDRESS)
myContract.methods.totalSupply ().call().then(supply => console.log(supply == 1000));
