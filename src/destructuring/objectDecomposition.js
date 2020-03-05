//Dekompozycja wyciągnięcie odpowiednich danych z jakieś strukury
let person = {
    firstName: "Piotr",
    lastName: "Kowlaski",
    age: 33
};

let person2 = {
    firstName: "Piotr2",
    lastName: "Kowlaski2",
    age: 22
};


//desctracturing
//powstały zmienne o zakresie let(może tez być var, const), po ':' oznacza nazwe nowej zmiennej utworzonej w wyniku destructingu
let { firstName, lastName: lname, age} = person;
console.log(firstName, lname, age);

//Zabezpieczenie sie przy destructuringu, gdy bedzie funkcja zwracac null/undefinied. W kazdym innym przypadku nie trzeba sie zabezpieczać
const getData = ()=> {
  return null;
};

let {country, street} = getData() || {};
console.log(country); //undefinied


//W przypadku, gdy wcześniej zostały zdeklarowane zmienne firstName, lname i age nalezy podac bez zakresu, oraz doatkowo oplątać w ().
// W przypadku nie podania zakrsu(let, const, var) interpreter widzi to jako {} i trzeba mu zasygnalizować, że chodzi nam o destrukturyzację
({firstName, lastName: lname, age} = person2);
