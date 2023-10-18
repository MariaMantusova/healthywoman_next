import Image from "next/dist/client/legacy/image";
import { RecipeIngredient } from "../../../components/RecipeIngredient/RecipeIngredient";
import { RecipeInfoItem } from "../../../components/RecipeInfoItem/RecipeInfoItem";
import "./page.css";
import { IRecipeProps } from "../../../interfaces/interfacesForProps";
import { getRecipeByID } from "../../../utils/api";

export function generateMetadata({params: { id }}: IRecipeProps) {
    return {
        title: id,
    }
}

export default async function Recipe({params: { id }}: IRecipeProps) {
    const recipe = await getRecipeByID(id);

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
