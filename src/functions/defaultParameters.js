function multiply(number, multiplyBy = 12) {
    //kiedys tworzenie domyslnej wartosci w EC5(podstawienie poniżej). Dla wartości 0, zostanie podstawiona 2, co jest błędne przy mnożeniu przez 0
    // multiplyBy = multiplyBy || 2;
    return number * multiplyBy;
}

console.log(multiply(12, 5)); //60
console.log(multiply(12, 0)); //0
console.log(multiply(12)); //144
console.log(multiply(12, null)); //0

//tutaj sie wywola, gdy code będzie miało wartość fałszywą.
//W kazdym kolejnym parameterze można korzystac do wcześniejszych parameterow
function getCountryCode(country, code = country.toUpperCase().slice(0, 3)) {
    console.log('Marmolade');
    return {
        country,
        code
    }
}

let countryCode = getCountryCode('plnJACkob');
console.log(countryCode);

// ----------------------------default parameters with arguments
const multiply2 = function (x, n = x) {
    console.log(' length arguments' ,arguments.length);

    // arguments[1] - gdy zmienimy jego wartość w pseduotablicy arguments nie spowoduje zmiany dla tego parametru (tutaj n)
    return x*y;//
};

//liczba zmiennej arguments, wynosi tyle ile jest argumentów (nie liczy wartosci domyslnych)
console.log(multiply2(12)); //length arguments 1
console.log(multiply2(12,7)); //length arguments 2

// sprawdzenie ile funkcja wymaga elementów (nie liczy parameterow domyslnych)
console.log('multiply2 requirement elements :: ' + multiply2.length);

