If you want to contribute to this project, go through the following instructions.

# Local Setup

1. Make sure you have the following  installed in your device:
    
    1.1. [NodeJS](https://nodejs.org/en/)

    1.2. [Truffle](https://trufflesuite.com/) 

    1.3. [Ganache](https://www.trufflesuite.com/ganache)

    1.4. [Metamask](https://metamask.io/)

2. **Fork and clone** the repository and move into the project directory
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

5. Move to the ```frontend``` sub-directory and install the ReactJS dependencies
```
cd frontend
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
*Steps 1-5 are needed for first-time installation only. Only steps 6 - 7 will be needed while devolping the project.*



## Creating an issue

If you find any bug or want to add/improve any feature in the application, create a new issue. Follow the instructions below while creating the issue.

- Create a branch with a one or two word description of the issue and issue number. For example, if the issue is about adding a button for login and issue number is 34, then name the branch as `login-btn-34`. Commit your changes in the branch and make a PR from your repository to this main reporsitory.
- Mention the issue type in the issue title.Choose only from the following 3 types - `Bug`,`Feature`,`Improve` For example, if the issue is about fixing any bug then the title will be `[Bug]<one-line description of the issue>`.
- Make sure you mention the following sections in the issue description
  - What is the issue?
  - How to reproduce the issue?
  - What is the expected behaviour?
  - Describe a solution you would like
  - Additional Context (Optional)

  Try to add screenshots or error messages for a better understanding of the issue.


## Making a pull request

While making a Pull Request, make sure to follow the points below:
- In the title for the pull request, mention the issue number that the PR is for. Any PR without a dedicated issue will not be considered. If you are making a PR for issue 12, then the title for the PR will be `Fix #12:<one line description of the PR>`
- Mention the following points in the PR description
  - Describe the changes you have made
  - Screenshots
  - Additional Context (Optional)



