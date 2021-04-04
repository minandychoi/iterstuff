import {all} from '../iterstuff/call/all.js';
import {range} from '../iterstuff/series/range.js';

const less_than_10 = (x) => x < 10;

// prints true because all are less than 10
console.log(all( less_than_10, range(0, 10, 1) ));

// prints false because not all are less than 10
console.log(all( less_than_10, range(10, 20, 1) ));