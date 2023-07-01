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
  
  });
  