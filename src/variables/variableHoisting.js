(function () {

    //W skrócie interpreter wynosi deklarację zmiennych oraz funkcje na samą góre
    //var firstName; <-- dla interpretatora wyglada tak samo. Zmienne są wynoszone na góre, ale są undefinied (nie są inicjalizowane wartością !!!)
    //Funckje są wynoszone na górę zakresu, i można odrazu z nich korzystać, w przeciwieństwie do zmiennych
    console.log(getSecret());//<---xD
    console.log(firstName);  //<---undefinied
    console.log(secondName); //<--- ReferenceError: secondName is not defined

    var firstName = "Janusz";

    //Hoisting - wynoszenie deklaracji funkcji na samą górę danego zakresu.
    //Funkcje tez sa hoistowane

    function getSecret(){
        return "xD";
    }

    if(false) {
        var superSecret = ";XD"
    }
    //Wszystkie deklaracje zmiennych są hoistowane, zanim/nawet kod sie wykona
    console.log(superSecret);

})();
