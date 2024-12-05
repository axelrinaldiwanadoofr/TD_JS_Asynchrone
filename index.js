
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
    div.innerHTML = div.innerHTML + "<br>Depart du traitement asynchrone" ;

    let texte = await attendreQuelquesSecondes( 3, "au bout de 3 secondes") ;

    div.innerHTML = div.innerHTML + "<br>Resultat: " + texte ;

    texte = await attendreQuelquesSecondes( 2, "au bout de 2 secondes") ;

    div.innerHTML = div.innerHTML + "<br>Resultat: " + texte ;


}