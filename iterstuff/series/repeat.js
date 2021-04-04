import {iterable} from '../iterable.js';

export const repeat = (num_times, what_to_yield) => iterable(function* () {
    for (let i = 0; i < num_times; i += 1) {
        yield what_to_yield;
    }
});