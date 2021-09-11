const library = require('./library.js');

console.log("Hello world!");
console.log(library.add(4,5));
console.log(library.min([4,5]));

console.log(process.env['test-secret']);

