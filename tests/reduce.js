import {reduce} from '../iterstuff/call/reduce.js';
import {range} from '../iterstuff/series/range.js';

const add = (x, y) => x + y;

//  0 + 1 + 2 + 3 + … + 10 = 55
console.log(reduce( add, 0, range(1, 11, 1) ));

// '' + 1 + 2 + 3 + … + 10 = '12345678910'
console.log(reduce( add, '', range(1, 11, 1) ));