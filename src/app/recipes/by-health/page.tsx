import { Recipes } from "../../../components/Recipes/Recipes";
import { recipes } from "../page";
import "./../page.css";
import { SimpleSelect } from "../../../components/Select/Select";
import { healthLabelsArray } from "../../../data/categoriesArray";

export default function RecipesByHealthPage() {
  return (
    <section className="recipes">
      <h1 className="recipes__title">Choose health label and we will find recipes</h1>
      <SimpleSelect placeholder="Choose health label" categoriesArray={healthLabelsArray} />
      <Recipes recipes={recipes}/>
    </section>
  )
}
