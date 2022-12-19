import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});

let body = document.querySelector('body')
let profile = document.createElement("div");
profile.classList.add('name')
let img = document.createElement("img")
img.setAttribute("src", "./images/favicon.ico")
img.classList.add('image')
profile.appendChild(img)
body.appendChild(profile)

const image = document.querySelector('.image')
image.addEventListener('click', () => {  
    image.style.transform = "scale(2)";
  // image.style.zoom != 2 ? image.style.zoom = 2 : image.style.zoom = 1
  
})