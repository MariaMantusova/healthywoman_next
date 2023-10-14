import { Recipes } from "../../../components/Recipes/Recipes";
import { recipes } from "../page";
import "./../page.css";
import { SimpleSelect } from "../../../components/Select/Select";
import { dietsArray } from "../../../data/categoriesArray";

export default function RecipesByDietPage() {
  return (
    <section className="recipes">
      <h1 className="recipes__title">Choose diet and we will find recipes</h1>
      <SimpleSelect placeholder="Choose diet" categoriesArray={dietsArray} />
      <Recipes recipes={recipes}/>
    </section>
  )
}
