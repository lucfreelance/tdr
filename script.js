// Función que despliega el menu hamburguer
const toggleadoMenu = document.querySelector('.ham-menu')
const listMenu = document.querySelector('.list-menu');
toggleadoMenu.addEventListener('click', toggleMenu);
function toggleMenu() {
    listMenu.classList.toggle('inactive');
}
// Insertado de información de TDR y FE en Home
const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const mainElement = document.querySelector('main');

button1.addEventListener('click', () => {
    fetch('https://lucfreelance.github.io/TDR-by-Trozos-de-Realidad/trozos-de-realidad.html')
      .then(response => response.text())
      .then(html => {
        mainElement.innerHTML = html;
      });
    });

  button2.addEventListener('click', () => {
    fetch('https://lucfreelance.github.io/TDR-by-Trozos-de-Realidad/fundacion-editorial.html')
      .then(response => response.text())
      .then(html => {
        mainElement.innerHTML = html;
      });
    });
//
