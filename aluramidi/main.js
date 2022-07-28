function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

const listaTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaTeclas.length){
    listaTeclas[contador].onclick = tocaSomPom;

    contador++;

    console.log(contador)
}