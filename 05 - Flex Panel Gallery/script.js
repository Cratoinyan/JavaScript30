const panels = document.querySelectorAll(".panel");

panels.forEach(panel => console.log(panel));

panels.forEach(panel => panel.addEventListener("mouseover",function enter(){
    panel.classList.add("open-active");
}));

panels.forEach(panel => panel.addEventListener("mouseleave",function leave(){
    panel.classList.remove("open-active");
}));

// function animate(panel){
//     panel.classList.add(".open-active");
// }