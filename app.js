// console.log("Hello! script is working from a different source")
// alert("pyar h aap hmara");
// var username = prompt("Give me your username");
// alert("hello " + username);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")
// console.log(txtInput)

function clickHandler(){
    console.log("clicked");
    console.log(txtInput.value);

}

btnTranslate.addEventListener("click", clickHandler)