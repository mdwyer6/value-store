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
      utils.sum();
    } else if (args[0] === 'BEGIN') {
      utils.begin();
    } else if (args[0] === 'ROLLBACK') {
      utils.rollback();
    } else if (args[0] === 'COMMIT') {
      utils.commit();
    } else {
      console.error('Error: Invalid input');
    }
  } else {
    console.error('Error: Invalid input');
  }
}

const ask = function() {
  prompt.get(['command'], function (err, result) {
    if (result.command === 'END') {
      return;
    }

    if (err) {
    } else {
      console.log(result, result.command);
      parse(result.command);
    }
    ask();
  });
}

ask();