import { RecipesPageWithSelect } from "../../../components/RecipesPageWithSelect/RecipesPageWithSelect";
import { mealTypesArray } from "../../../data/categoriesArray";

export default function RecipesByMealPage() {
  return (
    <RecipesPageWithSelect category="meal" titleName="meal type" categoriesArray={mealTypesArray}
                           placeholder="Choose meal type"/>
  );
}
