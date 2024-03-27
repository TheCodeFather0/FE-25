const button = document.getElementById("btn");
const h1 = document.getElementById("h1");

/*
    setTimeOut
    setInterval
*/

// let count = 0;
// h1.innerText = count;
// const writeText = () => h1.innerText  = 'hello world!'
// setTimeout(writeText,1000)

//   setTimeout(() => {
//     count++;
//     h1.innerText = count;
//   }, 1000);

// 1s = 1000ms

// setInterval(() => {
//     count++;
//     h1.innerText = count;
// }, 1000);

//clear

// let n = 0;
// button.addEventListener("click", () => {
//   n += 1;
//   console.log(n);
// });

// setTimeout(() => {
//   if (n >= 5) {
//     clearTimeout(artiqZaman);
//     console.log('3 saniyeye bitirdiniz');
//   } else {
//     console.log("2 saniyeniz qaldi");
//   }
// }, 3000);

// const artiqZaman = setTimeout(() => {
//   if (n >= 5) {
//     console.log("ehsen n 5den boyuk beraberdir");
//   } else {
//     console.log("n 5den kicikdir");
//   }
// }, 5000);

// const colors = ["red", "green", "blue", "yellow"];
// const buttons = document.querySelectorAll(".btn");
// const bombsound = document.getElementById("bombsound");
// const randomIndex = Math.ceil(Math.random() * colors.length - 1);
// const bombaniImhaEdenReng = colors[randomIndex];
// buttons.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     if (e.target.dataset.color === bombaniImhaEdenReng) {
//       clearTimeout(bombaPartladi);
//       document.write("bomba zerersizlesdirildi✅");
//     } else {
//       alert("olume birazda yaxinlasdin...");
//     }
//   });
// });

// const bombaPartladi = setTimeout(() => {
//     const img = document.createElement('img')
//     img.className  = 'bomb'
//     img.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXpwYzc1cDdlNXdpZW16ZXJidjZiejFodjhmYnkzc3B1c241OW8xaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oe33xf3B50fsc/giphy.gif"
//     document.body.append(img)
//     document.getElementById('bombsound').play()
// }, 5000);

// const hour = document.getElementById("hour");
// const minute = document.getElementById("minute");
// const second = document.getElementById("second");

// setInterval(() => {
//   const date = new Date();
//   const saat = date.getHours();
//   const deqiqe = date.getMinutes();
//   const saniye = date.getSeconds();

//   hour.innerText = saat;

//   if (deqiqe < 10) {
//     minute.innerText = "0" + deqiqe;
//   } else {
//     minute.innerText = deqiqe;
//   }

//   if (saniye < 10) {
//     second.innerText = "0" + saniye;
//   } else {
//     second.innerText = saniye;
//   }
// }, 1000);

/*
    localStorage

    setItem
    getItem
    removeItem
    clear

*/

const modeChangerBtn = document.getElementById("modeChangerBtn");
const clearStorageBtn = document.getElementById("clearStorageBtn");

let mode = localStorage.getItem("mode") || "light";
let icon = "🌛";
document.body.className = mode;
modeChangerBtn.innerText = icon;

modeChangerBtn.addEventListener("click", () => {
  if (mode === "dark") {
    icon = "🌛";
    localStorage.setItem("mode", "light");
    mode = localStorage.getItem("mode");
  } else {
    icon = "🌞";
    localStorage.setItem("mode", "dark");
    mode = localStorage.getItem("mode");
  }

  document.body.className = mode;
  modeChangerBtn.innerText = icon;
});

clearStorageBtn.addEventListener("click", () => {
  // localStorage.clear();
  localStorage.removeItem("mode");
});
//-------------------------------------------------------------------

const content = document.querySelector(".content");
const form = document.querySelector(".form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const title = document.getElementById("title");

const _user = JSON.parse(localStorage.getItem("user"));
let user = _user ? _user : {};

const checkUser = () => {
    console.log(user.name);
  if (user.name) {
    form.style.display = "none";
    content.style.display = "block";
    title.innerText = "HI " + user.name;
  } else {
    form.style.display = "block";
    content.style.display = "none";
  }
};
checkUser();

loginBtn.addEventListener("click", () => {
  const data = JSON.stringify({
    name: username.value,
    password: password.value,
  });
  localStorage.setItem("user", data);
  user = JSON.parse(localStorage.getItem("user"));

  checkUser();
});

logoutBtn.addEventListener("click", () => {
  localStorage.setItem("user", JSON.stringify({}));
  user = localStorage.getItem("user");
  checkUser();
});
