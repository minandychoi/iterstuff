import {iterable} from '../iterable.js';

export const cycle = (source_iterable) => iterable(function* () {
    while (true) {
        yield* source_iterable;
    }
});