function calculate(type) {
    console.log(arguments); //[Arguments] {'sum', 22, 2, 3, 7, 13}
    // arguments.slice(1);  arguments nie jest tablica (tylko pseudotablicą) przez co nie można  wywołać dostępnych operacji dla tablic np. slice
    const argsAsArray = [].slice.call(arguments, 1);
    return argsAsArray.reduce((previousValue, currentValue) => previousValue + currentValue);
}

//zbierane sa wszystkie elementy od 2,3,7,13 bo 22 to first element
function calculate2(type, firstElement, ...numbers) {
    return numbers.reduce((previousValue, currentValue) => previousValue + currentValue);
}

console.log(calculate('sum', 22,2,3,7,13)); //47
console.log(calculate2('sum', 22,2,3,7,13)); //25
