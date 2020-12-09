import { inventors } from '../../data/inventors.js'

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// const ordered = inventors.sort(function(a, b) {
//   if(a.year > b.year) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.table(ordered);