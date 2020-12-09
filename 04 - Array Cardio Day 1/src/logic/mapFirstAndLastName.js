import { inventors } from '../../data/inventors.js'

// Array.prototype.map()
// 2. Give us an array of the inventor first and last names
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);