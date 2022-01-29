const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

speed.addEventListener('mousemove', function (e) {
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const height = Math.round((y / this.offsetHeight) * 100) + '%';
    const min = 0.4;
    const max = 4;
    const playBackRate = percent * (max - min) + min;

    bar.textContent = playBackRate.toFixed(2) + 'x';
    video.playbackRate = playBackRate;
    bar.style.height = height;
});