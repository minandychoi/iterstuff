import {cycle} from '../iterstuff/series/cycle.js';

for (const element of cycle('abc')) {
    console.log(element);
}

// a
// b
// c
// a
// b
// c
// a
// b
// c
// …and it keeps going forever