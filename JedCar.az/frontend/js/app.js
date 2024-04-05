const url = "http://localhost:3000/allCars/";
const carsContainer = document.getElementById("carsContainer");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");

const getData = async () => {
  const { data } = await axios(url);
  data.forEach(
    ({
      id,
      marka,
      model,
      image,
      price,
      currency,
      year,
      engine,
      mileage,
      date,
    }) => {
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



loginBtn.addEventListener("click", async () => {
  const { value: formValues } = await Swal.fire({
    title: "Daxil ol",
    html: `
          <input id="swal-input1" class="swal2-input">
          <input id="swal-input2" class="swal2-input">
        `,
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById("swal-input1").value,
        document.getElementById("swal-input2").value,
      ];
    },
  });
  if (formValues) {
    Swal.fire(JSON.stringify(formValues));
  }
});
