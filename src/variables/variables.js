(function () {
    var firstName = "Janusz";
    if(1) {
        var secondName = "Filipiak";
    }

    (function(){
        var thirdName = "II";
    })();

    console.log(firstName);
    console.log(secondName);
    console.log(thirdName);

    //Janusz
    //Filipiak
    //ReferenceError: thirdName is not defined
})();
// Zmienne w EcmaScript 5 mogą być ograniczone, wyłącznie funkcją. !!!!
// W przypadku if, for jest dalej widoczny
