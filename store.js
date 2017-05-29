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
    const result = _.reduce(this.stack[0], function(sum, val) {
      if (!isNaN(val) && !isNaN(parseFloat(val))) {
        return sum + Number(val);
      }

      return sum;
    }, 0);

    console.log(result);
  }

  begin() {
    this.stack.push({});
  }

  rollback() {
    if (this.stack.length > 1) {
      this.stack.pop();
    } else {
      console.log('Rollback failed: No current transaction');
    }
  }

  commit() {
    const last = this.stack.pop();
    _.merge(this.stack[this.stack.length - 1], last);
  }
}

module.exports = new Store();