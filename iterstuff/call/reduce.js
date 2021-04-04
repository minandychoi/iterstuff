export const reduce = (callable, initial, iterable) => {
    let result = initial;
    for (const element of iterable) {
        result = callable(result, element);
    }
    return result;
};