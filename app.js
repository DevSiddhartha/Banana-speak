
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
// console.log(txtInput)

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text;
}

function clickHandler(){
    // outputDiv.innerText = "asasasas " + txtInput.value;
    var inputTxt = txtInput.value; //taking input

    //calling server for processing
    fetch(getTranslationURL(inputTxt))
    .then(response => response.json())
    .then(json => console.log(json.contents.translated))
}

btnTranslate.addEventListener("click", clickHandler)