const hourHand = document.querySelector(".hour");
const minHand = document.querySelector(".min");
const secHand = document.querySelector(".sec");

function setDate()
{
    console.log("hi");
    const date = new Date();
    const hourDeg = date.getHours()/60 * 360;
    const minDeg = date.getMinutes()/60 * 360;
    const secDeg = date.getSeconds()/60 * 360;

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    secHand.style.transform = `rotate(${secDeg}deg)`;

}

setInterval(setDate,500);