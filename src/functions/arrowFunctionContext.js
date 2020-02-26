//*Global this
var firstName = "MAcius";

let person = {
    firstName: "Jan",
    lastName: "Kowalski",

    //pobiera zmienne z contextu funkcji, z której została wywołana (W tym przypadku context Person)
    sayHelloNormal: function () {
        return this.firstName + "_" + this.lastName;
    },

    // WAZNE, dla funkcji strzałkowych nie mozna wywolywac call, apply, bind bo nie mozna dla nich ustawic contextu
    sayHelloArrow: () => {
        return this.firstName + "_" + this.lastName; // jesli przy lastName usuniemy THIS to bedzie szukał tego w obiekcie globalnym
        //slowo this nie kieruje na obiekt, w ktorej sie znajduje
        //This tutaj, kieruje na taki context, ktory jest zdefiowane o 1 wyżej niz kontekst wtwołanej funkcji (w tym przypadku Global This, obiekt window)
    },


    sayHelloTimeout: function () {
        // setTimeout(function(){ //gdy bedzie z function, to będzie szukac this w konkscie sayHelooTimeout, a tak szuka o 1 context wyżej
        setTimeout(() => {
            console.log('Tomasz ' + this.firstName);
        }, 1000);
    }
};

console.log(person.sayHelloNormal()); //Jan_Kowalski

//Dla funkcji strzałkowej, nie da się ustawić contextu dla funkcji strzałkowej
console.log(person.sayHelloArrow()); //MAcius_undefined


person.sayHelloTimeout();


// ----------------------------TWORZENIE OBIEKTOW------------------------------------------------


// const OneElementObject = firstName => {  ---- Nie można z niej utworzyc obiektow, przezco mnie może być traktowana jako konstruktor
const OneElementObject = function (firstName) {
    this.firstName = firstName;
};

let anyObject = new OneElementObject('Hitler');
console.log('Szmata ' + anyObject.firstName);
