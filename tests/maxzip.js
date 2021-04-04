import {maxzip} from '../iterstuff/object/maxzip.js';

for (const element of maxzip('123', 'abcde', 'ABCDEFG')) {
    console.log(element);
}

// ['1', 'a', 'A']
// ['2', 'b', 'B']
// ['3', 'c', 'C']
// [undefined, 'd', 'D']
// [undefined, 'e', 'E']
// [undefined, undefined, 'F']
// [undefined, undefined, 'G']

const array = [1, 2, 3];
const string = 'cheese';
const iterable_zip = maxzip(array, string);

console.log([...iterable_zip]); // [[1, 'c'], [2, 'h'], [3, 'e'], [undefined, 'e'], [undefined, 's'], [undefined, 'e']]
console.log([...iterable_zip]); // [[1, 'c'], [2, 'h'], [3, 'e'], [undefined, 'e'], [undefined, 's'], [undefined, 'e']]
console.log([...iterable_zip]); // [[1, 'c'], [2, 'h'], [3, 'e'], [undefined, 'e'], [undefined, 's'], [undefined, 'e']]

array.push(4);
console.log([...iterable_zip]); // [[1, 'c'], [2, 'h'], [3, 'e'], [4, 'e'], [undefined, 's'], [undefined, 'e']]
console.log([...iterable_zip]); // [[1, 'c'], [2, 'h'], [3, 'e'], [4, 'e'], [undefined, 's'], [undefined, 'e']]
console.log([...iterable_zip]); // [[1, 'c'], [2, 'h'], [3, 'e'], [4, 'e'], [undefined, 's'], [undefined, 'e']]