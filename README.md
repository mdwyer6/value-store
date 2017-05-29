# Value-Store

## Description
CLI based key- value store

## Instructions
Navigate to project root and type `node index.js` to start. To stop type `END` then hit enter.

## User Stories
* I can interact with the store through the command line
* I can ass a key value pair to the store with the command SET <key> <value>
* I can get a value that is in the store with the command GET <key>
* I can type BEGIN to begin a new transaction
* I can type ROLLBACK to get rid any changes made since BEGIN
* I can type COMMIT
* I can nest transactions
* I can exit the CLI by typing END

## Design Decisions
* SUM operation takes linear time and is calculated when invoked. If SUM operation is used frequently relative to GET and SET, refactoring to use a SUM variable that is constantly updated would make sense
* SUM returns only committed key value pairs
* All values are stored as a string and number type coercion is attempted during SUM operation

## Possible Improvements
* Allow user to specify value type
* Suggest closest exisiting key when GET operation returns undefined