const person = {
    firstName: 'Ana',
    secondName: 'Marks',
    role: 'admin'
}

const newPerson = (object) => {

    let newPerson = object;
    newPerson.age = 24;

    for (const value in newPerson) {
        let element = newPerson[value];
        if (typeof (element) === 'string') {
            newPerson[value] = element.toUpperCase();
        }
    }
    return console.log(newPerson);
}

// newPerson(person);

const product = {
    name: 'Sony WH - 1000 XM3',
    price: '300.00',
    itemsInStock: 23
};

const returnArrayKey = (object) => {
    console.log(Object.keys(object));
}

returnArrayKey(product);

const returnArrayKeyValue = (object) => {
    console.log(Object.keys(object), Object.values(object));
}

returnArrayKeyValue(product);