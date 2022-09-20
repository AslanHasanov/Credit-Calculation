

var btn=document.getElementById("btn")
btn.onclick=()=>{
    var x=document.getElementById("amount").value
    var y=document.getElementById("duration").value
    var z=document.getElementById("percentage").value

    var percent=(x*z)/100
    var mounth=(Number(x)+Number(percent))/y
    document.getElementById("inference").innerHTML=mounth
}

var mo1=document.getElementById("amount")
mo1.onfocus=()=>document.getElementById("quantity").style.transform="rotate(360deg) translateX(0px) translateY(-33px)"
mo1.onblur=()=>document.getElementById("quantity").style.transform="rotate(360deg) translateX(0px) translateY(0px)"

var mo2=document.getElementById("duration")
mo2.onfocus=()=>document.getElementById("mounth").style.transform="rotate(360deg) translateX(0px) translateY(-33px)"
mo2.onblur=()=>document.getElementById("mounth").style.transform="rotate(360deg) translateX(0px) translateY(0px)"

var mo3=document.getElementById("percentage")
mo3.onfocus=()=>document.getElementById("percent").style.transform="rotate(360deg) translateX(-2px) translateY(-33px)"
mo3.onblur=()=>document.getElementById("percent").style.transform="rotate(360deg) translateX(0px) translateY(0px)"


