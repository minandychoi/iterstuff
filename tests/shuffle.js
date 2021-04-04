import {shuffle} from '../iterstuff/array/shuffle.js';

// prints each letter once in a random order
for (const element of shuffle('abcde')) {
    console.log(element);
}

const array = [0, 1, 2, 3];
const iterable_shuffle = shuffle(array);

console.log([...iterable_shuffle]); // [3, 1, 2, 0]
console.log([...iterable_shuffle]); // [1, 0, 2, 3]
console.log([...iterable_shuffle]); // [0, 3, 1, 2]

array.push(400);
console.log([...iterable_shuffle]); // [2, 400, 0, 1, 3]
console.log([...iterable_shuffle]); // [1, 0, 2, 400, 3]
console.log([...iterable_shuffle]); // [0, 3, 400, 1, 2]

import {to_iteratee} from '../iterstuff/to_iteratee.js';

const iteratee_shuffle = to_iteratee(iterable_shuffle);
console.log([...iteratee_shuffle]); // [3, 0, 1, 400, 2]
console.log([...iteratee_shuffle]); // [3, 0, 1, 400, 2]
console.log([...iteratee_shuffle]); // [3, 0, 1, 400, 2]