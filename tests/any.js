import {any} from '../iterstuff/call/any.js';
import {range} from '../iterstuff/series/range.js';

const less_than_5 = (x) => x < 5;

// prints false because none is less than 5
console.log(any( less_than_5, range(5, 10, 1) ));

// prints true because at least one is less than 5
console.log(any( less_than_5, range(5, 0, -1) ));