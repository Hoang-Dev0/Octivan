const iconToggle = document.querySelector(".icon__menu-hamburger");
const menu = document.querySelector(".menu");
document.addEventListener("DOMContentLoaded", function () {
  iconToggle.addEventListener("click", function () {
    this.classList.toggle("open");
    menu.classList.toggle("active");
  });

  menu.addEventListener("click", function (e) {
    if (e.target.closest(".menu__link")) {
      menu.classList.toggle("active");
    }
  });
  
});
