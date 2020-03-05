//jesli bysmy nie utworzyli obiekt bez new, to obiekt this by wskazazywał na obiekt window
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

//kazda funkcja w ES5 ma prototyp, przez co mozemy sie do niego odwołać
Person.prototype.sayHello = function () {
    return 'HEllo : ' + this.firstName; //HEllo : Piotr
};


// class NewPerson {
//
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//
//     sayHelloClass() {
//         console.log(`Suveniraa::: ${this.firstName}+${this.lastName}`);
//     }
//
// }

//Dziedziczyc nie musimy dokładnie po klasie, możemy po funkcji(tylko z nie strzałkowej).
//W kasie, chociaż są funkcją, nie można korzystać z call, apply
class NewEmployee extends Person {
    //cały kod w klasie, korzysta takjakby ze "use strictmode"

    //W przypadku braku construktora, es6 tworzy nowy konstruktor z tablicą args
    //constructor(...args) {
    //     super(...args)
    // }

    constructor(firstName, lastName, position) {
        super(firstName, lastName);
        this.position = position;
    }

    sayHello() {
        //super kieruje na klase nadrzedna
        return super.sayHello() + " your position: " + this.position;
    }
}

// ------------------- Iterable by enumerable

let person = new Person("Jan", "Kowalski");

for(let key in person) {
    console.log('key : ', key); // key :  firstName | key :  lastName | key :  sayHello
}

// let newPerson = new NewPerson("Jan2", "Kowalski2");
//Przy wypisywaniu kluczy w klasie, metody są non-enumerable
// for(let key in newPerson) {
//     console.log('key2 : ', key); // key :  firstName | key :  lastName
// }

//----------------Dziedziczenie nie musi sie dokładnie odbywac po klasach
const newEmployee = new NewEmployee("Piotr", "Kulczyk", "Mojzesz");
console.log(newEmployee.sayHello()); //HEllo : Piotr your position: Mojzesz
