import {filter} from '../iterstuff/call/filter.js';
import {range} from '../iterstuff/series/range.js';

const even = (x) => x % 2 === 0;
const iterable_range = range(0, 10, 1);

// prints 0, 2, 4, 6, and 8
for (const number of filter(even, iterable_range)) {
    console.log(number);
}

const array = [...iterable_range];
const greater_than_5 = (x) => x > 5;
const iterable_filter = filter(greater_than_5, array);

console.log([...iterable_filter]); // [6, 7, 8, 9]
console.log([...iterable_filter]); // [6, 7, 8, 9]
console.log([...iterable_filter]); // [6, 7, 8, 9]

array.push(100);
console.log([...iterable_filter]); // [6, 7, 8, 9, 100]
console.log([...iterable_filter]); // [6, 7, 8, 9, 100]
console.log([...iterable_filter]); // [6, 7, 8, 9, 100]