
function ativaletra(elemento){
const arrTexto=elemento.innerHTML.split('');
elemento.innerHTML ='';
arrTexto.forEach((Letra, i)=>{
    setTimeout(()=>{
        elemento.innerHTML += Letra;
    },75 * i);
});
}

const h1 = document.querySelector('.digitando');
ativaletra(titulo);