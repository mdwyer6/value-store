const _ = require('lodash');

class Store {
  constructor() {

    //Object at index 0 contains the fully committed values
    this.stack = [{}];
  }

  get(key) {

    //Return most recently set pair value
    const value = _.findLast(this.stack, (el) => el[key])[key];
    console.log(value);
  }

  set(key, val) {
    this.stack[this.stack.length - 1][key] = val;
  }

  sum() {
    const result = _.reduce(this.stack[0], (sum, val) => {

      /* Test if string can be represented as a string
       * Accounts for isNaN idiosyncrasies */
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

    //Prevent a rollback on main object
    if (this.stack.length > 1) {
      this.stack.pop();
    } else {
      console.log('Rollback failed: No current transaction');
    }
  }

  commit() {

    //Prevent a commit on main object
    if (this.stack.length > 1) {
      const last = this.stack.pop();
      _.merge(this.stack[this.stack.length - 1], last);
    } else {
      console.log('Commit failed: No current transaction');
    }
  }
}

module.exports = new Store();