// const birinciReqemInp = document.getElementById('birinciReqem')
// const ikinciReqemInp = document.getElementById('ikinciReqem')
// const operatorInp = document.getElementById('operator')
// const hesablaBtn = document.getElementById('hesablaBtn')
// const total = document.getElementById('total')

// hesablaBtn.onclick = () => {
//     let result = 0
//     const x = +birinciReqemInp.value
//     const y = +ikinciReqemInp.value;

//     switch (operatorInp.value) {
//         case '+':
//             result = x + y;
//             break;
//         case '*':
//             result = x * y;
//             break;
//         case '-':
//             result = x - y;
//             break;
//         case '/':
//             result = x / y;
//             break;
//         default: result = 'error'
//     }
//     birinciReqemInp.value = ''
//     ikinciReqemInp.value = ''
//     operatorInp.value = ''
//     total.innerText = 'total: ' + result
// }

// const boxes = document.querySelectorAll(".box");
// const colorBox = document.querySelector('.color')
// boxes.forEach(item => {
//     const color = item.className.split(" ")[1]
//     item.onclick = () => {
//         colorBox.innerText = 'color is: ' + color
//     }
// })



// const boxes = document.querySelectorAll(".box");
// const colorInput = document.getElementById('colorInput')
// boxes.forEach(b => b.onclick = () => b.style.background = colorInput.value)

/////////////////////////////////////////////////////////////////////////



/*
    hasAttribute
    getAttribute
    setAttribute
    removeAttribute

    addClass
    removeClass
    toggle
*/
// const box = document.querySelector(".box")
// box.onclick = () => {
//     // console.log(box.hasAttribute('class'));
//     // console.log(box.getAttribute('class'));
//     // box.setAttribute('title','i am div')
//     // box.setAttribute('id','true')
//     // box.removeAttribute("id")
//     console.log(box.dataset.color);
// }


// const arr  = ['Adil','Adil','Adil','Adil','Adil','Adil']

// const showHideBtn = document.getElementById('showHideBtn')
// const box = document.querySelector('.box')

// showHideBtn.onclick = () => {
//     // const buttonStyles = getComputedStyle(showHideBtn)
//     console.log(buttonStyles.margin);
//     // box.classList.add('test')
//     // box.classList.remove('test4')
//     box.classList.toggle('hidden')
//     console.log(box.classList);
// }


// container.appendChild(h1)
// container.insertBefore(h1,div)
// container.replaceChild(h1,div)

// const forDiv = document.getElementById('forDiv')
// const forP = document.getElementById('forP')
// const container = document.querySelector(".container")
// const div = document.getElementById("div")

// forDiv.onclick = () => {
//     const div = document.createElement('div')
//     div.innerText = 'I am Div Tag'
//     container.prepend(div)
// }

// forP.onclick = () => {
//     const pTag = document.createElement('p')
//     div.remove()
//     pTag.innerText = 'I am P Tag';
//     // pTag.setAttribute('class','text')
//     pTag.classList.add('text')
//     container.append(pTag)
// }

const newTodoInput = document.getElementById('newTodoInput')
const addTodoBtn = document.getElementById('addTodoBtn')
const tableBody = document.getElementById("tableBody")
let uniqueId = 0;

addTodoBtn.onclick = () => {
    const newTodo = newTodoInput.value;

    const tr = document.createElement('tr');
    const tdId = document.createElement('td');
    const tdTodo = document.createElement('td');
    const tdActions = document.createElement('td');
    const isDoneButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    if (newTodo !== '') {
        tr.classList.add('undone')
        tdTodo.innerText = newTodo;
        tdId.innerText = ++uniqueId;
        deleteButton.innerText = '🗑️'
        deleteButton.dataset.id = tdId.innerText;
        isDoneButton.innerText = '✅'
        isDoneButton.dataset.done = false

        tdActions.append(deleteButton, isDoneButton)
        tr.append(tdId, tdTodo, tdActions)
        tableBody.append(tr)
    }else {
        alert('Error')
    }
    newTodoInput.value = '';


    deleteButton.onclick = () => {
        deleteButton.parentNode.parentNode.remove();
    }

    isDoneButton.onclick = () => {
        if (isDoneButton.dataset.done === 'false') {
            isDoneButton.dataset.done === 'true'
            isDoneButton.parentNode.parentNode.classList.add('done')
            isDoneButton.remove();
        }
    }
    //deleteTodo

}




{/* <tr class="undone">
<td>1</td>
<td>Ev tapsiriqlarini isle</td>
<td>False</td>
<td>
    <button>🗑️</button>
    <input type="checkbox">
</td>
</tr> */}