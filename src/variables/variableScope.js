(function () {

    //Zmienne, które są utworzone za pomocą let, const nie występuje zjawisko hoistingu (wynoszonia na góre)
    //Dotyczy to wszystkich klamer '{' np if, for, itp
    // console.log(firstName); ---> ReferenceError: firstName is not defined
    let firstName = "Piotr";
    console.log(firstName);

    //scope działa dla wszytskch, rzeczy opakowanych w klamry, klamry wyznaczają zakres
    {
        let age = "32";
        console.log(age);
    }
    // console.log('ddd', age); <--- ReferenceError: age is not defined


    //Dodatkowo dla let, const nie można powtórnie zdeklarować zmiennej (redeklarowanie zmiennej) w danym zakresie w danym
    var example1 = 'DDD';
    var example1 = 'DXX';
    console.log(example1);
    let exampleLet = '333';
    // Nawet jeśli zmienna została najpierw oznaczona let a następnie vat to wyrzuci nam wyjątek Identifier 'exampleLet' has already been declared
    // let exampleLet = '666'; <---SyntaxError: Identifier 'exampleLet' has already been declared
    // var exampleLet = '123'; <---SyntaxError: Identifier 'exampleLet' has already been declared

    console.log(typeof firstName);
    console.log(typeof age);

    console.log("PRzykład domknięcia !!!");
    // PRzyklad domkniecie
    let fns = [];
    for (var i = 0; i < 10; ++i) {
        fns.push(function () {
            console.log('cos' + i);
        })
    }

    fns.forEach(fn => {
        fn()
    })
})();

//Jeśli utworzymy zmienną var, to zostanie zapisana do obiektu window
// var firstName = 'Jan' <=> window.firstName = 'Jan';

// Zmienne const i let nie są dodawane do zmiennej window, nawet gdy są globalne
