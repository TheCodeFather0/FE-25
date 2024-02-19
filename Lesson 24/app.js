/*
    1.polindrom
    2.mukemmel eded
    3.armstrong eded
    6,8,13
*/

// ey Babək Kəbab Ye



// const isPalindrom = (text) => {
//     let reversedText = '';
//     for (let i = text.length - 1; i >=0; i--) {
//         reversedText += text[i]
//     }
//     return reversedText === text;
// }

// document.write(isPalindrom("ey babək kəbab ye"))




// const isPerfectNumber = (num) => {
//     let i = 1;
//     let bolenlerinCemi = 0;
//     while(i < num) {
//         num % i === 0 ? bolenlerinCemi += i : null
//         i++
//     }

//     return bolenlerinCemi === num
// }
// document.write(isPerfectNumber(10))



//armstrong 123 -> 1+2+3

// const isArmStrongNumber = (num) => {
//     let number = String(num)
//     let pow = number.length;
//     let cem = 0;

//     for (let i = 0; i < pow; i++) {
//         cem += number[i] ** pow
//     }
//     return cem === num
// }

// document.write(isArmStrongNumber(371))



// const isLucky = (ticket) => {
//     ticket = String(ticket)
//     return ticket[0] + ticket[1] + ticket[2] === ticket[3] + ticket[4] + ticket[5]
// }



// let number1 = +prompt('birinci reqemi daxil edin')
// let number2 = +prompt('ikinci reqemi daxil edin')

// const EBOB  = (n1,n2) => {
//     let kicikEded = Math.min(n1,n2)
//     for (let i = kicikEded; i > 0; i--) {
//         if (n1 % i === 0 && n2 % i === 0) {
//             return i
//         }
//     }
// }
// document.write(EBOB(number1,number2))


// const numCounter = str => str.length;
// document.write(numCounter("salam"))




//OBJECTS_----------------------------

// let ramininAdi = 'Ramin';
// let ramininSoyadi = 'Mammadzada';
// let ramininMasini = 'Ferrari';
// let raminKOmputeri = "apple macBook ultra san andreas";

// let raminin = {
//     adi:'Ramin',
//     soyadi:'Mammadzada',
//     masini:'ferrari',
//     komputeri:'apple macBook ultra san andreas'
// }
// let a = 'masini'
// console.log(raminin[a]);


// let marka = 'mercedess';
// let model = 'w-124';
// const car = {
//     marka,
//     model,
//     engine:2200,
//     year:2002,
//     abs:true,
//     image:'https://classicsworld.co.uk/wp-content/uploads/sites/6/2023/11/FB-template-Nov-23_1.jpg',
//     speed:0,
//     gazver:function() {
//         this.speed += 10
//         return this.speed
//     },
//     dayan:() => {
//         if (car.speed === 0) {
//             return 'masin dayandi'
//         }else {
//             car.speed -= 10;
//             return car.speed
//         }
//     }
// }
// car.marka = 'vaz-2107'
// car.turbo = true

// console.log(car);  

// delete car.year

// console.log(car);  

// document.write(`<h1>${car.marka} - ${car.model}</h1>`)
// document.write(`<img src=${car.image} width="600"/>`)



// console.log(car.gazver());
// console.log(car.gazver());
// console.log(car.gazver());

// console.log(car.dayan());
// console.log(car.dayan());
// console.log(car.dayan());
// console.log(car.dayan());
// console.log(car.dayan());

// console.log();
// car.dayan()

// method





const myComputer = {
    marka: 'hp',
    model: 'ab-123',
    hdd: 500,
    // test:this
    // getFullName: function() {
    //     document.write(`${this.marka} - ${this.model}`)
    // }
}


// myComputer.getFullName();
// console.log(myComputer.test);



// let ramin = {
//     id:0,
//     username:'admin',
//     password:'admin123',
//     nickname:'TheCodeFather'
// }

// let kamran = {
//     id:1,
//     username:'KamranWolf',
//     password:'kamran123',
//     nickname:'drakon2003'
// }


// newUSer('KamranWolf','kamran123','drakon2003')

//constructor functions
function User(username, password, nickname) {
    this.istifadeciAdi = username;
    this.sifre = password;
    this.leqeb = nickname;
}

// let ramin = new User('admin','admin123','TheCodeFather')
// let kamran = new User('KamranWolf','kamran123','drakon2003')

// console.log(ramin);
// console.log(kamran);



const bankHesabi = {
    pul: 2500,
    valyuta: 'USD',
    card: '41697388',
    pin: '1234',
    cehdler: 3,
    pulcek: function () {
       if (this.cehdler > 0) {
        alert("kartinizi daxil edin💳");
        let _card = prompt('kartin nomresi?💳');
        let _pin = prompt('kartin sifresi?');

        if (_card === this.card && _pin === this.pin) {
            let money = prompt('neqeder isdiyirsen?');
            if (money > this.pul) {
                alert('kasiblamisan ay yetim🚬')
                alert('karti goturun...')
            } else {
                alert('trrrrrrrrrrrrrrrrrrrrrrrrr🤑💸')
                this.pul -= money;
                this.cehdler
                alert(`sizin balansiniz ${this.pul} ${this.valyuta} -dir`)
                alert('karti goturun...')
            }
        } else {
            alert("sifre ve ya pin kod yalnisdir❌")
            this.cehdler--;
            if (this.cehdler > 0) {
                alert(`sizin ${this.cehdler} cehdiniz qaldi`)
            }else{ 
                alert('kartiniz bloklandi❌')
            }
        }
       }else {
        alert('kartiniz bloklanib.Karti blokdan azad etmek ucun sehifeni refresh edin✅')
       }
    }
}



document.getElementById("button").addEventListener("click", () => {
    bankHesabi.pulcek();
})