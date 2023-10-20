import { RecipesPageWithSelect } from "../../../components/RecipesPageWithSelect/RecipesPageWithSelect";
import { healthLabelsArray } from "../../../data/categoriesArray";

export default function RecipesByHealthPage() {
  return (
   <RecipesPageWithSelect category="health" titleName="health labels" categoriesArray={healthLabelsArray}
                          placeholder="Choose health labels" />
  )
}
