const btn = document.getElementById("btn");

// btn.oncontextmenu = () => {
//     console.log("OK");
// }

// btn.onmouseover = () => {
//     console.log('Mouse elementin uzerindedir');
//     btn.style.background = 'red'
// }

// btn.onmouseout = () => {
//     console.log('Mouse elementin uzerinde deyil');
//     btn.style.background = 'green'
// }

// btn.onclick = () => console.log('onclick');
// btn.onmousedown = () => {
//     btn.style.background = 'green'
// }
// btn.onmouseup = () => {
//     btn.style.background = 'red'
// }

// btn.onmousemove = () => {
//     console.log('ok');
// }

// let str = '';
// document.body.onkeydown = (e) => str += e.key;
// btn.onclick = () => {
//     console.log(str);
//     str = "";
// }


const blueBox = document.getElementById("blueBox");
const redBox = document.getElementById("redBox");

// blueBox.addEventListener('mouseenter', e => {
//     console.log('mouse mavi qutunun uzerine daxil oldu');
// })

// blueBox.addEventListener('mouseleave', e => {
//     console.log('mouse mavi qutunun uzerinden kenarlasdi');
// })

// redBox.addEventListener('mouseenter', e => {
//     console.log('mouse qirmizi qutunun uzerine daxil oldu');
// })

// redBox.addEventListener('mouseleave', e => {
//     console.log('mouse qirmizi qutunun uzerinden kenarlasdi');
// })

// redBox.addEventListener('click',(e) => {
//     e.stopPropagation();
//     console.log('qirmizi qutuya click edildi');
// })

// blueBox.addEventListener('click',() => {
//     console.log('mavi qutuya click edildi');
// })

// event Bubling



// const form = document.getElementById('form')
// form.addEventListener('submit',(e) => {
//     e.preventDefault();
//     // 1. refresin qarsini alir
//     // 2. enter vuranda form submit olur
//     const username = document.getElementById("username").value
//     const password = document.getElementById("password").value
//     const data = {
//         username,
//         password
//     }
//     console.log(data);
// })



// const inp = document.getElementById("inp")
// const h2 = document.getElementById("h2")

// inp.addEventListener('input',(e) => {
//     h2.innerText = e.target.value
// })

/*
    input
    radiolarda
    checkboxlarda
    slectlerde
*/

// const inp = document.getElementById("inp")
// const todos = document.getElementById("todos")
// const addTodo = document.getElementById("addTodo")

// addTodo.addEventListener("click",() => {
//     const data = `<li class="todo">${inp.value}</li>`
//     todos.innerHTML += data
//     inp.value = ""
//     inp.focus();
// })


const data = [
    {
        title: 'Kiçik Qruplar',
        image: 'https://jed.edu.az/front/img/1..png',
        description: 'Dərslər kiçik qruplarda keçirilir, qrupda 4-7 tələbə olur'
    },
    {
        title: 'Kiçik Qruplar',
        image: 'https://jed.edu.az/front/img/1..png',
        description: 'Dərslər kiçik qruplarda keçirilir, qrupda 4-7 tələbə olur'
    },
    {
        title: 'Kiçik Qruplar',
        image: 'https://jed.edu.az/front/img/1..png',
        description: 'Dərslər kiçik qruplarda keçirilir, qrupda 4-7 tələbə olur'
    },
    {
        title: 'boyuk Qruplar',
        image: 'https://jed.edu.az/front/img/1..png',
        description: 'Dərslər kiçik qruplarda keçirilir, qrupda 4-7 tələbə olur'
    },
    {
        title: 'Kiçik Qruplar',
        image: 'https://jed.edu.az/front/img/1..png',
        description: 'Dərslər kiçik qruplarda keçirilir, qrupda 4-7 tələbə olur'
    },
    {
        title: 'Kiçik Qruplar',
        image: 'https://jed.edu.az/front/img/1..png',
        description: 'Dərslər kiçik qruplarda keçirilir, qrupda 4-7 tələbə olur'
    }
]

const cards = document.getElementById('cards');
data.forEach(obj => {
    const result = `<div class="card">
        <img src="${obj.image}" alt="">
        <h2>${obj.title}</h2>
        <p>${obj.description}</p></div>`
        cards.innerHTML += result
})