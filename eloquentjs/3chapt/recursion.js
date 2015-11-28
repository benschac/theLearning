function isEven(n) {
  if( n == 1 || n < 1) {
    return false;
  }
  
  if(n == 2) {
    return true;
  }
  
  return isEven(n - 2);
}
