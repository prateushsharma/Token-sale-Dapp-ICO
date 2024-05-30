const hre = require("hardhat");
const { ethers } = require('ethers');

// Converts ether into wei
const tokens = (nToken) => {
    return ethers.utils.parseUnits(nToken.toString(), "ether");
};

async function main() {
    // Deploy token contract
    const _initialSupply = tokens(500000);
    const TheBlockchainCoders = await hre.ethers.getContractFactory("TheBlockchainCoders");
    const theBlockchainCoders = await TheBlockchainCoders.deploy(_initialSupply);
    await theBlockchainCoders.deployed();
    console.log(`TheBlockchainCoders: ${theBlockchainCoders.address}`);

    // Token sale contract
    const _tokenPrice = tokens(1);
    const TokenSale = await hre.ethers.getContractFactory("TokenSale");
    const tokenSale = await TokenSale.deploy(theBlockchainCoders.address, _tokenPrice);
    await tokenSale.deployed();
    console.log(`TokenSale: ${tokenSale.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
