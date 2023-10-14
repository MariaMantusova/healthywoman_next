import "./../page.css";
import { SearchInput } from "../../../components/SearchInput/SearchInput";
import { Recipes } from "../../../components/Recipes/Recipes";
import { recipes } from "../page";

export default function RecipesByCaloriesPage() {
    return (
      <section className="recipes">
          <h1 className="recipes__title">Enter calories count and we will find recipes</h1>
          <SearchInput placeholder="200" type="number" />
          <Recipes recipes={recipes}/>
      </section>
    )
}
