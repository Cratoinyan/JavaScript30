const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data)=>{
    console.log(data);
    speed.textContent = Math.round(data.coords.speed);
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
    console.err(err);
    console.log('You need to allow the popup for that to work');
});