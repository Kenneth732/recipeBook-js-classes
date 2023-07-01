class Recipe {
    constructor(title, ingredients, instructions) {
      this.title = title;
      this.ingredients = ingredients;
      this.instructions = instructions;
    }
  
    displayDetails() {
      console.log("Title: " + this.title);
      console.log("Ingredients: " + this.ingredients.join(", "));
      console.log("Instructions: " + this.instructions);
    }
  }
  
  class RecipeBook {
    constructor() {
      this.recipes = [];
    }
  
    addRecipe(title, ingredients, instructions) {
      const recipe = new Recipe(title, ingredients, instructions);
      this.recipes.push(recipe);
    }
  
    viewRecipes() {
      const recipesList = document.querySelector('#recipes-list');
      recipesList.innerHTML = '';
  
      this.recipes.forEach((recipe, index) => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');
        recipeElement.innerHTML = "<h4>" + recipe.title + "</h4>" +
          "<p><strong>Ingredients:</strong> " + recipe.ingredients.join(", ") + "</p>" +
          "<p><strong>Instructions:</strong> " + recipe.instructions + "</p>" +
          "<button class='delete-button' data-index='" + index + "'>Delete Recipe</button>";
  
        // Event listener for the delete button
        const deleteButton = recipeElement.querySelector(".delete-button");
        deleteButton.addEventListener("click", () => {
          const index = parseInt(deleteButton.getAttribute("data-index"));
          this.deleteRecipe(index);
          this.viewRecipes();
        });
  
        recipesList.appendChild(recipeElement);
      });
    }
  
  });
  