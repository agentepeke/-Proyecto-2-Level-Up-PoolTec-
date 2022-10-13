let contador = 0; // El contador empieza en 0

const valor = document.querySelector('#valor');
const botones = document.querySelectorAll('.boton')
//El contador ira aumentando o disminuyendo dependiendo que boton presionen
botones.forEach(boton =>{
    boton.addEventListener('click', function(e){
        const estilos = e.currentTarget.classList;

        if(estilos.contains('disminuir')){
            contador --;
        }
        else if (estilos.contains('aumentar')){
            contador++;
        }
        else {
             contador = 0
        }
        valor.textContent = contador;
// Cambiamos los colores del contador dependiendo si es positivo o negativo
        if (contador > 0){
            valor.style.color = '#17f505';
        }
        else if (contador < 0){
            valor.style.color = '#f50525';
        }
        else {
            valor.style.color = '#0588f5'
        }

     
    })



})