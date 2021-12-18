const canvas = document.getElementById("draw");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 50;

let isDrawing = false;

let lastX = 0;
let lastY = 0;
let hue = 0;
let lineWidth = 50;

function draw(event){
    if(!isDrawing) return;

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();

    lastX = event.offsetX
    lastY = event.offsetY
    ctx.lineWidth = lineWidth;
    hue++;
    if(hue > 360) hue = 0;
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (event) => {
    isDrawing = true;
    [lastX, lastY] = [event.lastX, event.lastY];
});
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);
canvas.addEventListener("wheel", (event) => {
    console.log(event);
    if(event.deltaY <= 0 && lineWidth < 100)
        lineWidth += 1;
    else if(event.deltaY >= 0 && lineWidth > 20)
        lineWidth -= 1;
});