// const obj = {
//     name:'ramin',
//     surname:'mammadzada',
//     age:34
// }

// const objToJson = JSON.stringify(obj)
// const jsonToObj = JSON.parse(objToJson)

// // console.log("obj: ",obj.name);
// // console.log("newObj: ",newObj.name);
// console.log(objToJson);

// const url = "https://jsonplaceholder.typicode.com/users";
// const container = document.querySelector(".cards");
// const loader = document.querySelector(".loader");
// let contentData = false;

// getDataBtn.addEventListener("click", () => {
//     if (!contentData) {
//       loader.style.display = "block";
//         const sorgu = new XMLHttpRequest();
//         sorgu.open("GET", url);
//         sorgu.onreadystatechange = () => {
//           if (sorgu.readyState == 4) {
//             loader.style.display = "none";
//             const data = JSON.parse(sorgu.response);
//             data.forEach(({ name, username, email, phone }) => {
//               const parentElement = document.createElement("div");
//               parentElement.classList.add("card");
      
//               const h2 = document.createElement("h2");
//               h2.innerText = name;
      
//               const h3 = document.createElement("h3");
//               h3.innerText = username;
      
//               const p1 = document.createElement("p");
//               p1.innerHTML = `<i class="fa-solid fa-envelope"></i> ${email}`;
      
//               const p2 = document.createElement("p");
//               p2.innerHTML = `<i class="fa-solid fa-phone"></i> ${phone}</p>`;
      
//               parentElement.append(h2, h3, p1, p2);
//               container.append(parentElement);
//               contentData = true;
//             });
//           }
//         };
//         sorgu.send();
//     }
// });

// removeData.addEventListener("click", () => {
//   if (contentData) {
//     container.innerHTML = "";
//     contentData = false;
//   } else {
//     alert("qardas data yoxdur.");
//   }
// });




///////////////////////////

const url = 'https://dummyjson.com/products'

const sorgu = new XMLHttpRequest();
sorgu.open("GET", url);
sorgu.onreadystatechange = function(){
    if (sorgu.readyState === 4) {
        const data = JSON.parse(sorgu.response)
        console.log(data.products);
    }
}

sorgu.send()