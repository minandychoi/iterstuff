import {iterable} from '../iterable.js';

export const step_by = (step, source_iterable) => iterable(function* () {
    let index = 0;
    for (const element of source_iterable) {
        if (index % step === 0) {
            yield element;
        }
        index += 1;
    }
});