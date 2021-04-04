import {iterator} from '../iterstuff/iterator.js';

const array_iterator = iterator(['a', 'b', 'c']);

for (let i = 0; i < 5; i += 1) {
    console.log(array_iterator.next());
}

// {value: 'a', done: false}
// {value: 'b', done: false}
// {value: 'c', done: false}
// {value: undefined, done: true}
// {value: undefined, done: true}