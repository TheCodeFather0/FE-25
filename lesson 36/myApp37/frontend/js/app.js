const url = "http://localhost:3000/users/";
const usersContainer = document.querySelector(".users");

const writeData = (data) => {
  data.forEach(({ id, name, surname, image, description }) => {
    usersContainer.innerHTML += `<div class="user border rounded-5 p-3 ">
            <img src="${image}" alt="">
            <h2><span onclick="editname('${id}')">${name}</span> <span>${surname}</span></h2>
            <p>${description}</p>
            <button class="btn btn-danger" onclick="deleteUser('${id}')">delete user</button>
            <button class="btn btn-warning" onclick="editUser('${id}')">edit user</button>
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

const editUser = async (id) => {
    const {data:{name,surname,description,image}} = await axios(url + id);
    const _name = prompt('yeni adi daxil edin',name);
    const _surname = prompt('yeni soy adi daxil edin',surname);
    const _description = prompt('yeni aciqlamani daxil edin',description);
    const _image = prompt('yeni sekli daxil edin',image);

    const obj = {
      name:_name,
      surname:_surname,
      description:_description,
      image:_image
    }

    axios.put(url + id,obj).then((res) => {
      if (res.statusText === 'OK') {
        location.reload();
      }
    })
}

const editname  = async(id) => {
  const {data} = await axios(url + id)
  const _name = prompt('yeni adi daxil edin',data.name)

  if (_name) {
    axios.patch(url + id,{name:_name}).then((res) => {
      console.log(res);
    })
  }
}



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
