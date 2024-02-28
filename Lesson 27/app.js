//array -> massiv
let students = ['Afiq', 'Elçin', 'Oruc', 'Yusif', 'Tural', 'Murtuz', 'Ayxan', 'Mahir', 'Nihad', 'Ruslan'] //massiv

// let i = 0
// while(i <= students.length - 1) {
//     document.write(`${i + 1}. ${students[i]} <br />`)
//     i++;
// }


// for (let i = 0; i < students.length;i++) {
//     document.write(`${i + 1}. ${students[i]} <br />`)
// }

// for (let student of students) {
//     document.write(student + "<br />")
// }


// FIFO -> First in First Out
// LIFO -> Last in First Out

/*
   Methods
   
   unshift
   shift
   push
   pop
   flat
   indexOf.lastİndexOf
   includes
   split
   join
   slice
   splice
   concat
   reverse
   flat
*/

// unshift,shift -> 3
// push,pop      -> 7

// students.shift();
// students.shift();
// students.unshift('Nurana')
// students.unshift('Ilaha')

// students.pop()
// students.pop()
// students.push('Nurana')
// students.push('Ilaha')

// students.unshift('Nurana')
// students.shift()
// students.shift()
// students.push('Nurana')


// console.time()
// students.shift()
// console.timeEnd()

// console.time()
// for (let i = 0; i < students.length; i++) {
//     document.write(`${i + 1}. ${students[i]} <br />`)
// }
// console.timeEnd()




// console.warn('men warningem')
// console.error('men errroram')



let arr = [
    [0,1,2],
    [3,4,5],
    [6,7,8,9]
];
// document.write(arr[arr.length - 1].length)

// let numbers = arr.flat()

// console.log(arr)
// console.log(numbers)

// const students2 = [...students]
// students.pop()
// console.log(students);
// console.log(students2);
// console.log([...students]);


// let numbers = [0,1]
// numbers[99] = 2
// console.log(numbers);
// console.log(numbers.length);

// let n1 = [0,1]
// let n2 = [2,3]
// let c = n1.concat(n2,[456],[2,5])
// console.log(c);
// document.write(students.indexOf('Afiq'))
// document.write(students.includes('Mahir'))
// document.write(students.reverse())


// let str = 'admin@gmail.com';
// console.log(str.split("@"));

// const verifyEmail = (email) => {
//     let splittedEmail = email.split("@")
//     console.log(splittedEmail);
//     if (splittedEmail[0].length > 5 && splittedEmail[1].includes('.')) {
//         console.log('duzgun emaildi');
//     }else {
//         console.log('duzgun deyil');
//     }
// }   
// verifyEmail('admin12gmail.com')



// const reverseText = (str) => str.split(" ").reverse().join("-") + "<br />"
// const reverseWord = (str) => {
//     let firstLetter = str.split("").reverse().join("")[0].toUpperCase()
//     let others = str.split("").reverse().join("").slice(1).toLowerCase()
//     return firstLetter + others
// }
// document.write(reverseText('hello world'))
// document.write(reverseWord('Kələm'))

// students.splice(0,5)
// const silinenTelebeler = students.splice(students.length,0,"Nurana","Ilahe")
// console.log("silinenTelebeler: ",silinenTelebeler);
// console.log(students);


// const necenciniSilsin = +prompt('necencini silsin?');
// let silinenler = students.splice(necenciniSilsin,1)
// console.log(silinenler);
// console.log(students);


//massiv qur,masinlar haqqinda olacaq,her masinin markasi,modeli,motoru qeyd oluncaq
// const cars = [
//     {marka:"mercedess",model:"e220",engine:2200},
//     {marka:"VAZ",model:"2107",engine:1600},
//     {marka:"VAZ",model:"2106",engine:1600},
// ]

// for (let car of cars) {
//     console.log(car.marka + '-' + car.model);
// }

const telebeler =  [
    {name:'Adil',surname:'Mammadov',point:550,description:'JS is Legend'},
    {name:'Vaqif',surname:'Cavadov',point:450,description:'Yegane oyuncuyamki Noyere kuncden qol vurmusam'},
    {name:'Neriman',surname:'Axundzade',point:701,description:'Men efsanevi oyuncuyam,vurmadim yaxsi eledim.'},
    {name:'Kamran',surname:'Ağayev',point:700,description:'Kubok geldi Lenkerana'},
    {name:'QURBAN',surname:'QURBANOV',point:Infinity,description:'Futbolcularim yaxsi oynadilar'}
]

const enYaxsiTelebe = (arr) => {
    let baliEnyuksek = arr[0]
    for (let telebe of telebeler) {
        if (telebe.point > baliEnyuksek.point) {
            baliEnyuksek = telebe
        }
    }
    let message = `Tebrikler en yuksek balin sahibi: ${baliEnyuksek.name} ${baliEnyuksek.surname}.Sizin bu barede fikirlerinizi esidmek isteyerdik: <br />${baliEnyuksek.description}`

    return message
}

document.write(enYaxsiTelebe(telebeler))

// console.log(Math.max.apply(null,[1,2,3]));
// console.log(Math.max(...numbers));
// const numbers = [1,2,3]