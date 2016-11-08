function rightDown(n) {

	return choose(2*n, n);
}


function choose(n , k) {
	
	return factorial(n) / (factorial(k) * factorial(n - k));
}

function factorial(n) {
	
	if(n <= 1) {
		return 1;
	}
	
	return n * factorial(n - 1);
}

rightDown(5);