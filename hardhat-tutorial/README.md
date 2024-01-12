# Hardhat project 
It is a simple Ethereum smart contract project using Hardhat.

# Process overview
The process includes setting up the development environment, writing 
a simple smart contract, creating tests to ensure the contract behaves 
as expected, and finally deploying the contract to the Ethereum blockchain.

# Getting Started 

It's recommended that you've gone through the [hardhat getting started documentation](https://hardhat.org/getting-started/) before proceeding here. 
You can find detailed instructions on using this repository and many tips in [its documentation](https://hardhat.org/tutorial).

- [Writing and compiling contracts](https://hardhat.org/tutorial/writing-and-compiling-contracts/)
- [Setting up the environment](https://hardhat.org/tutorial/setting-up-the-environment/)
- [Testing Contracts](https://hardhat.org/tutorial/testing-contracts/)
- [Setting up your wallet](https://hardhat.org/tutorial/boilerplate-project#how-to-use-it)
- [Hardhat's full documentation](https://hardhat.org/docs/)

## Project Overview

- **`hardhat.config.js`**: This file contains the configuration settings for the Hardhat development environment, specifying network settings, compiler versions, and more.

- **`package-lock.json` and `package.json`**: These files manage project dependencies and configurations. `package-lock.json` ensures consistent versions of npm package dependencies.

- **`node_modules/`**: This directory contains the installed npm packages, managed automatically by npm.

- **`contracts/Token.sol`**: This Solidity source code file defines the behavior of a smart contract, presumably an ERC-20 token in this case.

- **`tests/Token.js`**: This JavaScript test file contains test cases to validate the functionality of the smart contract. It uses Hardhat's testing framework.

- **`scripts/deploy.js`**: This JavaScript deployment script is responsible for deploying the smart contract to the Ethereum blockchain.


## Test
Tests are located in the [test](./test/) directory.

### Test Suite 1: Deployment

- **Test Case 1:** Should set the right owner.
- **Test Case 2:** Should assign the total supply of tokens to the owner.
- **Test Case 3:** Should set the right initial balances.

### Test Suite 2: Token Metadata

- **Test Case 1:** Should have correct name and symbol after deployment.

### Test Suite 3: Transactions

- **Test Case 1:** Should not allow owner to transfer more than total supply.
- **Test Case 2:** Should transfer tokens between accounts.
- **Test Case 3:** Should emit Transfer events.
- **Test Case 4:** Should fail if sender doesn't have enough tokens.
- **Test Case 5:** Should prevent non-owner from transferring tokens from owner's account.

To run the tests, use the following command:

```bash
npx hardhat test

To see a measure in percent of the degree to which the smart contract source code is executed when a particular test suite is run, type

```bash
npx run coverage

# Deployment

To deploy your contract, follow these steps:

1. **Update `hardhat.config.js`:**
   Open `hardhat.config.js` and add a network entry for your deployment network, specifying the URL and accounts:

   ```javascript
   module.exports = {
     networks: {
       hardhat: {
         // Your local Hardhat network configuration (if used for testing)
       },
       yourDeploymentNetwork: {
         url: "https://YOUR_NODE_URL",
         accounts: ["0xYOUR_PRIVATE_KEY"],
       },
     },
     // Other configurations...
   };

Execute your deployment script with:

```bash
npx hardhat run scripts/deploy.js --network yourDeploymentNetwork

I deployed a smart contract to the Sepolia testnet using Infura for Ethereum node communication. To achieve this, I created a MetaMask account, registered for an Infura account, and obtained the necessary private keys for the deployment. Before deploying on Sopel, I sent some Sepolia ether to the address that performed the deployment. Testnet ether for Sepolia can be obtained from a faucet, a service that distributes testing-ETH for free. I use Infura Sepolia Faucet. 



