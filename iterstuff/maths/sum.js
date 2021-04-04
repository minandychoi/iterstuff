import {iterator} from '../iterator.js';

export const sum = (iterable) => {
    const iterator_instance = iterator(iterable);
    const {value, done} = iterator_instance.next();
    if (done) {
        return NaN;
    } else {
        let result = value;
        for (const element of iterator_instance) {
            result += element;
        }
        return 1 * result;
    }
};