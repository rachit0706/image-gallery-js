const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */
const imageArr = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Looping through images */
imageArr.forEach((image) => {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", `images/${image}`);
  newImage.setAttribute("alt", "");
  thumbBar.appendChild(newImage);
});

thumbBar.addEventListener('click', (e) => {
    displayedImage.src = e.target.src;
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
  if (btn.textContent === "Darken") {
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
});
