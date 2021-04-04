import {repeat} from '../iterstuff/series/repeat.js';

// prints 'a', 'a', and 'a'
for (const element of repeat(3, 'a')) {
    console.log(element);
}

const array = [1, 2, 3];
const iterable_repeat = repeat(2, array);

console.log([...iterable_repeat]); // [[1, 2, 3], [1, 2, 3]]
console.log([...iterable_repeat]); // [[1, 2, 3], [1, 2, 3]]
console.log([...iterable_repeat]); // [[1, 2, 3], [1, 2, 3]]

array.push(4, 5);
console.log([...iterable_repeat]); // [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]
console.log([...iterable_repeat]); // [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]
console.log([...iterable_repeat]); // [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]