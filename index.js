
function OnClick()
{
    let valeur = document.querySelector("#valeur").value ;
    let div = document.querySelector( "#main") ;
    div.innerHTML = div.innerHTML + "<br>" + valeur ;
}

function attendre( temps )
{
    let somme = 0 ;
    for( let i=0; i<temps*1000000; i++ )
    {
        somme += i ;
    }
    return somme ;
}

function traitement()
{
    let resultat = attendre( 5000 ) ;

    let div = document.querySelector( "#main") ;
    div.innerHTML = div.innerHTML + "<br>Resultat: " + resultat ;
}

function attendreQuelquesSecondes( nbSeconde, message )
{
    // On cree une promise
    return new Promise( (resolve, reject)=>
    {
        setTimeout( ()=>
        {
            resolve( message ) ;
        }, nbSeconde*1000) ;
    }) ;
}

async function tasync()
{
    let div = document.querySelector( "#main") ;
    div.innerHTML = div.innerHTML + "<br>On lance le fetch" ;

    let a = 12 ;
    let b = 4 ;

    // Multiplication à distance faite par un script php
    let url = "http://localhost/TPasync/multiplier.php?a=" + a
    + "&b=" + b ;

    url = window.location.href + "multiplier.php?a=" + a
    + "&b=" + b ;

    let reponse = await window.fetch( url ) ;

    let texte = await reponse.text() ;

    div.innerHTML = div.innerHTML + "<br>Resultat: " + texte ;


}