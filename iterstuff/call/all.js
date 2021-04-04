export const all = (callable, iterable) => {
    for (const element of iterable) {
//      if any element doesn’t satisfy the condition
        if (!callable(element)) {
            return false;
        }
    }
    return true;
};