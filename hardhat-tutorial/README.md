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

# Test
Tests are located in the [test](./test/) directory.
To run unit tests:

```
npx hardhat test
```


