


function calculate(){
    var x=document.getElementById("amount").value
    var y=document.getElementById("duration").value
    var z=document.getElementById("percentage").value

    var percent=(x*z)/100
    var mounth=(Number(x)+Number(percent))/y
    document.getElementById("inference").innerHTML=mounth

}

var move1= ()=> document.getElementById("quantity").style.transform="rotate(360deg) translateX(0px) translateY(-33px)"

var move2= ()=> document.getElementById("mounth").style.transform="rotate(360deg) translateX(0px) translateY(-33px)"

var move3= ()=> document.getElementById("percent").style.transform="rotate(360deg) translateX(-2px) translateY(-33px)"

