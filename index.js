
function OnClick()
{
    let valeur = document.querySelector("#valeur").value ;
    let div = document.querySelector( "#main") ;
    div.innerHTML = div.innerHTML + "<br>" + valeur ;
}