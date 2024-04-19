import { qrup } from "./data.js";
import chalk from 'chalk';
import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/users'
const arr = ['red','green','blue','magenta','yellow']

axios(url).then(({data}) => {
    data.forEach(({username}) => {
        console.log(chalk[randomColor()](username));
    });
})
const randomColor = () => {
 const randomIndex  = Math.floor(Math.random() * arr.length)
 return "bg" + arr[randomIndex][0].toUpperCase() + arr[randomIndex].slice(1)
}


// import {readFileSync,writeFileSync} from 'fs'

// const yazi = readFileSync('./data.txt')

// writeFileSync('./test.docx',"salam olsun javascriptin ejdahalarina")

// console.log(yazi.toString());



// console.log("salam");