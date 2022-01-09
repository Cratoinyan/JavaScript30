const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

checkboxes.forEach(checkboxe => checkboxe.addEventListener('click', checked));


let lastChecked;
function checked(e){
    let inBetween = false;

    if(e.shiftKey && this.checked){
        //console.log(e);
        checkboxes.forEach(checkbox => {
            if(checkbox == lastChecked)
                inBetween = true;
            else if(inBetween && !checkbox.checked)
                checkbox.checked = true;
            else if(checkbox == this)
                return inBetween = false;
        })
    }
    
    
        lastChecked = this;
}