// ternary operator

// let age  = 19
// age >= 18 ? console.log('OK') : console.log('error');


// 4. Bir party var.Bu partyde yaxsi qardaslar ve gozel xanimlar istirak edecek.Eger yas 18den boyukdurse ekrana yazilsin  salam cenab ve ya xanim istifadeciden gelen ad
// --------------------------------------------------------------------


// istifadeciden alacaqlarimiz
// name,gender,age
// ve burda gender yoxlamasini if else ile age yoxlamasini ise ternary operatoru ile edin...
// let gender = prompt('enter your gender');
// let firstName = prompt('what is your firstname?');
// let age = prompt('enter your age');
// let message = ''

// if (age >= 18) {
//     message = gender === 'k' ? `salam cenab ${firstName}` : gender === 'q' ? `salam xanim ${firstName}` : 'error'

//     if (gender === 'k') {
//         message =  `salam cenab ${firstName}`
//     }else if(gender === 'q'){
//         message = `salam xanim ${firstName}`
//     }
// }else{
//     message = 'yasiniz catmir'
// }
// console.log(message);

//suallar? 
/*
    3 ** 2 -> 9
    9 // 2 -> ?
*/



/*
    falsy -> false,null,undefined,0,NaN, "", ""
*/
// console.log(0 && 1)

/*
    a && b
        eger a truethy deyerdise b-ni qaytarir deyilse a-ni qaytarir
    a || b
        eger a truethy deyerdise a-ni qaytarir deyilse b-ni qaytarir
*/

// let mesaj = 4 && '0' || null && undefined
// '0' || null


// mesaj = false && true && 'OK' || 'salam' && 0;

// /*
//     false || 0;

//     0 -> 8
//     OK -> 1
//     false -> 2
// */



/*
    0 -> 6


*/


// mesaj = NaN && undefined && 0 || 1 || 'OK' && true || false
// /*
//     1 -> 5
//     NaN -> 4
// */
// console.log("mesaj: ",mesaj);

// let x = '1'
// !!x == Boolean(x)||

// console.log(+x);

// let  i  = 0;
// while(i <= 100){
//     document.write(i + "<br />")
//     i += 20 
// }
// let i = 0;
// let cem = 0;
// while(i <=100 ) {
//     if (i % 2 === 1) {
//         cem += i
//     }
//     i++
// }
// document.write(cem)


let soz = 'salam dunya'
let startIndex = 0;
let endIndex = soz.length;

// while(startIndex <= endIndex) {
//     document.write('*')
//     startIndex++
// }

// do {
//     document.write('*')
//         startIndex++
// }while(startIndex <= endIndex)


// for(let i = 100; i >= 0; i--) {
//     document.write(i + '<br />')
// }


// let i = 1;
// let hasil = 1;

// // for(;;) {
// //     hasil *= i
// // }
// document.write(hasil)


/*
    break
    continue
*/

// for(let i = 0; i <= 5; i++) {
//     if (i === 3) {
//         break;
//     }
//     document.write(i +'<br />')
// }




const CPUDAKI_EDED = Math.round(Math.random() * 100);
let MENIM_TAPDIGIM_EDED = +prompt('reqem necedir?');
let cehd = 1;

while (MENIM_TAPDIGIM_EDED !== CPUDAKI_EDED) {
    if (MENIM_TAPDIGIM_EDED < CPUDAKI_EDED) {
        MENIM_TAPDIGIM_EDED = +prompt('yuxari qalx');
    }else {
        MENIM_TAPDIGIM_EDED = +prompt('asagi dus');
    }
    cehd++
}

let message;
if(cehd < 5) {
    message = 'best killer 🗡: '  + cehd + ' cehde tapdin'
}else if (cehd >= 5 && cehd <= 10){
    message = 'lazyyyyy 🤓: ' + cehd + ' cehde tapdin'
}else {
    message = "what's going on 🤔: "  + cehd + ' cehde tapdin'
}
document.write(message)


