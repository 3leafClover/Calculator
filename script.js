let output = document.getElementById("output")
let result = document.getElementById("result")
let buttons = document.querySelectorAll(".btn")

buttons.forEach((buttonItem) => {
    buttonItem.addEventListener("click",calculate)
})

function calculate(){
    let buttonText=this.innerText;
    if (buttonText == "AC"){
        output.innerText="";
        result.innerText="0";
        result.style.animation=""
        return;
    }
    else if (buttonText == "DEL"){
       output.innerText= output.innerText.substring(0,output.innerText.length-1)
       result.style.animation="small 0.5s ease-in-out"
       result.style.animationFillMode="forwards"
       output.style.animation="big 0.5s ease-in-out"
       output.style.animationFillMode="forwards"
    }
    else if (buttonText =="="){
        result.innerText=eval(output.innerText)
        result.style.animation="big 0.5s ease-in-out"
        result.style.animationFillMode="forwards"
        output.style.animation="small 0.5s ease-in-out"
        output.style.animationFillMode="forwards"
    }
    else {
        output.innerText+=buttonText
        result.style.animation="small 0.5s ease-in-out"
        result.style.animationFillMode="forwards"
        output.style.animation="big 0.5s ease-in-out"
        output.style.animationFillMode="forwards"
    }
}