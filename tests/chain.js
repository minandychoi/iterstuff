import {chain} from '../iterstuff/series/chain.js';

// prints 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', and 'i'
for (const element of chain('abc', 'def', 'ghi')) {
    console.log(element);
}

const a = [1,  2,  3];
const b = [10, 20, 30];
const iterable_chain = chain(a, b);

console.log([...iterable_chain]); // [1, 2, 3, 10, 20, 30]
console.log([...iterable_chain]); // [1, 2, 3, 10, 20, 30]
console.log([...iterable_chain]); // [1, 2, 3, 10, 20, 30]

a.push(4);
b.push(40);
console.log([...iterable_chain]); // [1, 2, 3, 4, 10, 20, 30, 40]
console.log([...iterable_chain]); // [1, 2, 3, 4, 10, 20, 30, 40]
console.log([...iterable_chain]); // [1, 2, 3, 4, 10, 20, 30, 40]