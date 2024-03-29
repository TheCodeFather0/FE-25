const url = "https://dummyjson.com/products"; //endpoint
const cardsContainer = document.querySelector(".cards");

// const WriteData = () => {
//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then(({ products }) => {
//       products.forEach((product) => {
//         cardsContainer.innerHTML += `<div class="card">
//         <h3>${product.brand} ${product.title}</h3>
//         <img src="${product.thumbnail}" alt="">
//     </div>`;
//       });
//     }).catch(() => {
//         console.log('nese error var');
//     })
// };
// WriteData();

// const response = axios(url)
// response.then(({data:{products}}) => {
//     console.log(products);
// })


// const writeData = async () => {
//   try {
//     const { data } = await axios(url);
//     data.products.forEach((product) => {
//       cardsContainer.innerHTML += `<div class="card">
//                 <h3>${product.brand} ${product.title}</h3>
//                 <img src="${product.thumbnail}" alt="">
//             </div>`;
//     });
//   } catch {
//     console.log("error var nese");
//   }
// };
// writeData();
