// const users = ['Tural','Mahir','Murtuz','Ayxan']
// const [developer,frontDeveloper,murtuz,ayxan,user] = users
// console.log(user);
// const usersContainer = document.getElementById('users')
// const showUsers = (arr) => {
//    const [birinci,ikinci,ucuncu] = arr;
//    usersContainer.innerHTML += `birinci yer ${birinci} <br />`
//    usersContainer.innerHTML += `ikinci yer ${ikinci} <br />`
//    usersContainer.innerHTML += `ucuncu yer ${ucuncu} <br />`
// }
// showUsers(['Tural','Mahir','Murtuz'])

// const [,,ikinci] = users
// console.log(ikinci);

const user = {
  name: "Ramin",
  surname: "Mammadzada",
  age: 56,
  department: "Development",
};

// const user2 = {
//     name:'Taleh',
//     surname:'Mammadzada',
//     age:56,
//     department:'Development',
// }
// let {surname,name,car}= user
// let {
//     surname:soyad,
//     name:ad,
//     car:masin
// }= user2

// console.log(ad);

// const usersContainer = document.getElementById('users')
// const users = [
//   { ad: "Taleh", soyad: "Agayev" },
//   { ad: "Ramin", soyad: "Mammadzada" },
//   { ad: "Eli", soyad: "Veliyev" },
//   { ad: "Samir", soyad: "Quliyev" },
// ];
// users.forEach(({ad:n,soyad:s}) => {
//     usersContainer.innerHTML += `<h2>${n} ${s}</h2>`
// })

//smart parameters
// function showData ({surname,age,name}) {
//     console.log(name + ' ' + surname + ' ' + age);
// }

// showData({name:"ramin",surname:'mammadzada',age:45})

// function showCarDetails({marka,model}){
//     console.log(marka + '-' + model);
// }

// const car = {marka:'mercedess',model:'w214'}
// showCarDetails(car)

// let insan = { name: "John", years: 30 };
// const {name,years:age,isAdmin = 'admin deyil'} = insan;
// console.log(name); // John
// console.log(age); // 30
// console.log(isAdmin); // false

// let ad = 'Ramin' //global

// function sayHello(){
//     let surname = 'mammadzada' //local
//     document.write('salam cenab ' + ad + '<br />')
// }
// ad = 'Eldar'
// console.log(ad) // Eldar
// sayHello() //

// ad = 'Elmar'
// console.log(ad) //Elmar
// sayHello() //

// function test(){}
// const test = function(){}
// const test = () =>

// test()
// //hoisting
// function test(){
//     console.log('salam');
// }

//nested functions
// function makeCounter(){
//     let count = 0;

//    return function(){
//     return ++count
//    }
// }
// console.log(makeCounter());

//recursive

// function A(){
//     console.log('a funksiyasi isledi')
//     B()
// }

// function B(){
//     console.log('b funksiyasi isledi')
//     A()
// }
// A()

/*
    function declaration
    function expression
    arrow function
    recursive function
    anonym function
    IIFE -> immediately-invoked function expressions
*/

//anonym
// console.log("anonimden evvel kod yazmisam.");

// (() => {
//   console.log("men anonim funksiyayam");
// })();

// console.log("anonimden sonra kod yazmisam.");


// baNaNa
let result = 'ba' + +"a" + 'a'
console.log(result.toLowerCase());