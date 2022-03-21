// •	Write a function that from a multidimensional array of students is capable of returning all students of a certain age 
// (which the function receives as a parameter) and put the code snippet.

// o	Array: [["Aguirre", 21],["Allen", 33],["Allison", 25],
// ["Barnes", 55],["Berg", 52],["Black", 12],["Bowman", 21],
// ["Bryan", 76],["Burke", 77],["Caldwell", 54],["Carrillo", 21]];

function findStudents(age) {
    let result = [];
    let students = [
        ["Aguirre", 21],
        ["Allen", 33],
        ["Allison", 25],
        ["Barnes", 55],
        ["Berg", 52],
        ["Black", 12],
        ["Bowman", 21],
        ["Bryan", 76],
        ["Burke", 77],
        ["Caldwell", 54],
        ["Carrillo", 21]
    ];

    for (let index = 0; index < students.length; index++) {
        const studentAge = students[index][1];
        if (studentAge == age) {
            result.push([students[index][0], students[index][1]]);
        }
    }
    console.log(result);
}
// findStudents(21);


// •	Write a function that returns only even numbers greater than 4 from an
// array of integers
// o	Array: [ 1, 4, 5, 65, 77, 88, 90, 23, 34, 56, 65, 44, 21,13 ];
function greaterEven() {
    let numbers = [1, 4, 5, 65, 77, 88, 90, 23, 34, 56, 65, 44, 21, 13];
    let total = [];
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        if (element % 2 == 0 && element > 4) {
            total.push(element);
        }
    }
    console.log(total);
}

// greaterEven();

// •	Write a function that returns the students of a one-dimensional array whose
// name has more than N characters (that the function will receive per parameter)
// Array: ['Aguirre','Allen','Allison','Barnes','Berg','Black','Bowman',
// 'Bryan','Burke','Caldwell','Carrillo'];

function characterSize(size) {
    let students = ['Aguirre', 'Allen', 'Allison', 'Barnes', 'Berg',
    'Black', 'Bowman', 'Bryan', 'Burke', 'Caldwell', 'Carrillo'];
    let total = [];

    for (let index = 0; index < students.length; index++) {
        const element = students[index];
        if(element.length > size){
            // console.log("Tamanho:", element.length,"Size:", size, "Element:", element);
            total.push(element);
        }
    }
    console.log(total);
}

characterSize(6);