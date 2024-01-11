require("@nomicfoundation/hardhat-toolbox");

const INFURA_API_KEY = "01126311b7c647cda706f0217138c533";
const SEPOLIA_PRIVATE_KEY = "cfad2aade3e1ba31f658d49ad167e2440e08655a1c7bda51fd04c7996698a2ee";

module.exports = {
  solidity: "0.8.23",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
}