import {iterable} from '../iterable.js';

export const take = (how_many, source_iterable) => iterable(function* () {
    let index = 0;
    for (const element of source_iterable) {
        if (index < how_many) {
            yield element;
        } else {
            return;
        }
        index += 1;
    }
});