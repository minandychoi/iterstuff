import {range} from '../iterstuff/series/range.js';

// prints 0, 1, 2, 3, and 4
for (const number of range(0, 5, 1)) {
    console.log(number);
}

// prints 5, 4, 3, 2, and 1
for (const number of range(5, 0, -1)) {
    console.log(number);
}

const iterable_range = range(0, 10, 2);

console.log([...iterable_range]); // [0, 2, 4, 6, 8]
console.log([...iterable_range]); // [0, 2, 4, 6, 8]
console.log([...iterable_range]); // [0, 2, 4, 6, 8]