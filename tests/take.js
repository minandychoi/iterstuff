import {take} from '../iterstuff/object/take.js';

// prints 'a', 'b', and 'c'
for (const element of take(3, 'abcdefg')) {
    console.log(element);
}

const array = [50, 40, 30, 20, 10];
const iterable_take = take(3, array);

console.log([...iterable_take]); // [50, 40, 30]
console.log([...iterable_take]); // [50, 40, 30]
console.log([...iterable_take]); // [50, 40, 30]

array.unshift(70, 60);
console.log([...iterable_take]); // [70, 60, 50]
console.log([...iterable_take]); // [70, 60, 50]
console.log([...iterable_take]); // [70, 60, 50]