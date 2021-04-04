import {reverse} from '../iterstuff/array/reverse.js';

// prints 'c', 'b', and 'a'
for (const element of reverse('abc')) {
    console.log(element);
}

const array = [10, 20, 30];
const iterable_reverse = reverse(array);

console.log([...iterable_reverse]); // [30, 20, 10]
console.log([...iterable_reverse]); // [30, 20, 10]
console.log([...iterable_reverse]); // [30, 20, 10]

array.push(400);
console.log([...iterable_reverse]); // [400, 30, 20, 10]
console.log([...iterable_reverse]); // [400, 30, 20, 10]
console.log([...iterable_reverse]); // [400, 30, 20, 10]