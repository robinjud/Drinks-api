let form = document.querySelector(".js-cocktail-form");
let drinkInput = document.querySelector("[name=cocktail-name]"); 


function formSubmitted(event) {
   event.preventDefault();   
   alert(drinkInput.value);
}

form.addEventListener("submit", formSubmitted);