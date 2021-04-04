import {map} from '../iterstuff/call/map.js';
import {range} from '../iterstuff/series/range.js';

const square = (x) => x ** 2;

// prints 1, 4, 9, and 16
for (const number of map(square, range(1, 5, 1))) {
    console.log(number);
}

const array = [10, 20, 30];
const iterable_map = map(square, array);

console.log([...iterable_map]); // [100, 400, 900]
console.log([...iterable_map]); // [100, 400, 900]
console.log([...iterable_map]); // [100, 400, 900]

array.push(40);
console.log([...iterable_map]); // [100, 400, 900, 1600]
console.log([...iterable_map]); // [100, 400, 900, 1600]
console.log([...iterable_map]); // [100, 400, 900, 1600]