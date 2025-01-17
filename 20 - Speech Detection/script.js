window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

console.log(recognition);


let p = document.createElement('p');
const words = document.querySelector('.words');

words.appendChild(p);

recognition.addEventListener('result', e => {
    console.log(e);
    const transcript = Array.from(e.resutls)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    p.textContent = transcript;
    if(e.result[0].isFinal){
        p = document.createElement('p');
        words.appendChild(p);
    }
});

recognition.addEventListener('end', recognition.start);

recognition.start();