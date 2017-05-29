# Value-Store

## Description
CLI based key- value store

## User Stories

## Design Decisions
* SUM operation takes linear time and is calculated when invoked. If SUM operation is used frequently relative to GET and SET, refactoring to use a SUM variable that is constantly updated would make sense.
* All data is written to disc because node js is non blocking and cannot wait for an input