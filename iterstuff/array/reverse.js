import {iterable} from '../iterable.js';

export const reverse = (array) => iterable(function* () {
    for (let i = array.length - 1; i > -1; i -= 1) {
        yield array[i];
    }
});