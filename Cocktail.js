let form = document.querySelector (".js-cocktail-form");
let cocktailInput = document.querySelector("[name=cocktail-name]");
let responseContainer = document.querySelector(".js-response-container");


function displayCocktail(response){
    const drinks = response.drinks;

    let html = "";
    for (let drink of drinks) {
       html += '<p> ${cocktail.strDrink} </p>';
           
    }
    responseContainer.innerHTML= html;
}



function quaryCocktail(searchExpression) {
    const url= "www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchExpression;

    fetch(url)
        .then(data => data.json())
        .then(displayCocktail);
}

function formSubmitted(event) {
   event.preventDefault();
   
   quaryCocktail(cocktailInput.value);
   cocktailInput.value = '';
}
form.addEventListener("submit", formSubmitted);