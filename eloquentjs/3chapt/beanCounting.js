// Your code here.
	function countChar(str, char) {
      var count = 0;
      for(var i = 0; i <= str.length; i++) {
        if(str[i] == char) {
          count++;
        }
      }
      
      return count;
    }

	function countBs(str) {
      return countChar(str, "B")
    }