const url = "http://localhost:3000/users";
const usersContainer = document.querySelector(".users");

const writeData = (data) => {
    data.forEach(({name,surname,image,description}) => {
        usersContainer.innerHTML += `<div class="user border rounded-5 p-3 ">
            <img src="${image}" alt="">
            <h2>${name} ${surname}</h2>
            <p>${description}</p>
            <button class="btn btn-danger">delete user</button>
        </div>`;
      });
}


const getDataWithAxios = async () => {
    try {
        const { data } = await axios(url);
        writeData(data)
    }catch {
        console.log('salam olsun sehv kod yazan developerlere');
    }
};

const getDataWithFetch = () => {
    fetch(url).then((response) => {
        return response.json()
    }).then((data) => {
        writeData(data)
    }).catch((err) => {
        console.log('salam olsun sehv kod yazan developerlere');
    })
}






// getDataWithAxios();  
getDataWithFetch();
