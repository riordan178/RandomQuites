import {test,LoadQuote,CopyQuote} from "./funciones.js"

const QuoteHTML=document.getElementsByClassName('quote');
const Author=document.getElementsByClassName('author');
const Tags= document.getElementsByClassName('tags');
//Cargando frase al cargar la pagina
document.addEventListener('DOMContentLoaded',()=>{
    LoadQuote(QuoteHTML,Author,Tags)
    
})

//Cargando frase al dar click a nueva frase
document.addEventListener("click",(e)=>{
    (e.target.id=="newquote") && LoadQuote(QuoteHTML,Author,Tags);
    (e.target.id=="link") && CopyQuote(QuoteHTML);
})


//Copiando la frase al dar click a copiar


