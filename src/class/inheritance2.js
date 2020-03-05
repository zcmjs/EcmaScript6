//Dziedziczenie z wbudowanych typów

let array = new Array(10); //Tworzy to 10elementową tablice

class Collection extends Array {
    constructor(...args) {
        if (args.length === 1) {
            super(1);
            this[0] = args[0];
        } else {
            super(...args);
        }

    }

}

let col = new Collection(10);
console.log(col); //Collection [ 10 ]

let col2 = new Collection(10, 20, 30);
console.log(col2); //Collection [ 10, 20, 30 ]

