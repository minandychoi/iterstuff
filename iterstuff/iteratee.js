export const iteratee = (__iterator__) => {
//  cache has no inherited properties
    const cache = Object.create(null);
    const iterator = __iterator__();
    return {
        [Symbol.iterator]: function* () {
//          cache.length is set when it’s complete
            yield* cache.length === undefined
                ? __writer_iterator__(cache, iterator)
                : __reader_iterator__(cache);
        }
    };
};

// returns an iterator instance that writes to the cache
const __writer_iterator__ = function* (cache, iterator) {
//  the iterator is like an array of unknown length
    for (let i = 0; true; i += 1) {
        if (i in cache) {
            yield cache[i];
            continue;
        }
        const {value, done} = iterator.next();
        if (done) {
            cache.length = i;
            return;
        }
//      save the value to the cache
//      and yield the value
        yield cache[i] = value;
    }
};

// returns an iterator instance that reads from the cache
const __reader_iterator__ = function* (cache) {
    const {length} = cache;
    for (let i = 0; i < length; i += 1) {
        yield cache[i];
    }
};