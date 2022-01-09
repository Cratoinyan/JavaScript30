const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

checkboxes.forEach(checkboxe => checkboxe.addEventListener('click', checked));


let lastChecked;
function checked(e){
    let inBetween = false;

    if(e.shiftKey && this.checked){
        checkboxes.forEach(checkbox => {
            if((checkbox == lastChecked || checkbox == this) && !inBetween){
                inBetween = true;
            }
            else if(checkbox == lastChecked || checkbox == this){
                inBetween = false;
            }
            if(inBetween && !checkbox.checked)
                checkbox.checked = true;
        })
    }
    
    
        lastChecked = this;
}