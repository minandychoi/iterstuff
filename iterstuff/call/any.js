export const any = (callable, iterable) => {
    for (const element of iterable) {
//      if any element satisfies the condition
        if (callable(element)) {
            return true;
        }
    }
    return false;
};