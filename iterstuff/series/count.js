import {iterable} from '../iterable.js';

export const count = (start, step) => iterable(function* () {
    yield start;
    while (true) {
        yield start += step;
    }
});