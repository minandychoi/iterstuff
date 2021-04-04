import {iterable} from '../iterable.js';

export const enumerate = (source_iterable) => iterable(function* () {
    let index = 0;
    for (const element of source_iterable) {
        yield [index, element];
        index += 1
    }
});