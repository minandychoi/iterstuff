import {max} from '../iterstuff/maths/max.js';
import {range} from '../iterstuff/series/range.js';

// prints 10 because it’s the biggest in the range
console.log( max(range(1, 11, 1)) );

// prints 4 because it’s the biggest in the range
console.log( max(range(-3, 5, 1)) );

// prints -Infinity because it uses Math.max internally
console.log( max([]) );

// prints NaN
console.log( max(['a']) );