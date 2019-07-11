exports = typeof window === "undefined" ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum: function(arr) {
    return arr.reduce((acc, cv) => acc + cv);
  },

  remove: function(arr, item) {
    return arr.filter(currentItem => currentItem !== item);
  },

  removeWithoutCopy: function(arr, item) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    const merged = arr1.concat(arr2);
    return merged;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    // let count = 0;
    // for (let i = 0; i < arr.length; i++) {
    //   if (arr[i] === item) {
    //     count++;
    //   }
    // }
    // return count;
    return arr.filter(currrentItem => currrentItem === item).length;
  },

  duplicates: function(arr) {
    const duplicates = [];
    for (let i = 0; i < arr.length; i++) {
      if (
        arraysAnswers.count(arr, arr[i]) > 1 &&
        !duplicates.includes(arr[i])
      ) {
        duplicates.push(arr[i]);
      }
    }
    return duplicates;
  },

  square: function(arr) {
    return arr.map(num => num * num);
  },

  findAllOccurrences: function(arr, target) {
    return arr
      .map((item, idx) => {
        if (item === target) {
          return idx;
        }
      })
      .filter(item => item !== undefined);
  }
};
