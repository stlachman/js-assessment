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

  truncate: function(arr) {},

  prepend: function(arr, item) {},

  curtail: function(arr) {},

  concat: function(arr1, arr2) {},

  insert: function(arr, item, index) {},

  count: function(arr, item) {},

  duplicates: function(arr) {},

  square: function(arr) {},

  findAllOccurrences: function(arr, target) {}
};
