window.addEventListener("keydown", function(e){
    const audio = document.querySelector(`audio[data-key=${e.code}]`);
    const key = document.querySelector(`.key[data-key=${e.code}]`);
    const keys = document.querySelectorAll(".key");
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");

    function removeTransition(e)
    {
        if(e.propertyName !== 'transform') return;
        this.classList.remove("playing");
    }

    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
});