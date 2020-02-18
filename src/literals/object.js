function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.sayHello = function () {
    return this.firstName + "_" + this.lastName;
};

// -------------------Object.setPrototypeOf-----------------------

const person1 = new Person("Piotr", "Kowalski");
const person2 = new Person("Danuta", "Kamczatka");

//zmiana portotypowania
const newMethod = {
    sayHello() {
        return (this.firstName + "_" + this.lastName).toUpperCase() ;
    }
};

Object.setPrototypeOf(person1, newMethod);


console.log(person1.sayHello());
console.log(person2.sayHello());
