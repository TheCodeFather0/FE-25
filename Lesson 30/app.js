// console.log(document);
// // document.write(document.URL)
// console.log(document.html);

// document.body.style.backgroundColor = "red"
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// document.body.childNodes.forEach(item => console.log(item))


/*
    1. TagName
    2. ID
    3. class

    getElementById
    getElementsByClassName
    getElementsByTagName
    getElementsByName
    querySelector
    querySelectorAll
*/

// const title = document.getElementById('title')
// title.style.color = 'lime'
// title.style.backgroundColor = 'black'

// const title = document.getElementsByClassName("title");
// const title = document.getElementsByTagName("h1");
// console.log(title);
// for (let i = 0; i < title.length; i++) {
//     title[i].style.color = 'red'
// }

// const title = document.querySelector('.title')
// title.style.color = 'red'
// const title = document.querySelectorAll('.title')
// title.forEach(t => t.style.color = 'red')


// const li_elements = document.getElementsByClassName('item');
// const li_elements = document.querySelectorAll('#list > li');
// li_elements.forEach(li => li.style.color = 'red')
// li_elements.style.color = 'red'

// const titles = document.querySelectorAll('.title');
// titles[0].style.color = 'lime'
// titles[0].style.background = 'black'
// titles[0].style.padding = '10px'
// titles[0].style.fontSize = "10px"
// console.log(titles[0].id);
// titles[0].style.borderRadius = "10px"
// // titles[0].innerText = "<h1>salam fe-25!</h1>"
// titles[0].innerHTML = "<h1>salam fe-25!</h1>"



// const button = document.getElementById('btn')
// const colorInput = document.getElementById('colorInput')

// button.onclick = () => {
//     document.body.style.backgroundColor = colorInput.value;
//     colorInput.value = ''
//     colorInput.focus()
// }


// const buttons = document.querySelectorAll(".circle")

// buttons.forEach(button => {
//     button.onclick = () => {
//         document.body.style.background = button.id
//     }
// })

const modeBtn = document.getElementById('modeBtn')
modeBtn.onclick = () => {
    if (document.body.className === 'light') {
        document.body.className = 'dark'
        modeBtn.innerText  = 'light mode 🌞'
    }else{
        document.body.className = 'light'
        modeBtn.innerText  = 'dark mode 🌙'
    }
}   

total.innerText += 5