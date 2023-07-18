let form = document.querySelector(".js-cocktail-form");
let alcoholInput = document.querySelector("[name=cocktail-name]"); 
let responseContainer = document.querySelector(".js-response-container"); 

function getImageHtml(drink){
   if(typeof drink.strDrinkThumb === 'string'){
    return  `<img src="${drink.strDrinkThumb}" alt="${drink.strDrink}"/>`;
   }
   return "";
}

function getIngredientList(drink){
     let html = '<ul>';

      for (let i = 1; i <= 20; ++i){
           let currentIngredient = drink['strIngredient' + i];
           let currentMeasure = drink['strMeasure' + i];

           if (typeof currentIngredient === 'string'  && currentIngredient.length > 0)  {
            html += `
             <li class = "ingredient-item">
                      ${currentIngredient} (${currentMeasure})
             
             </li>
            `;
              }

         }

            html += '</ul>';
             return html;
     }

function displayErrorMessage() {
     responseContainer.innerHTML = '<div class = "error"> Error fetching data.</div>';

}


function displayCocktails(response) {
    const drink = response.drinks;

    let html = '';
    for (let drinks of drink) {
        html += `<section class="drink-item">
             <h2 class ="name">${drinks.strDrink}</h2>
             ${getImageHtml(drinks)}

                    <a class = "instructions">Instructions</a>
                    <p class="container"> ${drinks.strInstructions}</p>
                    <a ${drinks.strSource}" class = "ingredients">Ingredients</a>
                    <p>  ${getIngredientList(drinks)}  </p>
                    
              
                    </section>` 
              
        
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