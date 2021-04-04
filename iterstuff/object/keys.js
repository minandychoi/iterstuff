import {iterable} from '../iterable.js';

export const keys = (object) => iterable(function* () {
    for (const key in object) {
        yield key;
    }
});