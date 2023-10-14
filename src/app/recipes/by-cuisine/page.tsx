import { Recipes } from "../../../components/Recipes/Recipes";
import { recipes } from "../page";
import "./../page.css";
import { SimpleSelect } from "../../../components/Select/Select";
import { cuisinesArray } from "../../../data/categoriesArray";

export default function RecipesByCuisinePage() {
  return (
    <section className="recipes">
      <h1 className="recipes__title">Choose cuisine and we will find recipes</h1>
      <SimpleSelect placeholder="Choose cuisine" categoriesArray={cuisinesArray} />
      <Recipes recipes={recipes}/>
    </section>
  )
}
