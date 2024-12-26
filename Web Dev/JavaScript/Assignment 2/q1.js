function findGrades(marks){
    switch (true) {
        case (marks <= 10):
            grade = 'E';
            break;
        case (marks >= 11 && marks <= 20):
            grade = 'D';
            break;
        case (marks >= 21 && marks <= 30):
            grade = 'C';
            break;
        case (marks >= 31 && marks <= 40):
            grade = 'B';
            break;
        case (marks >= 41 && marks <= 50):
            grade = 'A';
            break;
        default:
            grade = 'Invalid marks'; // Handle cases where marks are out of the defined range
    }

    return grade;
}

console.log(findGrades(40));