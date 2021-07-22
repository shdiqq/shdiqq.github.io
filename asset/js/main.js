alert("The following website is still under development~")

const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const welcome = document.querySelector(".welcome")
const secondBtn = document.querySelector(".btn-second");
const center = document.querySelector(".center");
const selection = document.querySelector(".navbar .menu-list li a");
var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none" ;
})

menuBtn.onclick = () => {
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    cancelBtn.classList.add("show");
    body.classList.add("disabledScroll");

    selection.onclick = () => {
        menu.classList.remove("active");
        menuBtn.classList.remove("hide");
        cancelBtn.classList.remove("show");
        body.classList.remove("disabledScroll");
    };
};

cancelBtn.onclick = () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    body.classList.remove("disabledScroll");
};

secondBtn.onclick = () => {
    welcome.classList.add("hide")
    center.classList.add("show")
}

window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
};