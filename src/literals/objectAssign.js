// ------------------Object.assign()

function slider(config) {

    let deflauts = {
        speed: 500,
        pause: 3000,
        easing: "linear"
    };

    //Przy ponizszym rozwiazaniu, obiekt default pozostaje nie zmieniony
    const options = Object.assign({},deflauts, config);
    console.log(options);
    console.log(deflauts);
}

slider({
    speed: 666,
    super: 123
});
// W przypadku głębokiego klonowania musimy użyć innych sposóbów, ponieważ dla obiektów,funkcji kopiuje referencje

// istnieje object.is, ktory sluzy do porownywania obiektow. Działa jak operator ===
console.log("-0===+0");
console.log(-0===+0);
console.log("-----------");
console.log("Object.is(-0, +0)");
console.log(Object.is(-0, +0));
// --operator is działa tak samo jak ===, tylko w dwóch przypadkach działą inaczej (-0===+0 oraz NAN)
