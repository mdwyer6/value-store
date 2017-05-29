const prompt = require('prompt');
const Store = require('./store.js');

prompt.start();

const parse = function(command) {
  let args = command.split(' ');
  if (args.length === 3 && args[0] === 'SET') {
    Store.set(args[1], args[2]);
  } else if (args.length === 2 && args[0] === 'GET') {
    Store.get(args[1]);
  } else if (args.length === 1) {
    if (args[0] === 'SUM') {
      Store.sum();
    } else if (args[0] === 'BEGIN') {
      Store.begin();
    } else if (args[0] === 'ROLLBACK') {
      Store.rollback();
    } else if (args[0] === 'COMMIT') {
      Store.commit();
    } else {
      console.error('Error: Invalid input');
    }
  } else {
    console.error('Error: Invalid input');
  }
};

const ask = function() {
  prompt.get(['command'], (err, result) => {
    if (result.command === 'END') {
      return;
    }

    if (err) {
    } else {
      parse(result.command);
    }
    
    //Recursively call ask function immediately after user input is processed
    ask();
  });
};

ask();