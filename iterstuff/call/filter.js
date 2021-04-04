import {iterable} from '../iterable.js';

export const filter = (callable, source_iterable) => iterable(function* () {
    for (const element of source_iterable) {
        if (callable(element)) {
            yield element;
        }
    }
});