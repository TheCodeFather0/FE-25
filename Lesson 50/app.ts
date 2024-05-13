/*
    implicit
    explicit
*/

import { IData, IObj, IUsers } from "./types/objects";

// let age = 15; //implicit
// let age2:string = 15; //implicit
// let isDeveloper:boolean = false

/*
    || -> or
    | -> union oper

*/
// let id:number | string = '5'
// id = true

// let username: "frontend" | "backend" = "frontend";
// let test: boolean | string | number | object = true;
// test = "salam";
// test = [];

// let users: string[] = ["Kamran", "Ejdaha", "Developerdir"];

// fetch('http://localhost:3000/users').then((res) => {
//     return res.json()
// }).then((data:string[] | number[]) => {
//     console.log(data);
// })
// let users:string[] | number[] = ["salam", "olsun",12]; //error
// let data:(string | number | boolean)[] = ["salam", "olsun",12,true]

// const data:("kamran" | "drakon")[] = ['kamran','kamran','kamran',"drakon"]
// ("react" | "next")ts

// const a = <T>(b:string):string => {
//     return b
// }
// a("salam")

// type TData = string
// let data:TData = "salam"

// type drakon = "kamran"
// let user:"kamran" = 'kamran' === let user2:drakon = 'kamran' //true

// const obj: IObj = {
//   age: 15,
//   name: "Kamran",
//   klicka: "Drakon",
//   isDeveloper: false,
//   elArasindaKlicka: "Coder",
// };

// const data:IData = {
//     id:5,
//     name:'admin',
//     username:'salam',
//     users: ['salam','salam','salam']
// }

// const data2:IData = {
//     name:'admin',
//     username:'salam',
//     users: ['salam','salam','salam']
// }

// enum

// let users:IUsers = [
//     {id:0,name:'kamran'},
//     {id:2,name:'kamran'},
//     {id:2,name:'kamran'}
// ]

// generic

// const test = <S>(arg:S):S => {
//     return arg
// }

// console.log(test<string>("sagol"));
// console.log(test<number>(5));

// enum student {
//   bad,
//   good,
//   excellent,
// }

// const point:number = student.bad;

// switch (point) {
//   case 0:
//     console.log("ayib olsun");
//     break;
//   case 1:
//     console.log("halal olsun");
//     break;
//   case 2:
//     console.log("ogul!");
//     break;
// }

// if (user.isOnline) {
//     console.log("user now online");
// }else {
//     console.log("user now offline");
// }


// interface IOBJ {
//     id?:number,
//     firstname:string
//     lastname:string
// }

// const obj:Omit<IOBJ,"id"> = {
//     firstname: "Ramin",
//     lastname: "Mammadzada"
// }

