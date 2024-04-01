const url = "http://localhost:3000/users/";
const usersContainer = document.querySelector(".users");

const writeData = (data) => {
  data.forEach(({ id, name, surname, image, description }) => {
    usersContainer.innerHTML += `<div class="user border rounded-5 p-3 ">
            <img src="${image}" alt="">
            <h2>${name} ${surname}</h2>
            <p>${description}</p>
            <button class="btn btn-danger" onclick="deleteUser('${id}')">delete user</button>
        </div>`;
  });
};

//deleteUser
const deleteUser = (id) => {
  Swal.fire({
    title: "Brat ayigsan?",
    text: "artiq donmeyeceyem eger silsen!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "sil getsin",
    cancelButtonText: "igid el saxla",
  }).then((result) => {
    if (result.isConfirmed) {
      axios.delete(url + id).then((res) => {
        if (res.statusText === "OK") {
          location.reload();
        }
      });
    }
  });
};

//getUser
const getDataWithAxios = async () => {
  try {
    const { data } = await axios(url);
    writeData(data);
  } catch {
    console.log("salam olsun sehv kod yazan developerlere");
  }
};
getDataWithAxios();

// (async () => {
//     try {
//         const { data } = await axios(url);
//         writeData(data);
//       } catch {
//         console.log("salam olsun sehv kod yazan developerlere");
//       }
// })()










/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const getDataWithFetch = () => {
//     fetch(url).then((response) => {
//         return response.json()
//     }).then((data) => {
//         writeData(data)
//     }).catch((err) => {
//         console.log('salam olsun sehv kod yazan developerlere');
//     })
// }

// getDataWithAxios();
// getDataWithFetch();
