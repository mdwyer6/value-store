const _ = require('lodash');

class Store {
  constructor() {
    this.stack = [{}];
  }

  get(key) {
    console.log(this.stack[this.stack.length - 1][key]);
  }

  set(key, val) {
    this.stack[this.stack.length - 1][key] = val;
  }

  sum() {
    const result = _.reduce(this.stack[0], function(sum, n) {
      if (typeof Number(n) === 'number') {
        return sum + n;
      }

      return sum;
    }, 0);

    console.log(result);
  }

  begin() {
    this.stack.push({});
  }

  rollback() {
    this.stack.pop();
  }

  commit() {
    
  }
}

module.exports = new Store;