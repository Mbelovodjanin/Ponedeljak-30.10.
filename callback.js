//"use strict"
//  var myVar = "MyVar";
// varijabla =9;
// function addOne(num){
//     varijabla = 4;
//     return num + varijabla;
// }
// var result = addOne(4)
// console.log(result);
// console.log(varijabla);

// var global = 123;

// var sumOfTwo = function(a,b){
//     if(arguments.length >2){
//         return a+b+arguments[2]+arguments[3];
//     }
//     return a+b;
// }

// console.log(sumOfTwo(9,8,2,4));
// console.log(global);

console.log(isFinite("1e+3"));

function test() {
    var a;
    function foo() {
        return 2;
    }

    console.log(a);
    console.log(foo());
    var a = 1;
}
test();

// callback primer
function prolazakKrozNiz(niz, callback) {
    var output = [];
    for (var i = 0; i < niz.length; i++) {
        if (callback(niz[i])) {
            output.push(niz[i]);
        }
    }
    return output;
}

var result = prolazakKrozNiz([1, 2, 3, 4, 5, 6, 7], function (broj) {
    if (broj % 2 === 0) {
        return true;
    }
    return false;
});
console.log(result);

//IIFE primer

var iife = (function (broj) {
    return 1 + broj;
})(7);
console.log(iife);

function sayName(name, callback) {
    console.log(callback(name));
}
sayName("2", isFinite);

//pravimo f-ju koja ce prolaziti kroz

function through(niz, cb, cb2) {
    var sum = cb(niz);
    var even = cb2(sum);
    return even;
}

//da iz niza ocekuje sumu

function sum(niz) {
    var sum = 0;
    for (var i = 0; i < niz.length; i++) {
        sum += niz[i];
    }
    return sum;
}

//da bude paran ili neparan

function even(num) {
    if (num % 2 == 0) {
        return true;
    }
    return false;
}
console.log(through([1, 2, 3, 3], sum, even));

// f-ja koja prolazi kroz niz, da li je tip podatka broj i da izracuna sumu samo za one clanove koji su brojevi

function prolazak(niz, cb) {
    var suma = 0;
    for (var i = 0; i < niz.length; i++) {
        if (cb(niz[i])) {
            suma += niz[i];
        }
    }
    return suma;
}

function checkType(element) {
    if (typeof element === "number" && !isNaN(element)) {
        return true;
    }
    return false;
}
console.log(
    prolazak([1, 2, 3, 4, 5, "martin", undefined, null, NaN], checkType)
);

//// 1. Create an IIFE that logs "Hello, world!" to the console

(function (param, callback) {
    callback(param);
})("Hello world", console.log);
//(function(){
//  console.log('hello world')
//})()

//// 2. Create an IIFE that takes a name parameter and logs "Hello, name!" to the console.
//odradjen

// Write a function that checks if a given string is valid password. The password is valid if it
// is at least 6 characters long and contains at least one digit. The function should receive
// two callbacks named successCallback and errorCallback that should be called in case
// password is correct or invalid.
// Input: JSGuru
// Output: Your password is invalid!
//sesti zadatak

function checkPassword(string, successCallback, errorCallback) {
    if (string.length < 6) {
        return errorCallback;
    }
    for (var i = 0; i < string.length; i++) {
        if (
            typeof parseFloat(string[i]) === "number" &&
            !isNaN(parseFloat(string[i]))
        ) {
            return successCallback();
        }
    }
    return  errorCallback();
}
function errorCallback() {
    return "your password is invalid";
}
function successCallback() {
    return "your password is valid";
}
console.log(checkPassword("Martin23", successCallback, errorCallback));
