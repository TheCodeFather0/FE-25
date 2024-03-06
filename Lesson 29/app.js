// const sayHello = (name, gender) => {
//     let message = ""
//     // switch (gender) {
//     //     case 'Q':
//     //     case 'q':
//     //         message = `salam xanim ${name}`;
//     //         break;
//     //     case 'K':
//     //     case 'k':
//     //         message = `salam cenab ${name}`
//     //         break;
//     //     default: message = 'error'
//     // }

//     gender = gender.toUpperCase()
//     if (gender === 'K') {
//         message = `salam cenab ${name}`;
//     } else if (gender === 'Q') {
//         message = `salam xanim ${name}`;
//     } else {
//         message = 'error'
//     }
//     return message
// }

// console.log(sayHello("Ruslan", "K"));


// const sum = () => {
//     let n1 = +prompt('reqemi daxil edin');
//     let n2 = +prompt('reqemi daxil edin');
//     let cem = 0;

//     let kicik = Math.min(n1, n2)
//     let boyuk = Math.max(n1, n2)

//     for (let i = kicik; i <= boyuk; i++) {
//         if (i %2 === 0) {
//             cem += i
//         }
//     }
//     return cem
// }

// function User(ad,soyad){
//     this.name = ad
//     this.surname = soyad
// }
// let ramin = new User("ramin","mammadzada")
// console.log(ramin);



// const test = () => {
//     let arr = [];
//     let cem = 0;
//     for (let i = 1; i <= 100; i++) {
//         arr.push(i)
//     }
//     let newArr = arr.filter(num => String(num).includes(1))
//     newArr.forEach(num => cem += num);
//     return cem;
// }
// console.log(test());


// const users = [
//     {name:'Ramin',surname:'Mammadzada'}
// ]

// const newUser = (name,surname) => users.push({name,surname})

// newUser('adil','quliyev')
// console.log(users);


// const createNumber = (...numbers) => numbers.sort((a,b) => b - a);

// console.log(createNumber(1,2,3,4,5,332323,2,32,32,43,5,435,4,343,3423));