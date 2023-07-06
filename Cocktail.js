let form = document.querySelector(".js-cocktail-form");
let alcoholInput = document.querySelector("[name=cocktail-name]"); 
let responseContainer = document.querySelector(".js-response-container"); 


function displayCocktail(response) {
    const drinks = response.drinks;

    let html = ""
    for (let drinks of drinks) {
        html += `<p> ${drinks.strDrink} </p>`; 
     
    }
     responseContainer.innerHTML = html;

}

function queryAlcohol(searchExpression){
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchExpression;


    fetch(url)
      .then((data) => data.json())
      .then(displayCocktail);

}

function formSubmitted(event) {
   event.preventDefault();   
  

   queryAlcohol(alcoholInput.value);
   alcoholInput.value = "";
}

form.addEventListener("submit", formSubmitted);