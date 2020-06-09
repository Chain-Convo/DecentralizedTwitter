import Web3 from "web3";
import TokenContract from "../contracts/tokenContractInfo.json";

const web3 = new Web3(window.web3.currentProvider);
const address = TokenContract.address;
const ABI = TokenContract.ABI;

//Web3 connect contract based on ABI and Address
export default new web3.eth.Contract(ABI, address);