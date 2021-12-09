const panels = document.querySelectorAll(".panel");

panels.forEach(panel => panel.addEventListener("mousedown",function animate(){
    panel.classList.toggle("open-active");
    panel.classList.toggle("open");
}));