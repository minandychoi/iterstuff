import {step_by} from '../iterstuff/object/step_by.js';

// prints 'a', 'c', and 'e'
for (const element of step_by(2, 'abcde')) {
    console.log(element);
}

const array = [0, 1, 2, 3, 4];
const iterable_step_by = step_by(3, array);

console.log([...iterable_step_by]); // [0, 3]
console.log([...iterable_step_by]); // [0, 3]
console.log([...iterable_step_by]); // [0, 3]

array.push(5, 6);
console.log([...iterable_step_by]); // [0, 3, 6]
console.log([...iterable_step_by]); // [0, 3, 6]
console.log([...iterable_step_by]); // [0, 3, 6]