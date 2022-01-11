let input = [];
let secretCode = 'silmarillion';

window.addEventListener('keyup',(e) =>{
    console.log(e.key);
    input.push(e.key);
    input.splice(-secretCode.length -1, input.length - secretCode.length);

    if(input.join('').includes(secretCode)){
        console.log('fuck you morgoth, you to feanor');
    }
    console.log(input);
})