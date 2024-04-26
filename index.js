// ..................SKILLS Selection......................................
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// ...........................DYNAMIC YEAR...........................
const year = new Date().getFullYear();

document.getElementById("copyright-span").innerHTML = year;

// ...............................HAMBURGER MENU...............................
let sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

// ...................................FORM TO GOOGLE SHEETS........................
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyZZ43C6DcYzL__zU8q3ndOc9gWEKcAPuWKhzQiQe6HJjqXZ_me-lgGORUbxx0SB3Bc/exec";
const form = document.forms["submit-to-google-sheet"];

const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully!";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 3000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
