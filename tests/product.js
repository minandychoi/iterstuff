import {product} from '../iterstuff/maths/product.js';
import {range} from '../iterstuff/series/range.js';

// 2 * 3 * 4 = 24
console.log( product(range(2, 5, 1)) );

// -6 * -5 * -4 = -120
console.log( product(range(-6, -3, 1)) );

// returns NaN when not passed an iterable of numbers
console.log( product([]) );
console.log( product(['a']) );