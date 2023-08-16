var inputText = document.querySelector("#input-text");
var btnTranslate = document.querySelector("#btn-translate");
var Output = document.querySelector("#output");
var API_URL = "https://api.funtranslations.com/translate/shakespeare.json";


function translationURL(text) {
    return API_URL + "?text=" + text;
}

function errorHandler(error) {
    console.log("Error occured: " + error);
}

function clickHandler() {
    var Input = inputText.value;

    fetch(translationURL(Input))
        .then(Response => Response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            Output.innerText = translatedText;
        })
        .catch(errorHandler);

};

btnTranslate.addEventListener("click", clickHandler);