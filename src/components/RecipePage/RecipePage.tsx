import "./RecipePage.css";
import Image from "next/dist/client/legacy/image";
import { RecipeInfoItem } from "../RecipeInfoItem/RecipeInfoItem";
import { RecipeIngredient } from "../RecipeIngredient/RecipeIngredient";
import { IPropsRecipePage } from "../../interfaces/interfacesForProps";

const RecipePage = (props: IPropsRecipePage) => {
  return (
    <section className="recipe">
      <h1 className="recipe__name">{props.recipe.recipeName}</h1>
      <div className="recipe__container">
        <Image className="recipe__image" width={310} height={310} src={props.recipe.recipeImage}
               alt={props.recipe.recipeName} />
        <ul className="recipe__list-info">
          <RecipeInfoItem infoTitle="Calories:" infoText={props.recipe.recipeCalories} />
          <RecipeInfoItem infoTitle="Cuisine:" infoText={props.recipe.recipeCuisine} />
          <RecipeInfoItem infoTitle="Meal:" infoText={props.recipe.recipeMeal} />
          <RecipeInfoItem infoTitle="Dish&#160;type:" infoText={props.recipe.recipeType} />
          <li className="recipe__list-item">
            <h2 className="list-item__title">Recipe&#160;source:</h2>
            <a href={props.recipe.recipeSource} className="list-item__link" target="_blank">Go to source &#10230;</a>
          </li>
        </ul>
      </div>
      <div className="recipe__healthy-labels">
        <h2 className="recipe__title">Healthy labels</h2>
        <ul className="recipe__healthy-list">
          {props.recipe.recipeHealthy.map((item, index) => (
            <li className="recipe__healthy-item" key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="recipe__ingredients">
        <h2 className="recipe__title">Ingredients</h2>
        <ul className="recipe__ingredients-list">
          {props.recipe.recipeIngredientsDetails.map((ingredient, index) => (
            <RecipeIngredient ingredient={ingredient} key={index}/>
          ))}
        </ul>
      </div>
    </section>
  )
}

export {RecipePage}
