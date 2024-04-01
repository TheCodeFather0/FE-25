const url = "http://localhost:3000/users/";
//add user
const addUserForm = document.getElementById("addUserForm");
const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const imageInput = document.getElementById("image");
const descriptionInput = document.getElementById("description");

addUserForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nameInput.value;
  const surname = surnameInput.value;
  const image = imageInput.value;
  const description = descriptionInput.value;
  const newUser = {
    name,
    surname,
    description,
    image,
  };

  if (name && surname && image && description) {
    axios.post(url, newUser).then((res) => {
      if (res.statusText === "Created") {
        alert('istifadeci elave edildi')
        location.reload();
      }
    })
  } else {
    alert("xanalari bos buraxmaq olmaz");
  }
});
