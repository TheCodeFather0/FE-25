/*
    1. +
    2. -
    3. /
    4. *
    5. **
    6. %
    7. =
    8. ==
    9. ===
 */




// let a = 5
// let b = 5
// let c = a  + b //hello world
// document.write(c);


// let c = '5a';
// let d = 6;
// let result = c - d;
// result = +c - +d
// result = NaN - 6
// // result = 5 - 6 // -1

// console.log(result);




// let n1 = '15';
// let n2 = '5'
// // let result = 4 ** 4
// result = 16 % 6


// let a = 'salam' //string
// let b = 'salam'  //number
// let result = a == b

// console.log(result);
// 0 = 0
// 5 = 5
// salam = 5


//increment ++
//decrement --

// let sira_1 = 15; //16
// let sira_2 = ++sira_1;

// console.log("sira_1: ",sira_1); //16
// console.log("sira_2: ",sira_2); //15



let a = 23;
let b = a++
let c = a++;

/*
    a -> 25
    b -> 23
    c -> 24
*/


/*
    >
    <
    >=
    <=

    ==
    ===

    ! -> not
*/
// console.log('0' !== 0); //

//   ==  !-> !=
//   === !-> !==


// console.log('ab' > 'aa');

let n = 5;
// eger n cut ededdirse konsola yazdir ok
// deyilse yazdir err


// let username = prompt('enter your name');
// let gender = prompt('enter your gender (k / q)');

// if (gender === 'k') {
//     console.log(`salam cenab ${username}`);
// }else if(gender === 'q') {
//     console.log(`salam xanim ${username}`);
// }else {
//     console.log('gender error');
// }

// let day = +prompt('heftenin necenci gunudur?');
// if(day === 1) {
//     document.write('bazar ertesi');
// }else if (day === 2) {
//     document.write('cersenbe axsami');
// }else if (day === 3) {
//     document.write('cersenbe');
// }else if (day === 4) {
//     document.write('cume axsami');
// }else if(day === 5) {
//     document.write('cume');
// }else if (day === 6) {
//     document.write('senbe');
// }else if (day === 7) {
//     document.write('bazar');
// }else{
//     document.write('bele bir gun yoxdur');
// }

// switch(day){
//     case 1:
//         document.write('bazar ertesi');
//         break;
//     case 2:
//         document.write('cersenbe axsami');
//         break;
//     case 3:
//         document.write('cersenbe');
//         break;
//     case 4:
//         document.write('cume axsami');
//         break;
//     case 5:
//         document.write('cume');
//         break;
//     case 6:
//         document.write('senbe');
//         break;
//     case 7:
//         document.write('bazar');
//         break;
//     default:document.write('bele bir gun yoxdur');
// }



// let username = prompt('enter your name');
// let gender = prompt('enter your gender (k / q)');

// switch (gender) {
//     case 'k':
//     case 'K':
//         console.log(`salam cenab ${username}`)
//         break;
//     case 'q':
//     case 'Q':
//         console.log(`salam xanim ${username}`);
//         break;
//     default: console.log('unknown gender error');
// }


// if (gender === 'k' || gender === 'K') {
//     document.write(`salam cenab ${username}`);
// }else if(gender === 'q' || gender === 'Q') {
//     document.write(`salam xanim ${username}`);
// }else {
//     document.write('gender error');
// }
/*
    && -> and
    || -> or
    ! -> not
*/


let username = prompt('enter your username'); //admin
let password = prompt('enter your password'); //admin123

if (username === 'admin' && password === 'admin123') {
    document.write(`sisteme xos geldiniz cenab ${username} 😊`)
} else {
    document.write('wrong username or password❌');
}
