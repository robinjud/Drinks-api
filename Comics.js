let form = document.querySelector (".js-comic-form");
let comicInput = document.querySelector("[name=comic-name]");

function quaryComic(searchExpression) {
    console.log(searchExpression);
}

function formSubmitted(event) {
   event.preventDefault();
   
   quaryComic(comicInput.value);
   comicInput.value = '';
}
form.addEventListener("submit", formSubmitted);