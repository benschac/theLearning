// 3rd problem

// var fs = require('fs'),
// 	path = process.argv[2];


// fs.readFile(path, 'utf8', function(err, data) {
// 	var lines = data.split('\n');
// 	console.log(lines.length-1);
// });


// 4th problem
// module.exports = function(directory, filter, callback) {
// 	var fs = require('fs'),
// 		path = require('path');

// 	fs.readdir(directory, function(err, data) {
// 		if(err) return callback(err);
// 		var log = [];
// 		data.forEach(function(file) {
// 			if(path.extname(file) == "\." + filter) {
// 				log.push(file);
// 			}
// 		});

// 		return callback(null, log);

// 	});
// }

// Problem 7 of 13

// var http = require('http');

// http.get(process.argv[2], function (response) {
// 	response.setEncoding('utf8');
// 	response.on("data",	console.log);
// 	response.on("data", console.error)
	
// });

// Problem 8 of 13

// var http = require('http'),
// 	bl =	require('bl');

// http.get(process.argv[2], function(res) {
	
// 	res.pipe(bl(function(err, data) {
// 		console.log(data.toString().length);
// 		console.log(data.toString());
// 	}));

// });


// Problem 9 of 13
// var http = require('http'),
// 	bl = require('bl'),
// 	results = [],
// 	count = 0;

// function printResults() {
// 	for(var i = 0; i < 3; i++) {
// 		console.log(results[i]);
// 	}
// }

// function httpGet(index) {
// 		http.get(process.argv[index + 2], function(res) {
// 		res.pipe(bl(function(err, data) {
// 			if(err) console.log(err);


// 			results[index] = data.toString();
// 			count++;

// 			if(count == 3) {
// 				printResults();
// 			}
// 		}))
// 	});
// }
// for(var i = 0; i < 3; i++) {
// 	httpGet(i);
// }



// Problem 10 of 13

var net = require('net')
function pad(n) { return n < 10 ? '0' + n : n }
    var server = net.createServer(function (socket) {
      // socket handling logic

  d = new Date();
  s = d.getFullYear() + "-"
    + pad(d.getMonth() + 1) + "-"
    + pad(d.getDate()) + " "
    + pad(d.getHours()) + ":"
    + pad(d.getMinutes()) + "\n";

      socket.end(s);
    })
    server.listen(process.argv[2]);