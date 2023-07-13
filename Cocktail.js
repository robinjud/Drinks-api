let form = document.querySelector(".js-cocktail-form");
let alcoholInput = document.querySelector("[name=cocktail-name]"); 
let responseContainer = document.querySelector(".js-response-container"); 

function getImageHtml(drink){
   if(typeof drink.strDrinkThumb === 'string'){
    return  `<img src="${drink.strDrinkThumb}" alt="${drink.strDrink}"/>`;
   }
   return "";
}


function displayCocktails(response) {
    const drink = response.drinks;

    let html = '';
    for (let drinks of drink) {
        html += `<section>
             <h2>${drinks.strDrink}</h2>
             ${getImageHtml(drinks)}
        </section>`; 
     
    }
     responseContainer.innerHTML = html;

}

function queryAlcohol(searchExpression){
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchExpression;


    fetch(url)
      .then((data) => data.json())
      .then(displayCocktails);

}

function formSubmitted(event) {
   event.preventDefault();   
  

   queryAlcohol(alcoholInput.value);
   alcoholInput.value = "";
}

form.addEventListener("submit", formSubmitted);