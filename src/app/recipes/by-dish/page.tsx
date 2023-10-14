import { Recipes } from "../../../components/Recipes/Recipes";
import { recipes } from "../page";
import "./../page.css";
import { SimpleSelect } from "../../../components/Select/Select";
import { dishTypesArray } from "../../../data/categoriesArray";

export default function RecipesByDishPage() {
  return (
    <section className="recipes">
      <h1 className="recipes__title">Choose dish type and we will find recipes</h1>
      <SimpleSelect placeholder="Choose dish" categoriesArray={dishTypesArray} />
      <Recipes recipes={recipes}/>
    </section>
  )
}
