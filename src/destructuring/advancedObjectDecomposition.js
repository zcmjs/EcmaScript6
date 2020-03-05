//dekompozycja, poniższej złożonej struktury
let person = {
    firstName: 'Janex',
    lastName: 'Kante',
    age: 2137,
    job: {
        name: 'Programmer',
        experience: 20
    },
    favNumbers: {
        list: [2, 7, 3]
    }
};

let {
    firstName: fName,
    age: age, //nie musze powtarzac, bo es6 pozwala to ukrócić
    job: {
        name: jobName,
        experience
    },
    favNumbers: {
        list: [, second]
    }
} = person || {};
console.log(fName, age, jobName, experience, second); // Janex 2137 Programmer 20 7
