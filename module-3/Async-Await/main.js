const API_URL = "https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521"
const fetchDatum = async function () {
    let data = await $.get(API_URL)
    return data;
}

fetchDatum();

//without async/await 
const fetchRecipes = function (ingredient) {
    $.get(`/recipe/${ingredient}`, function(recipe){
      console.log(recipe)
    });
  }

const fetchRecipesAsync = async function(ingredient){
    let recipe = await $.get(`/recipe/${ingredient}`);
    console.log(recipe);
}

fetchRecipesAsync();

const getRandomWord = async function(){
    let data = await $.get("https://random-word-api.herokuapp.com/word");
    return data;
}

