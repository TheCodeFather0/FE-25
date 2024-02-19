// let number = 50;
// let userNumber = +prompt('reqem necedir?');
// let attemps = 1;

// while(userNumber !== number) {
//     userNumber = +prompt('reqem necedir?');
//     attemps++;
// }

// if (attemps === 1) {
//     document.write(`${attemps} cehde tapdiniz: 1000 azn qazandiniz`)
// }else if (attemps <= 5){
//     document.write(`${attemps} cehde tapdiniz: 750 azn qazandiniz`)
// }else if (attemps <= 9){
//     document.write(`${attemps} cehde tapdiniz: 500 azn qazandiniz`)
// }else if (attemps > 10){
//     document.write(`${attemps} cehde tapdiniz: bize 250m vermelisiniz`)
// }



// let endIndex = prompt(''msg);

// for(let i = 10; i >= 0; i--){
//     for(let j = 0; j < i; j++){
//         document.write("*")
//     }
//     document.write("* <br />")
// }

// let word = 'hello world!'; //iterable
// document.write(word[0])
// document.write(word[word.length - 1])

// let text = prompt('message');
// document.write(text + "<br />");

// for (let i = text.length - 1; i >= 0;i--) {
//     document.write(text[i])
// }


//functions
// function gundelikIslerim(gun){
//     document.write(`
//         day: ${gun} <br />
//             1. seher oyan <br />
//             2. ise ged <br />
//             3. dersi kec <br />
//             4. eve qayit <br />
//             <hr />
//     `)
// }
// gundelikIslerim('bazar ertesi');
// gundelikIslerim('cersenbe axsami');
// gundelikIslerim('cersenbe');
// gundelikIslerim('cume axsami');
// gundelikIslerim('cume');
// gundelikIslerim('senbe');
// gundelikIslerim('bazar');


//global scope




// let kime = 'oguz eline'
// function salamla(){
//     //local scope
//     document.write(`salam olsun ${kime} <br />`)
// }

// console.log(kime);


// salamla();




// if (1) {
//     let ad = 'admin'
//     console.log(ad)     ;    
// }
// console.log(ad)     ;    

//iki ededin cemini tapan proqram yazin ve 3 defe ferqli reqemlerle cagirin
// function cem(reqem1,reqem2){
//     document.write(`${reqem1} + ${reqem2} = ${reqem1 + reqem2} <br />`)
// }
// cem(3,5)
// cem(7,6)
// cem(1,0)


/*
    reqem1
    reqem2
    operator
*/
// function calculator(x, y, o) {
//     let result = ''
//     switch (o) {
//         case '+':
//             result = `${n1} + ${n2} = ${n1 + n2}`
//             break;
//         case '-':
//             result = `${n1} - ${n2} = ${n1 - n2}`
//             break;
//         case '*':
//             result = `${n1} * ${n2} = ${n1 * n2}`
//             break;
//         case '/':
//             result = `${n1} / ${n2} = ${n1 / n2}`
//             break;
//             default: result = 'bele operator yoxdur'
//     }
//     document.write(result)
// }

// let n1 = +prompt('number 1');
// let operator = prompt('operator');
// let n2 = +prompt('number 2');
// calculator(n1, n2, operator)



//default parameters
let defaultUser = 'yaxsi oglan'
function salamla(user = defaultUser){
    // if (user === undefined) {
    //     user = 'admin'
    // }
    document.write(`salam ${user}`)
}

salamla()