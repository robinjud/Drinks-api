let form = document.querySelector(".js-cocktail-form");
let drinkInput = document.querySelector("[name=cocktail-name]"); 
let responseContainer = document.querySelector(".js-response-container"); 


function displayCocktails(response) {
     const drinks = response.drinks;


     let html="";
     for (let drink of drinks) {
        html +='<p>$ </p>';
     }

     responseContainer.innerHTML = html;

}



function queryDrink(searchExpression){
    console.log(searchExpression);
    const url =+ 'www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita' + searchExpression;


    fetch(url)
      .then(data => data.json())
      .then(displayCocktails);
    
}

function formSubmitted(event) {
   event.preventDefault();   
  

   queryDrink(drinkInput.value);
   drinkInput.value = '';
}

form.addEventListener("submit", formSubmitted);