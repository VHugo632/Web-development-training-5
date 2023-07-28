const body = document.body
const content = document.getElementById("content")
const picture = document.getElementById("picture")
const menu_icon = document.getElementById("menu_icon")
const cross = document.getElementById("cross")

menu_icon.addEventListener("click", function(){
    body.classList.add("activated_menu")
})
cross.addEventListener("click", function(){
    body.classList.remove("activated_menu")
})