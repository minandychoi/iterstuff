import {iterable} from '../iterable.js';

export const map = (callable, source_iterable) => iterable(function* () {
    for (const element of source_iterable) {
        yield callable(element);
    }
});