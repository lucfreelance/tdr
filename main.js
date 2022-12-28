const menuEmail = document.querySelector('.navbar-email') // desktop-menu inactive open
const desktopMenu = document.querySelector('.desktop-menu');
menuEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive'); // desktop-menu inactive close
}
