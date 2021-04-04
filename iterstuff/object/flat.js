import {iterable} from '../iterable.js';

const flattenable = Array.isArray;

export const flat = (depth, source_iterable) => iterable(function* () {
    if (depth < 1) {
        yield* source_iterable;
        return;
    }
    for (const element of source_iterable) {
        if (flattenable(element)) {
            yield* flat(depth - 1, element);
        } else {
            yield element;
        }
    }
});