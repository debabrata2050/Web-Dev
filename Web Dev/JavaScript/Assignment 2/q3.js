function Max_out_of_three(A, B, C) {
    if (A === B && B === C) {
        return -1;
    }

    let max = A;
    if (B > max) {
        max = B;
    }
    if (C > max) {
        max = C;
    }

    return max;
}

console.log(Max_out_of_three(2, 5, 4));