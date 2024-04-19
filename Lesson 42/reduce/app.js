let arr = [5,4,3,2,1];
// let sum = 5;
// arr.forEach((number) => {
//     sum += number
// })

// acc = 1 + 2 + 3
// const sum = arr.reduce((acc, current) => {
//   return (acc += current);
// },"salam");
// console.log(sum);


// let users = ['Kamran','Raminnnnnnnn','Ayxan','Firuddin','Elsever','Ali']
// let enUzunAd = users[0];
// users.forEach((name) => {
//     if (name.length > enUzunAd.length) {
//         enUzunAd = name
//     }
// })
// console.log(enUzunAd);

// const longName = users.reduce((enUzunAd,indikiAd) => {
//     return enUzunAd.length > indikiAd.length ? enUzunAd : indikiAd
// })
// console.log(longName);


let users = ['Kamran','Raminnnnnnnn','Ayxan','Firuddin','Elsever','Ali','Kamran','Kamran','Ayxan']

const adlar = users.reduce((butunAdlar,indikiAd) => {
    if (indikiAd in butunAdlar) {
        butunAdlar[indikiAd]++
    }else {
        butunAdlar[indikiAd] = 1
    }
    return butunAdlar
},{})
console.log(adlar);
