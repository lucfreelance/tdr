// Función que despliega el menu hamburguer
const toggleadoMenu = document.querySelector('.ham-menu')
const listMenu = document.querySelector('.list-menu');
toggleadoMenu.addEventListener('click', toggleMenu);
function toggleMenu() {
    listMenu.classList.toggle('inactive');
}
