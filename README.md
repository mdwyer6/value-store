# Value-Store

## Description
CLI based key- value store

## User Stories

## Design Decisions
* SUM operation takes linear time and is calculated when invoked. If SUM operation is used frequently relative to GET and SET, refactoring to use a SUM variable that is constantly updated would make sense
* SUM returns only committed key value pairs
* All values are stored as a string and number type coercion is attempted during SUM operation

## Possible Improvements
* Allow user to specify value type
* Suggest closest exisiting key when GET operation returns undefined