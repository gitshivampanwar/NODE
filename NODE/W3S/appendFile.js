var fs = require('fs');

fs.appendFile('mynewfile2.txt', 'Hello content file 2!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});