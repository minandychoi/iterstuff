import {iterable} from '../iterstuff/iterable.js';
import {to_iteratee} from '../iterstuff/to_iteratee.js';

const iterable_randoms = iterable(function* () {
    yield Math.random();
    yield Math.random();
    yield Math.random();
});

console.log([...iterable_randoms]); // [0.6880435622387984, 0.8108212685362783, 0.9818840645868512]
console.log([...iterable_randoms]); // [0.7161168804469513, 0.9863986119184649, 0.5110133630333937]
console.log([...iterable_randoms]); // [0.8528131310240747, 0.4383341751532497, 0.2865462169213502]

const iteratee_randoms = to_iteratee(iterable_randoms);

console.log([...iteratee_randoms]); // [0.0963349874073542, 0.5982007229158708, 0.4915786964459077]
console.log([...iteratee_randoms]); // [0.0963349874073542, 0.5982007229158708, 0.4915786964459077]
console.log([...iteratee_randoms]); // [0.0963349874073542, 0.5982007229158708, 0.4915786964459077]