function findSndSmallest(X, Y, Z) {
    if (A === B && B === C) {
        return -1;
    }
    let min = X;
    if (Y < min) {
        min = Y;
    }
    if (Z < min) {
        min = Z;
    }

    return min;
}

console.log(findSndSmallest(2, 9, 23));
console.log(findSndSmallest(10, 5, 7));
console.log(findSndSmallest(1, 3, 2));