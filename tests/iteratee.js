import {iteratee} from '../iterstuff/iteratee.js';

const iteratee_randoms = iteratee(function* () {
    yield Math.random();
    yield Math.random();
    yield Math.random();
});

console.log([...iteratee_randoms]); // [0.0963349874073542, 0.5982007229158708, 0.4915786964459077]
console.log([...iteratee_randoms]); // [0.0963349874073542, 0.5982007229158708, 0.4915786964459077]
console.log([...iteratee_randoms]); // [0.0963349874073542, 0.5982007229158708, 0.4915786964459077]