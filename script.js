const cookieNameInput = document.getElementById("saveInputName");
const cookieValueInput = document.getElementById("saveInputValue");
const cookieAddButton = document.getElementById("saveButton");
const seeCookiesButton = document.getElementById("seeCookiesButton");
const cookieDisplayer = document.getElementById("cookieDisplayer");



function setCookie(name, value){
    document.cookie = `${name}=${value}`;
}

cookieAddButton.addEventListener("click", function(){
    setCookie(cookieNameInput.value, cookieValueInput.value);
})

seeCookiesButton.addEventListener("click", function(){
    if (document.cookie != ""){
        cookieDisplayer.innerHTML = ` • ${document.cookie.replace(/;/g, "<br> • ")}`;
    } else{
        cookieDisplayer.innerHTML = "You got no cookies 🍪😢";
    }
})