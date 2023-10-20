import { RecipesPageWithSelect } from "../../../components/RecipesPageWithSelect/RecipesPageWithSelect";
import { dietsArray } from "../../../data/categoriesArray";

export default function RecipesByDietPage() {
  return (
    <RecipesPageWithSelect category="diet" titleName="diet" categoriesArray={dietsArray} placeholder="Choose diet"/>
  )
}
