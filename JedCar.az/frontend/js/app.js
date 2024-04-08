const url = "http://localhost:3000/";
const carsContainer = document.getElementById("carsContainer");
const userBox = document.getElementById("userBox");

/*
  ------------------------------------------------------------------------------------istifadecinin olub ve ya olmadigini yoxlayiriq,varsa cixis et duymesi ve      avtomobil elave et duymesini gosteririk,yoxdursa giris ve qeydiyat duymesini gosteririk 
  ------------------------------------------------------------------------------------
*/
let user = localStorage.getItem("user") || false;
const checkUser = () => {
  if (user) {
    userBox.innerHTML = `
              <a href="./addCar.html" class="btn btn-success btn-lg" id="registerBtn">Avtomobil əlavə et</a>
              <button id="logOutButton" class="btn btn-danger btn-lg ">Çıxış et</button>`;
  } else {
    userBox.innerHTML = `<a href="#" class="btn btn-success btn-lg" id="loginBtn">Giriş</a>
    <a href="./register.html" class="btn btn-success btn-lg" id="registerBtn">Qeydiyyat</a>`;
  }
};
checkUser();

/*
  ------------------------------------------------------------------------------------butun avtomobiller ucun sorgu gonderirik ve onlari ekranda yazdiririq
  ------------------------------------------------------------------------------------
*/
const getData = async () => {
  const { data } = await axios(url + "allCars");
  data.forEach(
    ({ marka, model, image, price, currency, year, engine, mileage, date }) => {
      carsContainer.innerHTML += `<div class="col-3 my-3">
        <div class="border p-0 rounded car_box position-relative">
        <a href="https://google.com" class="car_detail_link"></a>
        <img class="car_image rounded-top" src="${image}">
       
        <div class="p-2">
          <h3 class="price">${price} ${currency}</h3>
          <p class="model">${marka} ${model}</p>
          <p class="info">${year} ${engine} ${mileage}</p>
          <p class="date">${date}</p>
        </div>
        </div>
      </div>`;
    }
  );
};
getData();

/*
  ------------------------------------------------------------------------------------giris funksiyasi yazmisiq,eger istifadecinin qeydiyyati varsa o zaman istifadeci daxil ola bilecek,yox yoxdursa error alacaq
  ------------------------------------------------------------------------------------
*/

if (!user) {
  const loginBtn = document.getElementById("loginBtn");
  loginBtn.addEventListener("click", async () => {
    const { value: formValues } = await Swal.fire({
      title: "Daxil ol",
      html: `
          <input id="username" class="swal2-input" placeholder="username" type="text">
          <input id="password" class="swal2-input" placeholder="password" type="password">
        `,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById("username").value,
          document.getElementById("password").value,
        ];
      },
    });
    if (formValues) {
      const _username = formValues[0];
      const _password = formValues[1];

      const { data } = await axios(url + "users");
      const currentUser = data.find((user) => {
        if (user.username === _username && user.password === _password) {
          return user;
        }
      });
      if (currentUser) {
        Swal.fire("ugurla giris edildi");
        localStorage.setItem("user", true);
        checkUser();
        setTimeout(() => {
          location.reload();
        }, 1500);
      } else {
        Swal.fire("istifadeci adi ve ya sifre yalnisdir");
      }
    }
  });
} else {
  const logOutButton = document.getElementById("logOutButton");
  logOutButton.addEventListener("click", () => {
    localStorage.setItem("user",false)
    localStorage.removeItem('user')
    user = localStorage.getItem("user") || false;
    location.reload();
    checkUser();
  });
}
