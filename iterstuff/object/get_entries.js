import {iterable} from '../iterable.js';

export const get_entries = (keys, object) => iterable(function* () {
    for (const key of keys) {
        yield [key, object[key]];
    };
});