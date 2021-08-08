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
const firstBtn = document.querySelector(".btn-first");
const firstBtnShow = document.querySelector(".if-btn-first .center1");
const secondBtn = document.querySelector(".btn-second");
const secondBtnShow = document.querySelector(".if-btn-second .center2");
const selection = document.querySelector(".navbar .menu-list li a");
const back_section_first = document.querySelector(".if-btn-first .fa-chevron-left")
const back_section_second = document.querySelector(".if-btn-second .fa-chevron-left")
const article_first = document.querySelector(".article-first");
const article_second = document.querySelector(".article-second");
const article_third = document.querySelector(".article-third");
const skuy = document.querySelector(".skuyy");
const masuk = document.querySelector(".masukk");
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

firstBtn.onclick = () => {
    welcome.classList.add("hide");
    firstBtnShow.classList.add("show");

    back_section_first.onclick = () => {
        firstBtnShow.classList.remove("show");
        welcome.classList.remove("hide");
    }
}

secondBtn.onclick = () => {
    welcome.classList.add("hide");
    secondBtnShow.classList.add("show");
}

back_section_first.onclick = () => {
    firstBtnShow.classList.remove("show");
    welcome.classList.remove("hide");
}

back_section_second.onclick = () => {
    secondBtnShow.classList.remove("show");
    welcome.classList.remove("hide");
}

skuy.onclick = () => {
    secondBtnShow.classList.remove("show");
    firstBtnShow.classList.add("show");
}

masuk.onclick = () => {
    firstBtnShow.classList.remove("show");
    secondBtnShow.classList.add("show");
}



window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");

    this.scrollY > 400 ? article_first.classList.add("muncul") : article_first.classList.add("normal");

    this.scrollY > 700 ? article_second.classList.add("muncul") : article_second.classList.add("normal");

    this.scrollY > 1000 ? article_third.classList.add("muncul") : article_third.classList.add("normal");
};