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
    let icon = this.paused ? '►' : '❚❚';
    toggle.textContent = icon;
}

function adjustVolume(e){
    video.volume = this.value;
}

function adjustPlaybackRate(){
    video.playbackRate = this.value;
}

function skipToTime(e){
    if(this.dataset.skip == '-10')
        video.currentTime = video.currentTime - 10;
    else if(this.dataset.skip == '25')
        video.currentTime = video.currentTime + 25;
}

ranges.forEach(slider => {
    if(slider.name == 'volume')
        slider.addEventListener('input', adjustVolume);
    else if(slider.name == 'playbackRate')
        slider.addEventListener('input', adjustPlaybackRate);
});

skipButtons.forEach(button => {
    button.addEventListener('click', skipToTime);
});

document.addEventListener('keydown', togglePlayWithSpace);
video.addEventListener('click', togglePlayWithClick);
video.addEventListener('play',updatePlayButton);
video.addEventListener('pause',updatePlayButton);
toggle.addEventListener('click', togglePlayWithClick);