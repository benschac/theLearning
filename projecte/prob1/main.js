var counter = 0;


// // first try
// for(var i = 0; i < 1000; i++) {
// 	if(i % 3 === 0 || i % 5 === 0) {
// 		counter += i;
// 	};
// }


// second try
for(var i = 0; i < 1000; i++) {
	i % 3 === 0 || i % 5 === 0 ? counter += i
}