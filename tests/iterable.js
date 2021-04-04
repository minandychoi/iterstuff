import {iterable} from '../iterstuff/iterable.js';

const abc = iterable(function* () {
    yield 'a';
    yield 'b';
    yield 'c';
});

console.log([...abc]); // ['a', 'b', 'c']
console.log([...abc]); // ['a', 'b', 'c']
console.log([...abc]); // ['a', 'b', 'c']

const iterable_randoms = iterable(function* () {
    yield Math.random();
    yield Math.random();
    yield Math.random();
});

console.log([...iterable_randoms]); // [0.6880435622387984, 0.8108212685362783, 0.9818840645868512]
console.log([...iterable_randoms]); // [0.7161168804469513, 0.9863986119184649, 0.5110133630333937]
console.log([...iterable_randoms]); // [0.8528131310240747, 0.4383341751532497, 0.2865462169213502]