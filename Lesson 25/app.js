/*
pritimive,value
    string
    number
    boolean
    null
    undefined

nonprimitive,referance
    object (array,object,function)
*/


// const user = {
//     name:'Jhon',
//     surname:'Doe',
//     age:Infinity,
//     adress:{
//         country:'Azerbaijan',
//         city:'Baku',
//         street:'Hansisa bir kuce'
//     },
//     car:{
//         marka:'mercedess',
//         model:'w210'
//     },
//     isMaried:false,
//     getFullName:function(){
//         return this.name + " " + this.surname
//     }
// }

//constructor

// function User(_ad = "Jhon", _soyad = 'Doe', _yas = Infinity) {
//     this.ad = _ad;
//     this.soyad = _soyad;
//     this.yas = _yas;
// }

// const ramin = new User('Ramin', 'Mammadzada');
// console.log(ramin);




// const ad = "ramin"
// const yas = 45;



// const car = {
//     marka:'mercedess',
//     model:'w210'
// }
// const car3 = car;

// car3.model = "w214"     
// car.model = "E220"

// console.log('car :',car);
// console.log('car3 :',car3);




//RAM -> Random Access Memory
/*
    adress -> point



*/






// const human2 = human1;

// human2.yas = 35,

// console.log("human1: ",human1);
// console.log("human2: ",human2);
// console.log(human1 === human2); //true or false

//for,while, do while -> for in


const human1 = {
    ad:'Eldar',
    yas:21,
}
const human2 = Object.assign({addddd:'samir'},human1,{evi:'yoxdur'},{masini:'yoxdur'})
// const human2 = {...human1}

// for (let key in human1) {
//     human2[key] = human1[key]
// }

// console.log({...human1});

console.log(human1 === human2);

// human2.ad = 'Samir'

// console.log("human1: ",human1);
// console.log("human2: ",human2);

/*
    ... -> spread
    ... -> rest (for functions)
*/


//rest
// function sum(a,b,...digerReqemler){
//     console.log(a);
//     console.log(b);
//     console.log(digerReqemler);
// }

// sum(5,7,34,3,34,3232,2,32,32,32,23)



// Task-04
// Kalkulyator obyekti yaradın.
// Əsas riyazi hesablamaları yerinə yetirən və nəticəni yaddaşda saxlaya bilən kalkulyator obyekti yaradın.
//   - Obyekt yaradın və toplama, çıxma, vurma, bölmə üçün metodlar əlavə edin.







// function User (name,surname,birthday,setAge,getYearsBeforeRetirement){
//     this.name = name
//     this.surname = surname
//     this.birthday = birthday
//     this.setAge = setAge
//     this.getYearsBeforeRetirement = getYearsBeforeRetirement
// }



// function setAge(){
//     const newAge = +prompt('yeni yasin?');
//     this.age = newAge
// } //

// function getYearsBeforeRetirement(){
//     const PENSIYA_YASI = 70
//     if(this.age >= 70) {
//         alert('zalim alirsanda...')
//     }else{ 
//         alert(PENSIYA_YASI - this.age + " ilin qalib")
//     }
// }


// const ramin = new User('Ramin','Mammadzada',1896,setAge,getYearsBeforeRetirement)


// ramin.age = 123;
// delete ramin.birthday

// console.log(ramin);
// ramin.setAge();
// ramin.getYearsBeforeRetirement()

// console.log(ramin);



const calculator = {
    n1:+prompt('birinci reqemi daxil edin'),
    n2:+prompt('ikinci reqemi daxil edin'),
    res:0,
    topla:function(){
        this.res = this.n1 + this.n2
        console.log(`${this.n1} + ${this.n2} = ${this.res}`);
    },
    cix:function(){
        this.res = this.n1 - this.n2
        console.log(`${this.n1} - ${this.n2} = ${this.res}`);

    },
    vur:function(){
        this.res = this.n1 * this.n2
        console.log(`${this.n1} * ${this.n2} = ${this.res}`);
    }
}

calculator.vur()
calculator.topla()
calculator.cix()