
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



function tasync()
{
    // On cree une promise
    let promise = new Promise( (resolve, reject)=>
    {
        setTimeout( ()=>
        {
            resolve( "1 seconde plus tard") ;
        }, 1000) ;
    }) ;

    promise.then( (valeur)=>
    {
        let div = document.querySelector( "#main") ;
        div.innerHTML = div.innerHTML + "<br>Resultat: " + valeur ;

        return new Promise( (resolve, reject)=>
        {
            setTimeout( ()=>
            {
                resolve( "2 seconde plus tard") ;
            }, 2000) ;
        });
    }).then( (valeur)=>
    {
        let div = document.querySelector( "#main") ;
        div.innerHTML = div.innerHTML + "<br>Resultat juste après: " + valeur ;
    }).then( (valeur)=>
    {
        let div = document.querySelector( "#main") ;
        div.innerHTML = div.innerHTML + "<br>Terminé " + valeur ;
    }) ;


}