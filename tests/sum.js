import {sum} from '../iterstuff/maths/sum.js';
import {range} from '../iterstuff/series/range.js';

// 2 + 3 + 4 = 9
console.log( sum(range(2, 5, 1)) );

// -6 + -5 + -4 = -15
console.log( sum(range(-6, -3, 1)) );

// returns NaN when not passed an iterable of numbers
console.log( sum([]) );
console.log( sum(['a']) );