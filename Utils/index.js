import { ethers } from "ethers";
import Web3Modal from 'web3modal';

import {TOKEN_ADDRESS,
    TOKEN_ABI,
TOKEN_SALE_ABI,
TOKEN_SALE_ADDRESS,
} from "../Context/constants";

export const connectWallet = async() => {

    if (!window.ethereum) {
      console.error('No Ethereum provider found. Make sure MetaMask is installed.');
      return;
    }
  
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
    });
    console.log(accounts[0]);
    } catch (error) {
      console.error('Error requesting accounts:', error);
      return;
    }
  
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    return signer;
  }
  



export const CheckIfWalletConnected = async()=> {
   try {
const signer = await connectWallet();
    if (!window.ethereum) return console.log("Install Metamask");
    const accounts = await window.ethereum.request({
        method: "eth_accounts",
    })
    const firstAccount = accounts[0];

} catch (error) {
    console.log(error)
}
};
// export const connectWallet = async()=> {
//     try {
 
//      if (!window.ethereum) return console.log("Install Metamask");
//      const accounts = await window.ethereum.request({
//          method: "eth_requestAccounts",
//      })
//      const firstAccount = accounts[0];
//      window.location.reload();
//      return firstAccount;
 
//  } catch (error) {
//      console.log(error)
//  }
//  };



 //Token contract
 const fetchTokenContract = (signerOrProvider)=> 
new ethers.Contract(TOKEN_ADDRESS,TOKEN_ABI,signerOrProvider);

 export const connectingTOKENCONTRACT = async()=>{
    try {
        // const web3modal = new Web3Modal();
        // const connection = await web3modal.connect();
    
       // const signer = provider.getSigner();
       const signer = await connectWallet();
       //const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = fetchTokenContract(signer);
        return contract;
    } catch(error){
        console.log(error);
    }
 };

 // GET BALANCE
 export const getBalance = async()=>{
    try {
        // const web3modal = new Web3Modal();
        // const connection = await web3modal.connect();
        // const provider = new ethers.providers.Web3Provider(connection);
        // const signer = provider.getSigner();
        const signer = await connectWallet();
       // const provider = new ethers.providers.Web3Provider(window.ethereum);
        return await signer.getBalance();
    } catch(error){
        console.log(error);
    }
 };

 //token sale

const fetchToken_SALE_Contract = (signerOrProvider)=> 
new ethers.Contract(TOKEN_SALE_ADDRESS,TOKEN_SALE_ABI,signerOrProvider);

 export const connectingTOKEN_SALE_CONTRACT = async()=>{
    try {
        // const web3modal = new Web3Modal();
        // const connection = await web3modal.connect();
        // const provider = new ethers.providers.Web3Provider(connection);
        // const signer = provider.getSigner();
        const signer = await connectWallet();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = fetchToken_SALE_Contract(signer);
        return contract;
    } catch(error){
        console.log(error);
    }
 };
 export const ShowUserDetails = async() =>{
    const signer = await connectWallet();
    const currentAccount=await signer.getAddress();
    const contract = await connectingTOKENCONTRACT();
    const array = await contract.getTokenHolderData(currentAccount);
    const bigNumber1 = array[0];
const address1 = array[1];
const address2 = array[2];
const bigNumber2 = array[3];
const booleanValue = array[4];

console.log(bigNumber1.toString());  // '0'
console.log(address1);               // '0x0000000000000000000000000000000000000000'
console.log(address2);               // '0x0000000000000000000000000000000000000000'
console.log(bigNumber2.toString());  // '0'
console.log(booleanValue);  
return array;  
   
};



