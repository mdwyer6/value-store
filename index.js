// #!/usr/bin/env node
// const program = require('commander');
// const utils = require('./utils.js');
// const store = require('./store.json');
// const fs = require('fs');


// /*GET Command*/
// program
//   .version('1.0.0')
//   .command('GET <key>')
//   .action((key) => {
//     console.log(`Value of ${key} is ${data.get(key)}`);
//   });

// /*SET Command*/
// program
//   .version('1.0.0')
//   .command('SET <key> <val>')
//   .action((key, val) => {
//     data.set(key, val);
//   });

// /*SUM Command*/
// program
//   .version('1.0.0')
//   .command('SUM')
//   .action(() => {
    
//   });

// /*BEGIN Command*/
// program
//   .version('1.0.0')
//   .command('BEGIN')
//   .action(() => {
    
//   });

// /*COMMIT Command*/
// program
//   .version('1.0.0')
//   .command('COMMIT')
//   .action(() => {
    
//   });

// /*ROLLBACK Command*/
// program
//   .version('1.0.0')
//   .command('ROLLBACK')
//   .action(() => {
    
//   });


// program.parse(process.argv);

const prompt = require('prompt');
const utils = require('./utils.js');

prompt.start();

const parse = function(command) {
  let args = command.split(' ');
  if (args.length === 3 && args[0] === 'SET') {
    utils.set(args[1], args[2]);
  } else if (args.length === 2 && args[0] === 'GET') {
    utils.get(args[1]);
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