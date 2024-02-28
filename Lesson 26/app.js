
// const user = {
//     name:'Adrian'
// }

// const user2 = Object.assign({name:'Ramin'},user)



// const propertyTaker = (obj,str) => obj[str];

// const user = {
//     continent: 'Asia', 
//     country: 'Japan'
// }

// console.log(propertyTaker(user,'admin'));


// const existsAndTruthy = (obj,str) => Boolean(obj[str]);

// let obyekt = {
//     ad:'Ramin',
//     age:0,
//     car:null,
//     comp:undefined
// }
// console.log(existsAndTruthy(obyekt,'age'));
/******************************************************************/


console.log('%cEy Junior Kodu Düzgün yaz!', 'color:red;text-transform:uppercase;font-size:32px;font-family:arial;font-weight:bold');


// console.log(`%cThis is a browser feature intended for developers. If someone told you to copy-paste something here to enable a Facebook feature or "hack" someone's account, it is a scam and will give them access to your Facebook account.`,"font-size:25px");

// console.log('%c','<hr />')




// const user = {
//     name:'Ramin',
//     5:5
// }

// const ad = 5
// console.log(user[ad]);
// console.log(user.name);


/*--------------------------------------string--------------------------------------*/

/*
    methods

    length
    charAt()
    toUpperCase()
    toLowerCase()
    toLocaleUpperCase()
    toLocaleLowerCase()
    indexOf()
    lastIndexOf()
    includes();
    slice()
    substring()
    substr()
    trim()
    startsWith()
    endWith()
    replace()
    repeat()
*/

const group = 'FE-25'
let str = `                    -Hi ${group}! \u{1F60D}-                `
//string interpolation

let result = str.charAt(5)
// for (let x of str) {
//     document.write(x + '<br />')
// }

//immutable
// result = str.toUpperCase()
// result = str.toLocaleUpperCase('TR');

result = str
// result = str.indexOf('-')
// result = str.lastIndexOf('h')
//case sensetive
// result = str.includes("i")

// result = str.indexOf('i') >=0

// result = str.includes(group)
// result = str.slice(0,5)
result = str.toLowerCase();
// result = str[0] + str[1].toUpperCase() + str[2].toUpperCase() + str.slice(3).toLowerCase()
// result = str.substring(4,1) // (4,1) = (1,4)
// result = str.substr(4,2)

document.write(str + '<br />')
// document.write(result)


// let soz = 'salam dunya'
// const x = (str) => {
//     // document.write(str.startsWith("z"))
//     // document.write(str.endsWith("ay"))
// }
// x(soz)


// const isUpper = (str) => str === str.toUpperCase()
// const isLower = (str) => str === str.toLowerCase()
// document.write(isUpper("SALAM"))

// const basHerfiBoyut = (str) => str[0].toUpperCase() + str.slice(1)

// document.write('<br />' + basHerfiBoyut("salam"))


// const isHave = (str,chr) => str.includes(chr)
// document.write(isHave("salam dunya","alma"))


// const filter = (str,chr) => str.replace(chr,"")
// document.write(filter('salam dunya','dun'))



// document.write(str.repeat(5))
// document.write(str.replace('Hi','Hello'))


document.write('<hr />')

const date = new Date();
// document.write(date.getFullYear())
// document.write(date.getMonth())
// document.write(date.getHours())
// document.write(date.getMinutes())
// document.write(date.getSeconds())
// document.write(date.getMilliseconds())
// document.write(date.getDay())
// document.write(date.getMilliseconds())




//23-fevral-2024
// let buGun = date.getDate();
// let buAy = date.getMonth();
// let buIl = date.getFullYear()
// let saat = date.getHours()
// let deqiqe = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
// let ay = ''

// switch (buAy) {
//     case 0:
//         ay = 'yanvar';
//         break;
//     case 1:
//         ay = 'fevral';
//         break;
//     default: ay = 'error'
// }

// let indikiTarix = `${buGun}-${ay}-${buIl} / ${saat}:${deqiqe}`
// document.write(indikiTarix)

// console.error('men erroram')
// console.warn('men warningem');


// const spesific = new Date('2000-01-01');
// const now = new Date()

// const ferqleri = now - spesific;
// document.write(ferqleri / 1000)