import {iterable} from '../iterable.js';
import {iterator} from '../iterator.js';

export const skip = (how_many, source_iterable) => iterable(function* () {
    const iterator_instance = iterator(source_iterable);
    for (let i = 0; i < how_many; i += 1) {
        if (iterator_instance.next().done) {
            return;
        }
    }
    yield* iterator_instance;
});