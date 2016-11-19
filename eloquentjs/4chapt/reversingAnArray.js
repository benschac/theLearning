	function reverseArray(arr) {
      var newArr = [];
		for(var i = arr.length-1; i >= 0; i--) {
          newArr.push(arr[i]);
        }
      
      return newArr;
    }


	function reverseArrayInPlace(arr) {
      for(var i = 0; i < Math.ceil(arr.length/2); i++) { 
        var tmp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = tmp;
        
      }
      return arr;
    }

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);