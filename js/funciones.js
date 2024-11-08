export function test(){
    alert('funciona el click nuevo quote')
}

export async function CallAPI(){
    const data = await fetch('https://api.api-ninjas.com/v1/quotes',{
       headers:{
        'X-Api-Key':'wsjwb/2q27gLuMO8SfFqgg==TWP31tLqh54vKGjB'
       }
    });
    const datos= await data.json();
    return datos    
}

export async function LoadQuote(quotehtml,autor,tag) {
    const dataAPI= await CallAPI();
    const {quote,author,category}=dataAPI[0];
    autor[0].innerText=author;
    tag[0].innerHTML=`<p>${category}</p>`;
    quotehtml[0].innerText=quote;
}

export  function CopyQuote(quotehtml) {
    navigator.clipboard.writeText(quotehtml[0].textContent)
    .then(() => {
      console.log('Texto copiado al portapapeles');
    })
}