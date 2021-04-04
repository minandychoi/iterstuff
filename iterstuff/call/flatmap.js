import {iterable} from '../iterable.js';

const flattenable = Array.isArray;

export const flatmap = (callable, source_iterable) => iterable(function* () {
    for (const element of source_iterable) {
        const result = callable(element);
        if (flattenable(result)) {
            yield* result;
        } else {
            yield result;
        }
    }
});