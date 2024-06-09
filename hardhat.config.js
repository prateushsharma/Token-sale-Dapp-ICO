require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545", // Default Ganache URL
      accounts: ["0x0ed5e7c52d0d1a7b18c68f6be0b28c52a199197e0be821282041118876fa957a"] // Replace with your Ganache account private key
    }
  }
};
