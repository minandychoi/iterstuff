import {keys} from '../iterstuff/object/keys.js';

// prints '0', '1', and '2'
// note all keys are strings
for (const key of keys('abc')) {
    console.log(key);
}

const object = {
    a: 10,
    b: 20,
    c: 30
};
const iterable_keys = keys(object);

console.log([...iterable_keys]); // ['a', 'b', 'c']
console.log([...iterable_keys]); // ['a', 'b', 'c']
console.log([...iterable_keys]); // ['a', 'b', 'c']

object.d = 400;
console.log([...iterable_keys]); // ['a', 'b', 'c', 'd']
console.log([...iterable_keys]); // ['a', 'b', 'c', 'd']
console.log([...iterable_keys]); // ['a', 'b', 'c', 'd']