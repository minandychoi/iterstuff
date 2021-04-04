import {enumerate} from '../iterstuff/object/enumerate.js';

// prints [0, 'a'], [1, 'b'], and [2, 'c']
// note that the keys are numbers not keys
for (const element of enumerate('abc')) {
    console.log(element);
}

const array = [10, 20, 30];
const iterable_enumerate = enumerate(array);

console.log([...iterable_enumerate]); // [[0, 10], [1, 20], [2, 30]]
console.log([...iterable_enumerate]); // [[0, 10], [1, 20], [2, 30]]
console.log([...iterable_enumerate]); // [[0, 10], [1, 20], [2, 30]]

array.push(400);
console.log([...iterable_enumerate]); // [[0, 10], [1, 20], [2, 30], [3, 400]]
console.log([...iterable_enumerate]); // [[0, 10], [1, 20], [2, 30], [3, 400]]
console.log([...iterable_enumerate]); // [[0, 10], [1, 20], [2, 30], [3, 400]]