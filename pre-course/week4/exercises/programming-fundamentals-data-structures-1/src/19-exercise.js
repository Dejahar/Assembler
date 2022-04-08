/**
 * 1. Create an array with the grades of the students
 *    using one of the built in array loops such as
 *    forEach, map, etcera
 *
 * 2. Return the array of grades.
 */
function exercise19() {
    const students = [{
            firstName: 'David',
            lastName: 'Jones',
            grade: 8,
        },
        {
            firstName: 'Maria',
            lastName: 'Lee',
            grade: 9,
        },
        {
            firstName: 'Paul',
            lastName: 'Garcia',
            grade: 5,
        },
        {
            firstName: 'Michael',
            lastName: 'Brown',
            grade: 6,
        },
    ];

    let grades = [];

    students.forEach(element => {
        grades.push(element.grade);
    });

    return grades;
}


module.exports = exercise19;