import {map} from '../iterstuff/call/map.js';
import {flat} from '../iterstuff/object/flat.js';
import {flatmap} from '../iterstuff/call/flatmap.js';

const array = [0, 1, 2, 3];
const n_ns = (number) => Array(number).fill(number);

const iterable_map = map(n_ns, array);
console.log([...iterable_map]);         // [[], [1], [2, 2], [3, 3, 3]]

const iterable_flat = flat(1, iterable_map);
console.log([...iterable_flat]);        // [1, 2, 2, 3, 3, 3]

const iterable_flatmap = flatmap(n_ns, array);
console.log([...iterable_flatmap]);     // [1, 2, 2, 3, 3, 3]
console.log([...iterable_flatmap]);     // [1, 2, 2, 3, 3, 3]
console.log([...iterable_flatmap]);     // [1, 2, 2, 3, 3, 3]

array.push(4);
console.log([...iterable_flatmap]);     // [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
console.log([...iterable_flatmap]);     // [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
console.log([...iterable_flatmap]);     // [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]