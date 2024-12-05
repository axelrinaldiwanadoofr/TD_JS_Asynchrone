
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
    setTimeout( function()
    {
        let div = document.querySelector( "#main") ;
        div.innerHTML = div.innerHTML + "<br>2 secondes plus tard!" ;    

        setTimeout( function()
        {
            let div = document.querySelector( "#main") ;
            div.innerHTML = div.innerHTML + "<br>3 secondes plus tard!" ;  
            
            setTimeout( function()
            {
                let div = document.querySelector( "#main") ;
                div.innerHTML = div.innerHTML + "<br>1 seconde plus tard!" ;      
            }, 1000)
        }, 3000) ;
    }, 2000 ) ;
}