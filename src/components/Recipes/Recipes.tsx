import { IPropsRecipes } from "../../interfaces/interfacesForProps";
import { RecipesList } from "../RecipesList/RecipesList";
import "./Recipes.css";

const Recipes = (props: IPropsRecipes) => {
  return (
    <div className="recipes__container">
      <h1 className="recipes__found-text">We found such recipes according to your request:</h1>
      <RecipesList recipes={props.recipes} />
    </div>
  );
};

export {Recipes}
