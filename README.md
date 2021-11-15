# Snap Stock

**Snap Stock** is a smart-contract-based decentralized application that allows users to upload their images over the platform at the cost of gas fee, and display it to the other users who can then tip the creators based on their choice. 

The images are stored in a P2P network using the [Inter Planetary File system (IPFS) Protocol](https://ipfs.io). You can read more about IPFS Protocol at [IPFS Documentation](https://docs.ipfs.io/). 

## Features 

- Upload an image and display it to the other users  
- Set a minimum tip amount that can be tipped on each of you images
- Tip other images using real-time Ganache-based transactions

## Tech Stacks Used 

- Solidity smart-contracts
- Web3.0 
- IPFS Protocol
- ReactJS

## Setting up the project  

1. Make sure you have the following  installed in your device:
    
    1.1. [NodeJS](https://nodejs.org/en/)

    1.2. [Truffle](https://trufflesuite.com/) 

    1.3. [Ganache](https://www.trufflesuite.com/ganache)

    1.4. [Metamask](https://metamask.io/)

2. Clone the repository and move into the project directory
```
git clone https://github.com/kailash360/Snap-Stock  
cd Snap-Stock
```

3. Install the necessary files by the following command
```
npm i
```

4. Create a latest build of the contracts withing the frontend folder with the command
```
truffle compile --reset
```

5. Move to the ```frotnend``` sub-directory and install the ReactJS dependencies
```
cd frotnend
npm install 
```

6. Start Ganache to create a personal Ethereum Blockchain testing network. You can read about starting Ganache [here](https://www.tutorialspoint.com/ethereum/ethereum_ganache_for_blockchain.htm). Import any of the two Ganache test accounts into Metamask wallet. You can read more about importing Ganache test accounts [here](https://dapp-world.com/blogs/01/how-to-connect-ganache-with-metamask-and-deploy-smart-contracts-on-remix-without-1619847868947). Now the blockchain network is ready.

7. Start the react app and use the app 
```
npm start 
```

## Running tests 
1. To run tests on the app, complete upto setp 4 above. 
2. Run the following command to run tests using the ```chai``` and ```mocha``` library
```
truffle test
```
