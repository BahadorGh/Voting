require("@nomicfoundation/hardhat-toolbox");
require("hardhat-docgen");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    // We can connect to hardhat's local blockchain,
    // by typing the below script in a new terminal:
    // npx hardhat node
    local: {
      url: "http://127.0.0.1:8545",
      accounts: [
        "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
      ],
    },
    testnet: {
      url: `https://goerli.infura.io/v3/${Your_Infura_Project_Id}`,
      accounts: ["Your private key"],
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${Your_Infura_Project_Id}`,
      accounts: ["Your private key"],
    },
  },
  docgen: {
    path: ".docs",
    clear: true,
    runOnCompile: false,
  },
};
