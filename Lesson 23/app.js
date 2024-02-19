// function hesabla(n1, n2, o) {
//     let cavab;
//     switch (o) {
//         case '+':
//             cavab = n1 + n2;
//             break;
//         case '-':
//             cavab = n1 - n2;
//             break;
//         case '*':
//             cavab = n1 * n2;
//             break;
//         case '/':
//             cavab = n1 / n2;
//             break;
//         default: cavab = 'duzgun operator daxil edilmeyib'
//     }
//     return cavab;
// }
// console.log(hesabla(5, 2, '*'));
// document.write(hesabla(5, 2, '*'));
// alert(hesabla(5, 2, '*'));


// function salamla(user){
//     let mesaj = "salam " + user
//     return mesaj
// }

// const kamraniSalamla = "salam kamran"
// document.write(salamla('Murtuz'));




// function cemle(){
//     // return 5 + 3;
//     let mesaj = "bu gun hava soyuqdur"
//     alert("ramin deyirki: " + mesaj)
//     return mesaj;
// }
// console.log(cemle());


// function a() {
//     return "salam dostlar"
// }

// const b = a();
// console.log(b);



// "show…" – usually show something.
// "get…" – return a value
// "calc…" – calculate something
// "create…" – create something
// "check…" – check something and return a boolean


// function checkAge(){}
// function createNewTag(){}
// function getData(){
//     return 
// }
// function showName(ad){
//     return ad
// }
// document.write(adimiGoster("Ramin"))




// function cem(a, b) {
//     console.log(a * b);
//       a + b
// }
// one function one action



// function pow(a,b){
//     return Math.pow(a,b)
// }

// console.log(pow(2,3));
// document.write(pow(5,8));


// function test(){} // functin declaration

/*
    RETURN-U OLMAYAN FUNKSIYALAR VOID FUNKSIYA ADLANIR
*/


// let ad = "Ramin" // string expression
// let yas = 43; // number expression
// let isAny = false //boolean expression

// function test(){} // functin declaration
// let cem = function(){} //function expression
//arrow function

// function sayHello(){
//     return "salam olsun."
// }
// const salamla = function(user){
//     return "salam " + user
// }
// console.log(salamla("Kamran"))

// const a = function (test) {
//     console.log("salam");
// }


// function a(){}
// const a = function(){}
// const a = () => {
//    return ''
// } 


// const hesabla = (a,b) => {
//     return a + b
// }
// console.log(hesabla(5,7));


/*
    funksiya yazin,parametr alsin,aldigi parametr string olsun ve geriye strgindeki sozleri tersine qaytarsin
*/


// const eksineYazdir = (soz) => {
//     let yeniSoz = '';
//     for (let i = soz.length - 1; i >= 0;i--){
//         yeniSoz += soz[i]
//     }
//     return yeniSoz;
// }
// document.write(eksineYazdir("Salam"));


// const cemle = (a,b) => a + b
// document.write(cemle(10,20))


// const a = () => {}
/*
    string,number,boolean,null,undefined,null,NaN
*/
// a()



// const isOKForParty = (age,yes,no) => {
//     if (age > 18) {
//         yes()
//     }else{
//         no()
//     }
// }


// isOKForParty(
//     10,
//     function(){alert('OK')},
//     function(){alert('error')}
// )



// const isOKForParty = (age,yes,no)=> {
//     if (age > 18) {
//        yes()
//     }else {
//         no()
//     }
// }
// const success = () => {
//     alert('OK')
// }
// const error = () => {
//     alert('error')
// }
// isOKForParty(18,success,error)





// const salamla = (user,hiAdmin,hiUser) => {
//     if (user === 'admin') {
//         hiAdmin()
//     }else {
//         hiUser();
//     }
// }
// salamla(
//     'admin',
//     () => console.log('salam cenab admin'),
//     () => console.log('salam əəə user')
// )



//function declaration
//function expression
//arrow function
//callback function




function salamla(){
    return "salam dunya"
}
document.write(salamla()) //hoisting
