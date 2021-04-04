import {iterable} from '../iterable.js';

export const range = (start, end, step) => iterable(function* (start, end, step) {
    if (step === 0) {
//      ??? then what range ??
        return;
    }
    const more_room = step > 0  // go up?
        ? (a, b) => a < b       // see if there’s more room above
        : (a, b) => a > b;      // otherwise check for room below
    while (more_room(start, end)) {
        yield start;
        start += step;
    }
}.bind(undefined, start, end, step));