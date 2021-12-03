const space = document.getElementById("space");
const blur = document.getElementById("blur");
const color = document.getElementById("color");
const image = document.querySelector(".image");
const container = document.getElementById("image-container");

console.log(space);
console.log(blur);
console.log(color);

blur.addEventListener("change",changeBlur);
space.addEventListener("change", changeSpacing);
color.addEventListener("change" ,changeColor);

function changeBlur(){
    image.style.filter = `blur(0.${blur.value}em)`;
}

function changeSpacing(){
    container.style.borderWidth = `1.${space.value}em`;
}

function changeColor(){
    container.style.borderColor = `${color.value}`;
}