import "./RecipeCard.css";
import Image from "next/dist/client/legacy/image";
import { IPropsRecipeCard } from "../../interfaces/interfacesForProps";

const RecipeCard = (props: IPropsRecipeCard) => {
  return (
    <li className="recipe-card">
      <div className="recipe-card__info">
        <Image className="recipe-card__image" width={200} height={200} src={props.recipe.recipeImage}
               alt={props.recipe.recipeName} />
        <div className="recipe-card__info-text">
          <h2 className="recipe-card__name">{props.recipe.recipeName}</h2>
          <p className="recipe-card__calories"> Calories: {props.recipe.recipeCalories}</p>
        </div>
      </div>
      <div className="recipe-card__list">
        <h2 className="recipe-card__title">Ingredients</h2>
        <ul className="recipe-card__ingredients">
          {props.recipe.recipeIngredients.map((ingredient, index) => (
            <li className="recipe-card__ingredient" key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export { RecipeCard };
