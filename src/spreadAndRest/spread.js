//Spread działa z funkcjami i tablicami

let number = [12,3,9,22,11,6];

//apply działą tak samo jak call, tylko rozbija tablice na elementy, tak jak byśmy wywołali Math.max.call(Math, 12,3,9,22,11,6). Poprostu nam rozdziela
console.log(Math.max.apply(Math, number));

//Ten jest uzywany w kontekscie wywołania funkcji. Spread działa na wszystkim co zawiera iterator
console.log(Math.max(...number));


// Operator spread  --- moze służyć jako concat
let numbers2 = [2,33,10];
// --W ES5
let connectedTable = numbers2.concat(number);
console.log('connectedTable :' + connectedTable);
// --W ES6
let newConnectedTable = [...numbers2, number];
console.log('connectedTable2:' + connectedTable);
