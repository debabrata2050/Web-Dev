function Triangle_Check(A, B, C) {
    if (A + B + C !== 180) {
        return "Invalid triangle";    
    }

    return (A < 90 && B < 90 && C < 90) ? "acute" : "obtuse";
}

console.log(Triangle_Check(60, 100, 20));
console.log(Triangle_Check(60, 60, 60));
console.log(Triangle_Check(90, 45, 45));
console.log(Triangle_Check(30, 30, 120));
console.log(Triangle_Check(0, 90, 90));