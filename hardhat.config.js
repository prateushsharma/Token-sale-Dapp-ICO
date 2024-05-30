require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545", // Default Ganache URL
      accounts: ["0x47c923a68291b6dac6b19662b40f1db46023ed36a0a23d6081b71d8600dccedb"] // Replace with your Ganache account private key
    }
  }
};
