window.addEventListener("load", function(){
    loader.style.display = "none" ;
})

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
const back_section = document.querySelector(".center .fa-chevron-left")
const article_first = document.querySelector(".article-first");
const article_second = document.querySelector(".article-second");
const article_third = document.querySelector(".article-third");
var loader = document.getElementById("preloader");



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
    welcome.classList.add("hide");
    center.classList.add("show");
}

back_section.onclick = () => {
    center.classList.remove("show");
    welcome.classList.remove("hide");
}

window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");

    this.scrollY > 290 ? article_first.classList.add("muncul") : article_first.classList.add("normal");

    this.scrollY > 600 ? article_second.classList.add("muncul") : article_second.classList.add("normal");

    this.scrollY > 900 ? article_third.classList.add("muncul") : article_third.classList.add("normal");
};
