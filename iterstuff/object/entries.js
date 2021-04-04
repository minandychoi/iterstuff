import {iterable} from '../iterable.js';

export const entries = (object) => iterable(function* () {
    for (const key in object) {
        yield [key, object[key]];
    }
});