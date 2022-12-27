// Obtener todos los enlaces de la tabla
const enlaces = document.querySelectorAll('.enlace');

// Obtener el elemento div donde se mostrará el resultado
const resultado = document.querySelector('#resultado');

// Agregar un manejador de eventos 'click' a cada enlace
enlaces.forEach(enlace => {
  enlace.addEventListener('click', event => {
    // Obtener el texto del enlace
    const textoEnlace = event.target.textContent;

//     // Mostrar el texto del enlace en el elemento div
//     resultado.textContent = `Has clickeado en el enlace: ${textoEnlace}`;
//   });
// });

const enlace1 = enlace1.addEventListener('click', () => {
    resultado.innerHTML = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Historieta - Responde ocho sencillas preguntas y recibe Una divertida historieta interactiva basada en ti 😉</title>
          <style type="text/css">
              /* Variables CSS */
              :root {
                  --black: #000000;
                  --white: #ffffff;
                  --very-light-pink: #c7c7c7;
                  --text-input-field: #150050;
                  --#5837D0;
                  --#394A6D;
                  --#3C9D9B;
                  --#52DE97;
                  --#C0FFB3;
                  --sm: 14px;
                  --md: 16px;
                  --lg: 18px;
              }
  
              /* Reglas de estilo */
              * {
                  margin: 20;
                  padding: 10;
                  box-sizing: border-box;
              }
  
              body {
                  background-color: var(--very-light-pink);
                  display: flex;
                  flex-direction: column;
                  align-items: center;
              }
  
              h1 {
                  color: var(--black);
                  font-size: var(--lg);
                  margin-bottom: 20px;
                  margin-top: 20px;
                  margin-left: 10px;
              }
  
              h2 {
                  color: var(--black);
                  font-size: var(--md);
                  margin-bottom: 20px;
              }
  
              main {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
              }
  
              input {
                  background-color: var(--white);
                  border: 2px solid var(--black);
                  color: var(--black);
              }
            });
                  `
// const resultado = document.getElementById('resultado');
