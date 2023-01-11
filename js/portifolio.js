function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("Pop_Up_Button_Hide").style.display = "none";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("Pop_Up_Button_Hide").style.display = "block";
}

document.addEventListener("click", function(event){
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
        closeForm()
    }
}, false )