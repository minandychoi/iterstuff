import {iterable} from '../iterable.js';

export const chain = (...iterables) => iterable(function* () {
    for (const iterable of iterables) {
        yield* iterable;
    }
});