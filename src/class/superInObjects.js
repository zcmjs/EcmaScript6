class Person {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        return `:::${this.firstName}_${this.lastName}:::`;
    }

}

const employee = {
    firstName: "Jan",
    lastName: "Gutowski",
    position: "progamista",
    //Jeśli odowłujemy się funkcji bazowej, to funkcja bazowa nie może nyć strzałkowa ani z zapisem function(){}
    sayHello() {
        return `NAzywam się ${super.sayHello()} i pracuje jako ${this.position}`;
    }
};


// Odwołanie statyczne do metody sayHello w Person w ES5
// Person.prototype.sayHello.call(employee); //:::Jan_Gutowski:::
// console.log(employee.sayHello());

//Odwołanie się obiektu, bez uzywania dziedziczenia
Object.setPrototypeOf(employee, Person.prototype); //Nazywam się :::Jan_Gutowski::: i pracuje jako progamista
