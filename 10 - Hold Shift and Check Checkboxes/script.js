const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let shift = false;

checkboxes.forEach(checkboxe => checkboxe.addEventListener('change', checked));
document.addEventListener('keydown',shifted);
document.addEventListener('keyup',shifted);

function shifted(e){
    if(e.key == "Shift" && e.type == "keydown")
        shift = true;
    else if(e.key == "Shift" && e.type == "keyup")
        shift = false
    console.log(shift);
}

// function checked(e){
//     console.log(e);
//     let lastChecked = this;
// }