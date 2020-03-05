//Dziedziczenie w ES6
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.sayHello = function () {
    return 'HEllo : ' + this.firstName;
};

function Employee(firstName, lastName, position) {
    Person.call(this, firstName, lastName);
    this.position = position;
}

Employee.prototype = Object.create(Person.prototype);
//Przez to, że nadpisaliśmy , pozbyliśmy sie funkcji do tworzenia obiektów Employee
Employee.prototype.constructor = Employee;
//Nadpisanie metody sayHello dla Employee
Employee.prototype.sayHello = function () {
    var name = Person.prototype.sayHello.call(this);
    return name + ' and you work as ' + this.position;
};

var employee1 = new Employee("Jan", "Kowalski", "Programista");
console.log(employee1.sayHello()); //HEllo : Jan

// --------------W ES 6 -----------------------------------
class NewPerson {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        return 'HElloX : ' + this.firstName;
    };

}

class NewEmployee extends NewPerson {

    //W przypadku braku construktora, es6 tworzy nowy konstruktor z tablicą args
    //constructor(...args) {
    //     super(...args)
    // }

    constructor(firstName, lastName, position) {
        super(firstName, lastName);
        //Nie można skorzystać z this, zanim nie skorzystamy z super
        this.position = position;
    }

    sayHello() {
        //super kieruje na klase nadrzedna
        return super.sayHello() + " your position: " + this.position;
    }
}

var newEmployee = new NewEmployee("Jan", "Kowalski", "Programista");
console.log(newEmployee.sayHello());
