import {get_values} from '../iterstuff/object/get_values.js';
import {range} from '../iterstuff/series/range.js';

// prints 'b', 'd', and 'f', which are
// the characters at indexes 1, 7, and 2
for (const value of get_values(range(1, 7, 2), 'abcdefg')) {
    console.log(value);
}


const object = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e: 50
};
const keys = ['b', 'c', 'e'];
const iterable_values = get_values(keys, object);

console.log([...iterable_values]); // [20, 30, 50]
console.log([...iterable_values]); // [20, 30, 50]
console.log([...iterable_values]); // [20, 30, 50]

object.c = 300;
keys.push('nonexistent');

console.log([...iterable_values]); // [20, 300, 50, undefined]
console.log([...iterable_values]); // [20, 300, 50, undefined]
console.log([...iterable_values]); // [20, 300, 50, undefined]