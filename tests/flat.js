import {flat} from '../iterstuff/object/flat.js';

const array = [0, [1], [[2]], [[[3]]]];

console.log([...flat(0, array)]); // [0, [1], [[2]], [[[3]]]]
console.log([...flat(1, array)]); // [0, 1, [2], [[3]]]
console.log([...flat(2, array)]); // [0, 1, 2, [3]]

const iterable_flat = flat(3, array);

console.log([...iterable_flat]); // [0, 1, 2, 3]
console.log([...iterable_flat]); // [0, 1, 2, 3]
console.log([...iterable_flat]); // [0, 1, 2, 3]

array.push([[[[4]]]])
console.log([...iterable_flat]); // [0, 1, 2, 3, [4]]
console.log([...iterable_flat]); // [0, 1, 2, 3, [4]]
console.log([...iterable_flat]); // [0, 1, 2, 3, [4]]