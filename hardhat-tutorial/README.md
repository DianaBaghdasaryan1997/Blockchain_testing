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

# Project Structure

hardhat.config.js        -Configuration file specifying settings for the Hardhat development environment.
package-lock.json        -Auto-generated file ensuring consistent versions of npm package dependencies for the project.
package.json             -npm package configuration file listing project metadata, dependencies, and scripts.
node_modules/            -Directory containing installed npm packages; managed automatically by npm.
contracts/Token.sol      -Solidity source code file defining  a smart contract's behavior.
tests/Token.js           -JavaScript test file containing test cases to validate the contract's functionality.
scripts/deploy.js        -JavaScript deployment script for deploying a smart contract to the Ethereum blockchain




## Test
Tests are located in the [test](./test/) directory.

### Test Suite 1: Deployment

- **Test Case 1:** Should set the right owner.
- **Test Case 2:** Should assign the total supply of tokens to the owner.
- **Test Case 3:** Should set the right initial balances.

### Test Suite 2: Token Metadata

- **Test Case 1:** Should have correct name and symbol after deployment.

### Test Suite 3: Transactions

- **Test Case 1:** Should transfer tokens between accounts.
- **Test Case 2:** Should emit Transfer events.
- **Test Case 3:** Should not allow owner to transfer more than total supply.
- **Test Case 4:** Should fail if sender doesn't have enough tokens.
- **Test Case 5:** Should prevent non-owner from transferring tokens from owner's account.

To run the tests, use the following command:

```bash
npx hardhat test


