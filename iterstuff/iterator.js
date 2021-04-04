export const iterator = (iterable) =>
    iterable[
        Symbol.iterator  // get the iterator constructor
    ]();                 // make and return an iterator instance