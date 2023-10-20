import { cuisinesArray } from "../../../data/categoriesArray";
import { RecipesPageWithSelect } from "../../../components/RecipesPageWithSelect/RecipesPageWithSelect";

export default function RecipesByCuisinePage() {
  return (
    <RecipesPageWithSelect category="cuisine" titleName="cuisine" categoriesArray={cuisinesArray}
                           placeholder="Choose cuisine" />
  );
}
