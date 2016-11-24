function flat(arr) {
  // reduce values and put in array.
  return arr.reduce(function(prev, next) {
    // concat elements into empty array, if element isn't array.
    // if true recursively look into the array element to see it the next element
    // is a value or another array.
    return prev.concat(Array.isArray(next) ? flat(next) : next);
  }, []);
}


flat([[1,2], [3,[4, 5, [6, 7,[8,[9,[10]]]]]],11]);
