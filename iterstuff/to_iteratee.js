import {iteratee} from './iteratee.js';

export const to_iteratee = (iterable) => iteratee(iterable[Symbol.iterator]);