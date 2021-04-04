import {iterable} from '../iterable.js';
import {iterator} from '../iterator.js';

// keeps zipping until the longest is done
export const maxzip = (...iterables) => iterable(function* () {
    const iterators = iterables.map(iterator);
    while (true) {                  // 🔁 repeat:
        const results = [];         // ⬅️ create `results`
        if (iterators.reduce((all_done, iterator) => {
            const {value, done} = iterator.next();
            results.push(value);    // ⬅️ populate `results`
            return all_done && done;
        }, true)) {
            return;
        } else {
            yield results;          // ⬅️ yield `results`
        }
    }
});