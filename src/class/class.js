// W ES5, tworzenie klas
//jesli bysmy nie utworzyli obiekt bez new, to obiekt this by wskazazywał na obiekt window
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

//kazda funkcja w ES5 ma prototyp, przez co mozemy sie do niego odwołać
Person.prototype.sayHello = function () {
    console.log('HEllo : ' + this.firstName); //HEllo : Piotr
};
console.log(typeof Person); //function
var person = new Person("Piotr", "Kowalski");
person.sayHello();


//----------------- ES6 --------------
//klasy nie są hoistowane, znaczy nie mogę użyć klasy, zanim nie została zdefiniowana
//nie sa dodawane do obiektu glabalnego (jak są globalnie zdefiniowane)
//W przypadku klasy nie ma możliwości, nie użycia klasy new ()będzie błąd Class constructor
class NewPerson {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHelloClass() {
        console.log(`Suveniraa::: ${this.firstName}+${this.lastName}`);
    }

}

console.log(typeof NewPerson); //function. Przez to, że jest funkcją, możemy dodawać przez prototype nową metodę

NewPerson.prototype.sayHelloPrototype = function () {
    console.log(`Suveniraa::: ${this.firstName}-${this.lastName}`);
};

var newPerson = new NewPerson("Piotr", "Petersen");
newPerson.sayHelloPrototype(); //Suveniraa::: Piotr-Petersen
newPerson.sayHelloClass(); //Suveniraa::: Piotr+Petersen


// klasy to wciaż dziedziczenie prototypowe. W klasach to jest tylko syntactic sugar

