import { TRecipePage } from "../../../types/mainTypes";
import Image from "next/dist/client/legacy/image";
import { RecipeIngredient } from "../../../components/RecipeIngredient/RecipeIngredient";
import { RecipeInfoItem } from "../../../components/RecipeInfoItem/RecipeInfoItem";
import "./page.css";

interface IRecipeProps {
    params: {
        id: string
    }
}

export function generateMetadata({params: { id }}: IRecipeProps) {
    return {
        title: id,
    }
}

const recipe: TRecipePage = {
    recipeName: "Mixed Berry Ricotta Fool",
    recipeImage: "https://images.unsplash.com/photo-1476887334197-56adbf254e1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
    recipeSource: "http://www.sevenspoons.net/blog/2006/4/11/reality-bites.html",
    recipeCalories: 115,
    recipeCuisine: [
        "american"
    ],
    recipeMeal: [
        "lunch/dinner"
    ],
    recipeType: [
        "desserts"
    ],
    recipeDiets: [
        "Balanced",
        "Low-Sodium"
    ],
    recipeHealthy: [
        "Kidney-Friendly",
        "Vegetarian",
        "Pescatarian",
        "Gluten-Free",
        "Wheat-Free",
        "Egg-Free",
        "Peanut-Free",
        "Tree-Nut-Free",
        "Soy-Free",
        "Fish-Free",
        "Shellfish-Free",
        "Pork-Free",
        "Red-Meat-Free",
        "Crustacean-Free",
        "Celery-Free",
        "Mustard-Free",
        "Sesame-Free",
        "Lupine-Free",
        "Mollusk-Free",
        "Alcohol-Free",
        "No oil added",
        "Kosher"
    ],
    recipeIngredientsDetails: [
        {
            nameOfIngredient: "1/3 cup mixed berries",
            ingredientWeight: 49.33333333333333,
            ingredientPhoto: "https://www.edamam.com/food-img/f55/f55705a2a9ea9f7abf449a05fa968139.png"
        },
        {
            nameOfIngredient: "3 tbsp ricotta",
            ingredientWeight: 46.1249999992203,
            ingredientPhoto: "https://www.edamam.com/food-img/fc4/fc42636b63848462aea5f5930c2b6268.jpg"
        },
        {
            nameOfIngredient: "1/2 tsp Honey",
            ingredientWeight: 3.5312500001791087,
            ingredientPhoto: "https://www.edamam.com/food-img/198/198c7b25c23b4235b4cc33818c7b335f.jpg"
        },
        {
            nameOfIngredient: "1/8 tsp vanilla",
            ingredientWeight: 0.525,
            ingredientPhoto: "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
        },
        {
            nameOfIngredient: "A few grates of lemon zest (optional)",
            ingredientWeight: 12,
            ingredientPhoto: "https://www.edamam.com/food-img/540/5405605c8e9b284243f06c0b1587ab6f.jpg"
        }
    ]
}

export default function Recipe({params: { id }}: IRecipeProps) {
    return (
      <section className="recipe">
          <h1 className="recipe__name">{recipe.recipeName}</h1>
          <div className="recipe__container">
              <Image className="recipe__image" width={500} height={400} src={recipe.recipeImage}
                     alt={recipe.recipeName} />
              <ul className="recipe__list-info">
                  <RecipeInfoItem infoTitle="Calories:" infoText={recipe.recipeCalories}/>
                  <RecipeInfoItem infoTitle="Cuisine:" infoText={recipe.recipeCuisine}/>
                  <RecipeInfoItem infoTitle="Meal:" infoText={recipe.recipeMeal}/>
                  <RecipeInfoItem infoTitle="Dish type:" infoText={recipe.recipeType}/>
                  <RecipeInfoItem infoTitle="Recipe source:" infoText={recipe.recipeSource}/>
              </ul>
          </div>
          <div className="recipe__healthy-labels">
              <h2 className="recipe__title">Healthy labels</h2>
              <ul className="recipe__healthy-list">
                  {recipe.recipeHealthy.map((item, index) => (
                      <li className="recipe__healthy-item" key={index}>{item}</li>
                  ))}
              </ul>
          </div>
          <div className="recipe__ingredients">
              <h2 className="recipe__title">Ingredients</h2>
              <ul className="recipe__ingredients-list">
                  {recipe.recipeIngredientsDetails.map((ingredient) => (
                    <RecipeIngredient ingredient={ingredient}/>
                  ))}
              </ul>
          </div>
      </section>
    )
}
