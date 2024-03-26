const navTogggle = document.querySelector(",nav-toggle");
const navMenu = document.querySelector(",nav-menu");

navTogggle.addEventListener ("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
});