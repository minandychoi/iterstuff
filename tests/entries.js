import {entries} from '../iterstuff/object/entries.js';

// prints ['0', 'a'], ['1', 'b'], and ['2', 'c']
for (const entry of entries('abc')) {
    console.log(entry);
}

const object = {
    a: 10,
    b: 20,
    c: 30
};
const iterable_entries = entries(object);

console.log([...iterable_entries]); // [['a', 10], ['b', 20], ['c', 30]]
console.log([...iterable_entries]); // [['a', 10], ['b', 20], ['c', 30]]
console.log([...iterable_entries]); // [['a', 10], ['b', 20], ['c', 30]]

object.d = 400;
console.log([...iterable_entries]); // [['a', 10], ['b', 20], ['c', 30], ['d', 400]]
console.log([...iterable_entries]); // [['a', 10], ['b', 20], ['c', 30], ['d', 400]]
console.log([...iterable_entries]); // [['a', 10], ['b', 20], ['c', 30], ['d', 400]]