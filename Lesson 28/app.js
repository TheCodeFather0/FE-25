// . Massiv verilib. "Episode 4: New Hope" kimi mesajları ardıcıl olaraq konsola çıxarın. Massiv elementlərin düzün.


let arr = ['New Hope', 'The Empire Strikes Back', 'Return of the Jedi'];

// for(let i = 0; i < arr.length; i++) {
//     document.write(`episode ${i + 4} ${arr[i]} <br />`)
// }

// for(let i in arr) {
//     document.write(`episode ${+i + 4}: ${arr[i]} <br/>`)
// }


// for (let i of arr) {
//     document.write(`episode ${arr.indexOf(i) + 4}: ${i} <br />`)
// }



// .İstifadəçidən vergüllə ayrılmış beş ədədi daxil etməyi xahiş edin və onları massivdə saxlayın. İstifadəçidən beş ədəd elementi daxil etməyi tələb edən, onları massivə yazan və ən kiçik ədədi konsola çıxaran proqram yazın.


// let numbers = prompt('reqemleri vergul ile daxil edin');

// const min = () => {
//     const arr = numbers.split(",");
//     const min = Math.min(...arr)
//     console.log(min);
// }
// min()


//ESX functions
//High Order Function - HOF

/*
    1. foreach -> geriye array qaytarmir ve sadece massiv icerisinde dovr etmek ucundur
    2. map -> geriye array qaytarir,orjinali deyismir,elementleri deyismek ucun istifade edilir
    3. filter -> geriye array qaytarsin,orjinali deyismesin
    4. find -> geriye bir element qaytarir,orjinali deyismir
    5. every -> elementlerin herbiri serti odeyirse true yoxsa false
    6. some -> elementlerden her hansisa biri serti odeyirse true yoxsa false
    7. sort -> elementleri siralamaq ucundur

    Array.from
*/

let students = ['Afiq', 'Elçin', 'Oruc', 'Yusif', 'Tural', 'Murtuz', 'Ayxan', 'Mahir', 'Nihad', 'Iltifat', 'Ruslan'] //massiv

// let numbers = [1,2,3,4,5,15,6,7,8,9,10,11,12,22,33,44]

// students.forEach((elem,index,arr) => {
//     document.write(`${index}. ${elem} <br />`)
//     console.log(arr);
// })

// let newArr = numbers.map((number) =>  number * 2)

// numbers.forEach((number) => {
//     if (number > 10) {
//         newArr.push(number);
//     }
// })


// let newArr = numbers.filter((n) =>  n > 10)
// let newArr = students.filter(s => s.length > 5)
// let newArr = numbers.find(n => n > 5)

// let isOK = students.every(s => s.length > 3)
// let isOK = students.some(s => s.length > 5)
// console.log("newArr: ",newArr);
// console.log("isOK: ",isOK);
// console.log("numbers: ",numbers);

let employees = [
    ["Jaylee Macy", "marketing"],
    ["John Smith", "management"],
    ["Blossom Hartley", "design"],
    ["Austin Carpenter", "marketing"],
    ["Joan Knowles", "development"],
    ["Sally Nunez", "management"],
    ["Laurel Ward", "development"],
    ["Lark Simon", "marketing"],
    ["Jane Stone", "management"],
    ["Courtney Olson", "development"],
]

// let developers = []
// employees.forEach(employe => {
//     if (employe[1] === 'development') {
//         developers.push(employe)
//     }
// })
// let developers = employees.filter(employe => {
//     if (employe[1] === 'development') {
//         return employe
//     }
// })

// console.log(developers);



// const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];

// const printWithDashes = (arr) => {
//     arr.forEach(elem => {
//         document.write(`------------- <br /> ${elem} <br /> ------------- <br />`)
//     })
// }

// printWithDashes(names)



// let guests = [
//     {name:'Nurana',gender:'Q'},
//     {name:'Murtuz',gender:'K'}
// ]


// let newArr = guests.map(user => {
//     if (user.gender.toUpperCase() === 'Q') {
//         user.name += ' xanim'
//     }else if (user.gender.toUpperCase() === 'K'){ 
//         user.name += ' bey'
//     }
//     return user
// })

// console.log(newArr);
// console.log(guests);



// const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];
// let newArr = names.map(user => '**' + user + '**')

// console.log(newArr);
// console.log(names);


// students.sort()
// console.log(students);
// numbers.sort((a,b) => a - b)
// console.log(numbers);

// let users = Array.from("Arif,Vaqif")
// let keys = numbers.keys()

// for (let x of numbers){
//     console.log(numbers.indexOf(x));
// }

// const f = students.entries();
// for (let x of f) {
//    console.log(x);
//   }


// let a = students.with(0,'AFIQ')
// console.log(students);
// console.log(a);

// let obj = {
//     username:'Admin',
//     pass:'pas123'
// }

// const keys = Object.entries(obj)
// console.log(keys);

// document.write(``);


// numbers.sort((a, b) => a - b);
// document.write(`en kicik: ${numbers[0]}`);
// document.write(`en boyuk: ${numbers[numbers.length - 1]}`);





// let cutlerinSayi = 0;
// arr1.forEach(n => n % 2 === 0 && cutlerinSayi++)
// document.write(cutlerinSayi);


// let newArr = [];
// arr1.forEach(elem => {
//    if (arr1.indexOf(elem) !== arr1.lastIndexOf(elem)) {
//     newArr.push(elem)   
//    }
// })
// newArr.splice(newArr.length / 2)
// console.log(newArr);


// const repeatedElements = [];
// const uniqueElements = [];

// arr1.forEach(item => {
//     if (!uniqueElements.includes(item)) {
//         uniqueElements.push(item);
//     } else if (!repeatedElements.includes(item)) {
//         repeatedElements.push(item);
//     }
// });

// console.log(repeatedElements);


// let arr = [1,2,3,4,6,7,1,2,3,4,5,7]

// let numbers = [1, 454, 2, 23, 343, 4432, 51, 15, 6, 7, 8, 9, 10, 11, 12, 22, 33, 44]
// let cem = 0;
// numbers.forEach(n => cem += n)
// let edediOrta = cem / numbers.length;
// let x = numbers.map(n => n = edediOrta)
// console.log(x);
// numbers.sort((a,b) => b -a);
// let newArr = numbers.slice(0,3)
// newArr.forEach(element => document.write(`${element} <br />`))
    
