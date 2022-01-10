const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


function togglePlayWithClick(){
    if(video.paused)
        video.play();        
    else
        video.pause();
}

function togglePlayWithSpace(e){
    if(e.code == 'Space'){
        if(video.paused)
            video.play();
        else
            video.pause();
    }
}

function updatePlayButton(){
    const icon = this.paused ? '►' : '❚❚';
    toggle.textContent = icon;
}

function adjustSliders(){
    video[this.name] = this.value;
}

function skipToTime(e){
    if(this.dataset.skip == '-10')
        video.currentTime = video.currentTime - 10;
    else if(this.dataset.skip == '25')
        video.currentTime = video.currentTime + 25;
}

function skipToTimeWithArrows(e){
    if(e.code == 'ArrowRight'){
        video.currentTime = video.currentTime + 25;
    }
    else if(e.code == 'ArrowLeft'){
        video.currentTime = video.currentTime - 10;
    }
}

function adjsutProgressBar(){
    const progressPercent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${progressPercent}%`;
}

ranges.forEach(slider => {
    slider.addEventListener('input',adjustSliders);
});

skipButtons.forEach(button => {
    button.addEventListener('click', skipToTime);
});

document.addEventListener('keydown', togglePlayWithSpace);
document.addEventListener('keydown', skipToTimeWithArrows);
video.addEventListener('click', togglePlayWithClick);
video.addEventListener('timeupdate', adjsutProgressBar);
video.addEventListener('play',updatePlayButton);
video.addEventListener('pause',updatePlayButton);
toggle.addEventListener('click', togglePlayWithClick);