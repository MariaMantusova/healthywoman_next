import { IPropsRecipeInfoItem } from "../../interfaces/interfacesForProps";
import "./RecipeInfoItem.css";

const RecipeInfoItem = (props: IPropsRecipeInfoItem) => {
  return(
    <li className="recipe__list-item">
      <h2 className="list-item__title">{props.infoTitle}</h2>
      <p className="list-item__text">{props.infoText}</p>
    </li>
  )
}

export {RecipeInfoItem}
