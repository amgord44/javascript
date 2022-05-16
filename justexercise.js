const grade = [50, 99, 85, 77];

const newGrade = grade.reduce((top, old) => {
    if (old > top) return old;
    return top;
});