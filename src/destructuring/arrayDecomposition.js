// Dekompozycja tablic
let numbers = [10, 20, 30, 40, 50];

//gdyby pod numbers nie znalazła sie tablica lub obiekt, ktory zawiera iteratora. W przeciwnym wypadku, zostanie zwrócony błąd
let [first, second, , fourth] = numbers || [];
console.log(first, second, fourth);  //10 20 40

//Gdy wczesniej zostały utworzone zmienne, to nie trzeba ich oplatać (), tylko normalnie mozna przypisać

//trik ze zamianą wartosci (w innych wersjach, potrzebna była 3 zmienna. np)
let a =1, b = 2;
//mozna do tego użyc destructuringu
[a,b] = [b,a];
console.log(a,b); //2 1


// ---------------Uzycie operatora rest
let numbers2 = [11, 22, 33, 44, 55];

let [firstElement, secondElement, ,...rest] = numbers2 || [];
console.log(firstElement, secondElement, rest); // 11 22 [ 44, 55 ]

//-------------------- domyslne wartości sa przypisywane dla undefinied
let numbers3 = [10];
let [firstValue, secondValue = 2] = numbers3; //zamiast dwójdki, może byc funkcja zwracajaca wartosc. Funkcja sie wykona, gdy ta wartość bedzie null
console.log(firstValue, secondValue); //10 2
