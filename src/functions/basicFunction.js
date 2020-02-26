//W zapisie strzałkowym, jeśli funkcja zwraca bezposrednio obiekt, należy go opleść nawiasem okrągłym ()
const getPerson = (firstName, lastName) => ({
    firstName,
    lastName
});

let person = getPerson("Adolf", "Hitler");
console.log(person.lastName);

// -------------ARGUMENTS
//Kazda funkcja zawiera domyślną zmienną arguments
function args() {
    console.log(arguments);
}
// args();
// zostaną wyświetlone poniższe argumenty:
// Arguments
// ​callee: function ddd()
// ​length: 0
// ​Symbol(Symbol.iterator): function values()
// ​<prototype>: Object { … }
//W przypadku, gdy będziemy mieć funkcje args(arguments) to wartość zmiennej będzie undefinied, gdy nic nie wyślemy

// Dla funkcji strzałkowych, nie mają dostępu do zmiennej arguments, dla argumentów, dla której są dla niej wywoływane
const args2 = () => {
    console.log(arguments);
};
args2(); //ReferenceError: arguments is not defined

// Jeśli chcemy uzyskać arguments, to musimy opakować ją w jakąś inną funkcję. Będzie wtedy korzytsać z jej konekstu
