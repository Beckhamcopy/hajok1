/*function felugrik(){
    var nevertek = document.getElementById("nev").value;

    if ((nevertek =="")){
        alert("Nem adtál nevet a kérdőívhez!")
    }
}
*/


function dark(){
    document.getElementById("dark").style.backgroundColor = "#454545" 
    document.getElementById("dark").style.color = "#ffffff"
    document.getElementById("dark1").style.backgroundColor = "#454545" 
    document.getElementById("dark1").style.color = "#ffffff"
    document.getElementById("dark2").style.backgroundColor = "#454545" 
    document.getElementById("dark2").style.color = "#ffffff"
    document.getElementById("dark3").style.backgroundColor = "#454545" 
    document.getElementById("dark3").style.color = "#ffffff"
    document.getElementById("dark4").style.backgroundColor = "#454545" 
    document.getElementById("dark4").style.color = "#ffffff"
    document.getElementById("dark5").style.backgroundColor = "#454545" 
    document.getElementById("dark5").style.color = "#ffffff"
    document.getElementById("darkaside").style.backgroundColor = "#454545" 
    document.getElementById("darkaside").style.color = "#ffffff"
    document.getElementById("darkadat").style.backgroundColor = "#454545" 
    document.getElementById("darkadat").style.color = "#ffffff"
} 

function light(){
    document.getElementById("dark").style.backgroundColor = "#ffffff" 
    document.getElementById("dark").style.color = "#454545"
    document.getElementById("dark1").style.backgroundColor = "#ffffff" 
    document.getElementById("dark1").style.color = "#454545"
    document.getElementById("dark2").style.backgroundColor = "#ffffff" 
    document.getElementById("dark2").style.color = "#454545"
    document.getElementById("dark3").style.backgroundColor = "#ffffff" 
    document.getElementById("dark3").style.color = "#454545"
    document.getElementById("dark4").style.backgroundColor = "#ffffff" 
    document.getElementById("dark4").style.color = "#454545"
    document.getElementById("dark5").style.backgroundColor = "#ffffff" 
    document.getElementById("dark5").style.color = "#454545"
    document.getElementById("darkaside").style.backgroundColor = "#ffffff" 
    document.getElementById("darkaside").style.color = "#454545"
    document.getElementById("darkadat").style.backgroundColor = "#ffffff" 
    document.getElementById("darkadat").style.color = "#454545"

}
document.getElementById("katt").addEventListener("click", valasz)

function valasz() {
const x = document.getElementById("mySelect").selectedIndex;
const y = document.getElementById("mySelect").options;
document.getElementById("valasz").innerHTML = `A válasz: ${y[x].value}`;
}


