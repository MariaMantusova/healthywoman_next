import { Recipes } from "../../../components/Recipes/Recipes";
import { recipes } from "../page";
import "./../page.css";
import { SimpleSelect } from "../../../components/Select/Select";
import { mealTypesArray } from "../../../data/categoriesArray";

export default function RecipesByMealPage() {
  return (
    <section className="recipes">
      <h1 className="recipes__title">Choose meal type and we will find recipes</h1>
      <SimpleSelect placeholder="Choose meal" categoriesArray={mealTypesArray} />
      <Recipes recipes={recipes}/>
    </section>
  )
}
