
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

    let reponse = await window.fetch( "http://localhost/TPasync/script.php" ) ;

    let texte = await reponse.text() ;

    div.innerHTML = div.innerHTML + "<br>Resultat: " + texte ;


}