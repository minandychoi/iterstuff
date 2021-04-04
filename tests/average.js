import {average} from '../iterstuff/maths/average.js';
import {range} from '../iterstuff/series/range.js';

// (1 + 2 + 3 + … + 10) / 10 = 5.5
console.log( average(range(1, 11, 1)) );

// (-3 + -2 + -1 + 0 + 1 + … + 4) / 8 = 0.5
console.log( average(range(-3, 5, 1)) );

// returns NaN when not passed an iterable of numbers
console.log( average([]) );
console.log( average(['a']) );