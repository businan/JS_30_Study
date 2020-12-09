import { inventors } from '../../data/inventors.js'

// 5. Sort the inventors by years lived
const oldest = inventors.sort(function (a, b) {
    const lastInventor = a.passed - a.year;
    const nextInventor = b.passed - b.year;
    return lastInventor > nextInventor ? -1 : 1;
});
console.table(oldest);