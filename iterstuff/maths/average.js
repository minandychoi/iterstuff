export const average = (iterable) => {
    let sum = 0;
    let length = 0;
    for (const element of iterable) {
        sum += element;
        length += 1;
    }
//  dividing by zero returns NaN btw
    return sum / length;
};