import {iterable} from '../iterable.js';

export const get_values = (keys, object) => iterable(function* () {
    for (const key of keys) {
        yield object[key];
    };
});