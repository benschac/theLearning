const path = require('path');

let extractPath = (url) => {
  var filePath;
  var fileName = 'index.html';

  // when not /
  if(url.length > 1) {
    // change to just name w.o the /
    fileName.substring(1);
  }
  console.log('The fileName is: ' + fileName);


  // use path module to get file path.
  filePath = path.resolve(__dirname, 'app', fileName);
  return filePath;
};

module.exports = extractPath;
