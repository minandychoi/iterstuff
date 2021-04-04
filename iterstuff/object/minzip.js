import {iterable} from '../iterable.js';
import {iterator} from '../iterator.js';

// keeps zipping until the shortest is done
export const minzip = (...iterables) => iterable(function* () {
    const iterators = iterables.map(iterator);
    while (true) {                      // 🔁 repeat:
        const results = [];             // ⬅️ create `results`
        for (const iterator of iterators) {
            const {value, done} = iterator.next();
            if (done) {
                return;
            } else {
                results.push(value);    // ⬅️ populate `results`
            }
        }
        yield results;                  // ⬅️ yield `results`
    }
});