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
      this.recipes.forEach((recipe, index) => {
        console.log("Recipe: " + (index + 1));
        recipe.displayDetails();
        console.log("-------------------");
      });
    }
  

  }

  
// data

const myRecipeBook = new RecipeBook();

myRecipeBook.addRecipe(
  "Chocolate Chip Cookies",
  ["Flour", "Sugar", "Butter", "Chocolate Chips"],
  "1. Preheat oven to 350°F. 2. Mix all ingredients together. 3. Bake for 10-12 minutes."
);

myRecipeBook.addRecipe(
  "Spaghetti Bolognese",
  ["Ground beef", "Tomatoes", "Onion", "Garlic", "Spaghetti"],
  "1. Cook spaghetti according to package instructions. 2. Brown ground beef, onion, and garlic in a pan. 3. Add tomatoes and simmer for 20 minutes. 4. Serve sauce over spaghetti."
);

myRecipeBook.viewRecipes();
// Output:
// Recipe: 1
// Title: Chocolate Chip Cookies
// Ingredients: Flour, Sugar, Butter, Chocolate Chips
// Instructions: 1. Preheat oven to 350°F. 2. Mix all ingredients together. 3. Bake for 10-12 minutes.
// -------------------
// Recipe: 2
// Title: Spaghetti Bolognese
// Ingredients: Ground beef, Tomatoes, Onion, Garlic, Spaghetti
// Instructions: 1. Cook spaghetti according to package instructions. 2. Brown ground beef, onion, and garlic in a pan. 3. Add tomatoes and simmer for 20 minutes. 4. Serve sauce over spaghetti.

myRecipeBook.deleteRecipe(1); // Delete the second recipe

myRecipeBook.viewRecipes();
// Output:
// Recipe: 1
// Title: Chocolate Chip Cookies
// Ingredients: Flour, Sugar, Butter, Chocolate Chips
// Instructions: 1. Preheat oven to 350°F. 2. Mix all ingredients together. 3. Bake for 10-12 minutes.
