class Person {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        console.log(`::: ${this.firstName}_${this.lastName}:::`);
    }

    // ES6 --- tworzenie metod statycznych (Jeśli funkcja jest w klasy, to mozna stosować uproszczony zapis funkcji)
    static create2({fName: firstName, lName: lastName}) {
        return new Person(firstName, lastName);
    }
}

//Dodawanie statycznych właściwośći (Nie da sie tego dokonać wewnątrz klasy)
Person.ID = 2137;

//Dodawanie metody statycznej w ES5
Person.create = function(firstName, lastName){
    return new Person(firstName, lastName);
};

let person = Person.create("Tomasz",  "List");
person.sayHello();


let perseusz =`{
    "fName": "Bill",
    "lName": "Cosby"
}`;

let person2 = Person.create2(JSON.parse(perseusz));
person2.sayHello();
