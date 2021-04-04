import {skip} from '../iterstuff/object/skip.js';

// prints 'b', 'c', 'd', and 'e'
for (const element of skip(1, 'abcde')) {
    console.log(element);
}

// the body doesn’t execute
for (const element of skip(3, 'abc')) {
    console.log(element);
}

const array = [30, 20, 10];
const iterable_skip = skip(1, array);

console.log([...iterable_skip]); // [20, 10]
console.log([...iterable_skip]); // [20, 10]
console.log([...iterable_skip]); // [20, 10]

array.unshift(40);
console.log([...iterable_skip]); // [30, 20, 10]
console.log([...iterable_skip]); // [30, 20, 10]
console.log([...iterable_skip]); // [30, 20, 10]