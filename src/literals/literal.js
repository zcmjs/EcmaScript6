let firstName = "Andrzej";
let lastName = "Gołota";

const person = {
    firstName: firstName,
    lastName: lastName
};

// W ECMA 6 mozemy powyzszy zapis zapisac krócej
const shortenPerson = {
    firstName,
    lastName
};

console.log(shortenPerson);

//concise Methods
//W starym zapisie:
const personex = {
    firstName: firstName,
    lastName: lastName,
    getFullName: function () {
        return firstName + " " + lastName;
    }
};
console.log(personex.getFullName());
//W nowym ECMA6, skrócony zapis:
const personeES6 = {
    firstName: firstName,
    lastName: lastName,
    getFullName() {
        return firstName + " " + lastName;
    }
};
console.log(personeES6.getFullName());

// ------------------------------------------------------------------------------------

const superFunction = "Diodo";
const alan = {
    firstName: firstName,
    lastName: lastName,
};

alan[superFunction] = function () {
    console.log(this.firstName + '!!!');
};

alan.Diodo();

// lub zapis z ES6
const superFunctionTwo = "umberlla";
const alanes6 = {
    firstName: firstName,
    lastName: lastName,
    [superFunctionTwo]() {
        console.log(this.firstName + '!$!');
    }
};

alanes6.umberlla();
