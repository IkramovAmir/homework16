const bar = document.querySelector(".header__btn-bar");
const headerListClose = document.querySelector(".header__list-close");
const headerList = document.querySelector(".header__list");

bar .addEventListener("click", function () {
    headerList.classList.toggle
     ("header__list-show");
});

headerListClose .addEventListener("click", function(){
    headerList.classList.remove 
     ("header__list-show");
});
