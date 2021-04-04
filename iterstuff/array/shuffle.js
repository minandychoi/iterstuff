import {iterable} from '../iterable.js';

const {random, floor} = Math;
const random_index = (start, end) =>
    floor(random() * (end - start)) + start;

export const shuffle = (array) => iterable(function* () {
//  Object.create(array) doesn’t work when passed a string 😔
    const cache = Object.create(null);
    const {length} = array;
    for (let i = 0; i < length; i += 1) {
        const r = random_index(i, length);
        [cache[i], cache[r]] = [
            cache[r] ?? array[r],
            cache[i] ?? array[i]  ];
        yield cache[i];
        delete cache[i];
    }
});