import React,{useState,useEffect,createContext,useContext} from 'react'
import { ethers } from "ethers";
import {
    CheckIfWalletConnected,
    connectWallet,
    connectingTOKENCONTRACT,
    getBalance,
    connectingTOKEN_SALE_CONTRACT
} from '../Utils/index';

const StateContext = createContext();

export const StateContextProvider = ({children}) =>{
const prateush = "I am prateush";

const [address,setAddress] = useState("");
const [balance,setBalance] = useState("");
const [nativeToken,setNativeToken]=useState("");
const [tokenHolders,setTokenHolders] = useState([]);
const [tokenSale,setTokenSale] = useState("");
const [currentHolder,setCurrentHolder] = useState("");


//FETCH CONTRACT DATA

const fetchInitialData = async () => {
    try{
        //Get user account
        const account = await CheckIfWalletConnected();
        // get user balance
        const balance = await getBalance(account);
        setBalance(ethers.utils.formatEther(balance.toString()));
        setAddress(account);
        //TOKEN CONTRACT
        const TOKEN_CONTRACT = await connectingTOKENCONTRACT();
        let tokenBalance;
        if(account){
            tokenBalance = await TOKEN_CONTRACT.balanceOf(account);
        } else{
            tokenBalance = 0;
        }

        // details
        const tokenName = await TOKEN_CONTRACT.name();
        const tokenSymbol = await TOKEN_CONTRACT.symbol();
        const tokenTotalSupply = await TOKEN_CONTRACT.totalSupply();
        const tokenStandard = await TOKEN_CONTRACT.standard();
        const tokenHolders = await TOKEN_CONTRACT._userId();
        const tokenOwnerOfContract = await TOKEN_CONTRACT.ownerOfContract();
        const tokenAddress = await TOKEN_CONTRACT.address;

        const nativeToken = {
            tokenAddress:   tokenAddress,
            tokenName:      tokenName,
            tokenSymbol:    tokenSymbol,
            tokenOwnerOfContract: tokenOwnerOfContract,
            tokenStandard:  tokenStandard,
            tokenTotalSupply: ethers.utils.formatEther(tokenTotalSupply.toString()),
            tokenBalance:   ethers.utils.formatEther(tokenBalance.toString()),
            tokenHolders: tokenHolders.toNumber()
        };
        setNativeToken(nativeToken)

        // Get token holders
        const getTokenHolder = await TOKEN_CONTRACT.getTokenHolder();
        setTokenHolders(getTokenHolder);

        // get token holder data
        if(account){
            const getTokenHolderData = await TOKEN_CONTRACT.getTokenHolderData(
                account);
                const currentHolder = {
                    tokenId: getTokenHodlerData[0].toNumber(),
                    from: getTokenHolderData[1],
                    to: getTokenHolderData[2],
                    totalToken: ethers.utils.formatEther(getTokenHolderData[3].toString()),
                    tokenHolder: getTokenHolderData[4],
                };
                setCurrentHolder(currentHolder);
            
        }
      // TOKEN SALE CONTRACT
      const TOKENSALE_CONTRACT = await connectingTOKEN_SALE_CONTRACT();
      const tokenPrice = await TOKENSALE_CONTRACT.tokenPrice();
      const tokenSold = await TOKENSALE_CONTRACT.tokensSold();
      const tokenSaleBalance = await TOKEN_CONTRACT.balanceOf("0xec5389bf30A3a15CfFe068E8F03DcE1A31CB6eBF");

        const tokenSale = {
            tokenPrice: ethers.utils.formatEther(tokenPrice.toString()),
            tokenSold: tokenSold.toNumber(),
            tokenSaleBalance: ethers.utils.formatEther(tokenSaleBalance.toString())
        };

      setTokenSale(tokenSale);

      console.log(tokenSale);
      console.log(currentHolder);
          } catch(error){
        console.log(error);
    }
};

useEffect(()=>{
   connectWallet();
   fetchInitialData();
   
}, [])

//BUY TOKEN
const buyToken = async(nToken) =>{
    try{
        const amount = ethers.utils.parseUnits(nToken.toString(),"ether");
        const contract = await connectingTOKEN_SALE_CONTRACT();
        const buying = await contract.buyTokens(nToken,{
            value:amount.toString(),
        });
        await buying.wait();
        console.log(buying);
        window.location.reload();

    } catch(error){
        console.log(error);
    }
}
// native token transfer
const transferNativeToken = async()=> {
    try{
        

        const TOKEN_SALE_ADDRESS = "0xec5389bf30A3a15CfFe068E8F03DcE1A31CB6eBF";
        const signer = await connectWallet();
        const currentAccount=await signer.getAddress();
console.log(currentAccount);
        if((currentAccount).toString() != "0x19B21F5C521e401B8b89329E1Eba9adF914c6ace")
            {
            throw "U cannot transfer the fund as u r not the owner"
            }

        const TOKEN_AMOUNT = 50;
        //const amount = ethers.utils.parseUnits(nToken.toString(),"ether");
        const tokens = TOKEN_AMOUNT.toString();
        const transferAmount = ethers.utils.parseEther(tokens);

        const contract = await connectingTOKENCONTRACT();
        const transaction = await contract.transfer(
            TOKEN_SALE_ADDRESS,
            transferAmount
        );
        console.log(contract);
        await transaction.wait();
        window.location.reload();
    } catch(error)
    {
        console.log(error);
        alert(error);
    }
};
const ShowUserDetails = async() =>{
    const signer = await connectWallet();
    const currentAccount=await signer.getAddress();
    const contract = await connectingTOKENCONTRACT();
    const data = await contract.getTokenHolderData(currentAccount);
    console.log("User details");
    console.log(data);
    return data;
}

    return (
        <StateContext.Provider value={{
            transferNativeToken,
            buyToken,
            connectWallet,
            setAddress,
            ShowUserDetails,
            currentHolder,
            tokenSale,
            tokenHolders,
            nativeToken,
            balance,
            address
        }}>
            {children}
        </StateContext.Provider>
    )

};

export const useStateContext = () => useContext(StateContext)
