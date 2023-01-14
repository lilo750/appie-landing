// make the menu and remove icons work with mobile nav
const headerEL = document.querySelector(".header");
const btnNavEl = document.querySelector(".btn-mobile-nav");

btnNavEl.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});
