function animatedForm() {
    const arrows = document.querySelectorAll('.fa-arrow-down');


    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const prevForm = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            if(prevForm.type === "text" && validateUser(prevForm)){
                nextSlide(parent, nextForm);
            } else if (prevForm.type === "email" && validateEmail(prevForm)){
                nextSlide(parent, nextForm);
            } else if (prevForm.type === "url" && validateWebsite(prevForm)){
                nextSlide(parent, nextForm)
            } else if (prevForm.type === "password" && validateUser(prevForm)){
                nextSlide(parent, nextForm);
            } else{
                parent.style.animation = "shake 0.5s ease";
            }
            parent.addEventListener('animationend', () => {
                parent.style.animation = "";
            })
        })
    })
}

var errorArea = document.querySelectorAll('.error_alert');
function emptyError() {
    errorArea[0].textContent = ""
}

function validateUser(user) {
    if(user.value.length < 6){
        errorArea[0].textContent = "Error! Not enough characters"
        error("#eae4e9")
    } else {
        error("aliceblue");
        return true;
    }
}


function validateEmail(email){
    const validate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(validate.test(email.value)){
        error("aliceblue");
        return true;
    } else {
        errorArea[0].textContent = "Error! Wrong email format"
        error("#eae4e9");
    }
}

function validateWebsite(url){
    const validate = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    if(validate.test(url.value)){
        error("aliceblue");
        return true;
    } else {
        errorArea[0].textContent = "Error! Wrong url format"
        error("#eae4e9");
    }
}

function nextSlide(parent, nextForm){
    parent.classList.add("inactive");
    parent.classList.remove("active");
    nextForm.classList.add("active");

}

function error(color){
    document.body.style.backgroundColor = color;
}

animatedForm();