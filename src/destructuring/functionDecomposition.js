// function setSliderSpeed(options) {
//jesli do funkcji nic nie prześlemy, to {} jest domyślnym parameterem
function setSliderSpeed({speed: sliderSpeed, easing} = {}) {
    // let slider = {};
    let slider = {sliderSpeed, easing};
    // slider.speed = options.speed;
    // slider.easing = options.easing;
    //to co zakomentowałem to po poprostu przesyłało sie obiekt config, tworzyło nowy obiket i przypisywało wartosci z foncig
    //teraz to mozna zrobic w 1 kroku, korzystajac z destrukturyzacji funkcji


    console.log(slider)
}

const config = {
    autoPlay: true,
    speed: 500,
    pause: 2000,
    easing: 'linear',
    infinite: true
};

setSliderSpeed(config);
