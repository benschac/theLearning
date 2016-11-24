function flattening(arr) {
  // return Array.isArray(arr[0][1]);


  console.log(arr.reduce(function(prev, next) {
    return prev.concat(next);
  }, []));

}


flattening([[1, 2, 3], [4, 5], [6, [7]]]);
