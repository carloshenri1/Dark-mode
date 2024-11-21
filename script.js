var body = document.querySelector("body")
var btnDarkMode = document.querySelector("#dark-mode")

function darkMode(){
    body.classList.toggle ("dark-mode")

    if(btnDarkMode.textContent == "Ativar"){
        btnDarkMode.textContent = "Desativar"
    }else{
        btnDarkMode.textContent = "Ativar"
    }
}

 
addEventListener("click",darkMode)