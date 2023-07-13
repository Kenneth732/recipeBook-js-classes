# BlackCoder12@gmail.com

```javascript
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
```
- This block of code defines a `Recipe` class using the `class` keyword.
- The `constructor` method is used to initialize a `Recipe` object with `title`, `ingredients`, and `instructions` parameters. These parameters are assigned to the corresponding properties of the object.
- The `displayDetails` method logs the details of a recipe (title, ingredients, and instructions) to the console.

```javascript
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

  deleteRecipe(index) {
    if (index >= 0 && index < this.recipes.length) {
      this.recipes.splice(index, 1);
      console.log("Recipe deleted successfully.");
    } else {
      console.log("Failed to delete recipe. Invalid index.");
    }
  }
}
```
- This block of code defines a `RecipeBook` class using the `class` keyword.
- The `constructor` method initializes a `RecipeBook` object with an empty `recipes` array property.
- The `addRecipe` method takes `title`, `ingredients`, and `instructions` as parameters, creates a new `Recipe` object using these parameters, and adds it to the `recipes` array.
- The `viewRecipes` method displays the recipes in the DOM by dynamically creating HTML elements for each recipe and appending them to the `recipesList` container. It also adds a delete button to each recipe element and attaches an event listener to delete the recipe when the button is clicked.
- The `deleteRecipe` method removes a recipe from the `recipes` array based on the provided index.
 
```javascript
const recipeBook = new RecipeBook();
```
- This line creates a new instance of the `RecipeBook` class and assigns it to the `recipeBook` variable.

```javascript
const addRecipeForm = document.querySelector('#add-recipe-form');
addRecipeForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const titleInput = document.querySelector('#title-input').value;
  const ingredientsInput = document.querySelector('#ingredients-input').value.split(',');
  const instructionsInput = document.querySelector('#instructions-input').value;

  recipeBook.addRecipe(title

Input, ingredientsInput, instructionsInput);
  addRecipeForm.reset();
  recipeBook.viewRecipes();
});
```
- These lines select the add recipe form element from the DOM using `querySelector` and assign it to the `addRecipeForm` variable.
- An event listener is added to the form's `submit` event. When the form is submitted, the callback function is executed.
- Inside the callback function, the input values for the title, ingredients, and instructions are retrieved from the DOM using `querySelector` and assigned to the respective variables.
- The `addRecipe` method of the `recipeBook` instance is called with the input values to add a new recipe.
- The form is reset to clear the input fields.
- The `viewRecipes` method of the `recipeBook` instance is called to update the displayed recipes on the page.



#coming up next project Setters and Getters: 
class Recipe {
  constructor(title, ingredients, instructions) {
    this._title = title;
    this._ingredients = ingredients;
    this._instructions = instructions;
  }

  get title() {
    return this._title;
  }

  set title(newTitle) {
    this._title = newTitle;
  }

  get ingredients() {
    return this._ingredients;
  }

  set ingredients(newIngredients) {
    this._ingredients = newIngredients;
  }

  get instructions() {
    return this._instructions;
  }

  set instructions(newInstructions) {
    this._instructions = newInstructions;
  }

  displayDetails() {
    console.log("Title: " + this.title);
    console.log("Ingredients: " + this.ingredients.join(", "));
    console.log("Instructions: " + this.instructions);
  }
}

class RecipeBook {
  constructor() {
    this._recipes = [];
  }

  get recipes() {
    return this._recipes;
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

  deleteRecipe(index) {
    if (index >= 0 && index < this.recipes.length) {
      this.recipes.splice(index, 1);
      console.log("Recipe deleted successfully.");
    } else {
      console.log("Failed to delete recipe. Invalid index.");
    }
  }
}

const recipeBook = new RecipeBook();

const addRecipeForm = document.querySelector('#add-recipe-form');
addRecipeForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const titleInput = document.querySelector('#title-input').value;
  const ingredientsInput = document.querySelector('#ingredients-input').value.split(',');
  const instructionsInput = document.querySelector('#instructions-input').value;

  recipeBook.addRecipe(titleInput, ingredientsInput, instructionsInput);
  recipeBook.viewRecipes();
});
