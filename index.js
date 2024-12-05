
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

    let sql = "select * from objet where periodeVisibilite='Hiver'" ;

    let url = "http://localhost/TPasync/sql.php?sql=" + sql ;

    let reponse = await window.fetch( url ) ;

    let texte = await reponse.text() ;

    let data = JSON.parse( texte ) ;

    let html = "<table>" ;
    for( let i=0 ; i<data.length; i++ )
    {
        if( !i )
        {
            html + "<tr>" ;
            for( let champ in data[i] )
            {
                html += "<td><b>" + champ + "</b></td>" ;
            }
            html += "</tr>" ;    
        }
        html + "<tr>" ;
        for( let champ in data[i] )
        {
            html += "<td>" + data[i][champ] + "</td>" ;
        }
        html += "</tr>" ;
    }
    html += "<table>" ;


    div.innerHTML = div.innerHTML + "<br>" + html ;
}