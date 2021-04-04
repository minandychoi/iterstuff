import {minzip} from '../iterstuff/object/minzip.js';

for (const element of minzip('123', 'abcde', 'ABCDEFG')) {
    console.log(element);
}

// ['1', 'a', 'A']
// ['2', 'b', 'B']
// ['3', 'c', 'C']

const array = [1, 2, 3];
const string = 'cheese';
const iterable_zip = minzip(array, string);

console.log([...iterable_zip]); // [[1, 'c'], [2, 'h'], [3, 'e']]
console.log([...iterable_zip]); // [[1, 'c'], [2, 'h'], [3, 'e']]
console.log([...iterable_zip]); // [[1, 'c'], [2, 'h'], [3, 'e']]

array.push(4);
console.log([...iterable_zip]); // [[1, 'c'], [2, 'h'], [3, 'e'], [4, 'e']]
console.log([...iterable_zip]); // [[1, 'c'], [2, 'h'], [3, 'e'], [4, 'e']]
console.log([...iterable_zip]); // [[1, 'c'], [2, 'h'], [3, 'e'], [4, 'e']]