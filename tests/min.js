import {min} from '../iterstuff/maths/min.js';
import {range} from '../iterstuff/series/range.js';

// prints 1 because it’s the smallest in the range
console.log( min(range(1, 11, 1)) );

// prints -3 because it’s the smallest in the range
console.log( min(range(-3, 5, 1)) );

// prints Infinity because it uses Math.min internally
console.log( min([]) );

// prints NaN
console.log( min(['a']) );