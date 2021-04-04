import {get_entries} from '../iterstuff/object/get_entries.js';
import {range} from '../iterstuff/series/range.js';

// prints [1, 'b'], [3, 'd'], and [5, 'f']
for (const entry of get_entries(range(1, 7, 2), 'abcdefg')) {
    console.log(entry);
}

const object = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e: 50
};
const keys = ['b', 'c', 'e'];
const iterable_entries = get_entries(keys, object);

console.log([...iterable_entries]); // [['b', 20], ['c', 30], ['e', 50]]
console.log([...iterable_entries]); // [['b', 20], ['c', 30], ['e', 50]]
console.log([...iterable_entries]); // [['b', 20], ['c', 30], ['e', 50]]

object.c = 300;
keys.push('nonexistent');

console.log([...iterable_entries]); // [['b', 20], ['c', 300], ['e', 50], ['nonexistent', undefined]]
console.log([...iterable_entries]); // [['b', 20], ['c', 300], ['e', 50], ['nonexistent', undefined]]
console.log([...iterable_entries]); // [['b', 20], ['c', 300], ['e', 50], ['nonexistent', undefined]]