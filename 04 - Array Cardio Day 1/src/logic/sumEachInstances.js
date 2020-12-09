import { data } from '../../data/data.js'


// 8. Reduce Exercise
// Sum up the instances of each of these


const transportation = data.reduce(function (obj, item) {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});

console.log(transportation);