import { RecipesPageWithSelect } from "../../../components/RecipesPageWithSelect/RecipesPageWithSelect";
import { dishTypesArray } from "../../../data/categoriesArray";

export default function RecipesByDishPage() {
  return (
    <RecipesPageWithSelect category="dish" titleName="dish type" categoriesArray={dishTypesArray}
                           placeholder="Choose dish type" />
  )
}
