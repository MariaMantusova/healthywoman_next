import Image from "next/dist/client/legacy/image";
import "./RecipeIngredient.css";
import { IPropsRecipeIngredient } from "../../interfaces/interfacesForProps";

const RecipeIngredient = (props: IPropsRecipeIngredient) => {
  return(
    <li className="recipe__ingredient">
      <h3 className="recipe__ingredient-name">{props.ingredient.nameOfIngredient}</h3>
      <p className="recipe__ingredient-weight">Weight: {Math.round(props.ingredient.ingredientWeight)} g.</p>
      <Image className="recipe__ingredient-image" width={230} height={230}
             src={props.ingredient.ingredientPhoto} alt={props.ingredient.nameOfIngredient} />
    </li>
  )
}

export {RecipeIngredient}
