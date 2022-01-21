var vari = document.querySelector("#vari");

vari.addEventListener("click", variant)

function variant()
{
    var value = parseInt(vari.innerText)

    if(value=="basic")
    {
        console.log("red")
    }
    else if(value=="basictext")
    {
        console.log("blue")
    }
}