"use client";

import { TRecipeInRecipes } from "../../types/mainTypes";
import { useState } from "react";
import "./page.css";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { Recipes } from "../../components/Recipes/Recipes";
import { getRecipesByCategory } from "../../utils/api";
import { Preloader } from "../../components/Preloader/Preloader";
import {MessageBlock} from "../../components/MessageBlock/MessageBlock";

export const recipes: TRecipeInRecipes[] = [
    {
        recipeName: "Japanese-Style Salted Salmon (Shiozake) Recipe",
        recipeImage: "https://edamam-product-images.s3.amazonaws.com/web-img/fc9/fc96d8c3e44eaa3f240816d7d8bd0ba4.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLWVhc3QtMSJGMEQCIEOC7TLdHaZGXXVlmN3aQHnrzceVOuDXBVdEMu7TWbKvAiBoVi7xlzjhqWvxvfgOzdpzcrnkFWXcjOgPVKSU2IN7dyq5BQgzEAAaDDE4NzAxNzE1MDk4NiIMHvyKOpMwaJM02OMyKpYF8YCYRl4fmyXgtfK232Bc1O7L%2FlNYasTlbno0eOu3amLTFjB6Je02O%2BzcrrzrqI8hm2AXTL%2F5BoaK1HjnomVvgXiLwrd8kxta%2FsM3D3En%2BwAk4vQ4ikkX3l6YzXuZvaKEoYKADywA7CshgWc7ET9t8ggAiyXq6bbheXc1GhWEJPtnCByQO3pku6jGxGkIvYc32tYogjHJzDghDzA5%2FDs1L%2Fr44yqLo%2BxBAtjFUdkbhVZ1pNLXzEO%2BTBUSJDuthDq1KCVFBY3sVKUhVrpZzdCq4aRaqfCOu77LDWcPwFMHMMsh8rndzLmgeXYb7kUA2RFw4DsolLTV5Ocl%2BnomrLieJTbrxl4t3bkns%2BjG6UyMEysjpyD3Lr5wRjSUr2RuMuaC22VYZTGChRrgy%2Bk2MCqpRPX24JWCFe9duqjw%2BldrghwVevUjL8TRtheByCHQ%2BUGBpm95FrV%2BvkL4IZHX6vOXgyTWTz7JI65RUu1ATNFcEodqLfuvZeooXiaBfXYut3clemCR0BlWVuOGkt6sDsCfCk7kK6VtMjP7oSskJWEjf8r7agLTonHiCRqSszpfnL%2BwnGMwjp0dJz26GYBYSEER4Jhd%2FxNTPIuuFwAtFJrQ%2BOutChjKq1c9XWAIMk3UJ%2BxGyOxDCyQOKzH%2BuSrhhH1eqFXnN35ys%2BmYP4blBXk3pOmdFTxe8Uoe7xJ8LLlTHcz%2FTBdnVclLADxJPbSj%2FmJOc%2BSwTHRMi%2Bz1HhEsexYTOsgF2ndlRqGE1KCfIzRC70TgSXpc31R%2BVAEHr7KJxGrJi4bYr4XVyipJIZJjpHAiuXT8%2FZa5xSPsa3uN2tl%2FHeDxU4r%2BwccuHDw8NKZWharkqDfSN3488GnzvqLNsYKZm9jzLA%2BouY0wsI2mqQY6sgFFXcpGcljCqWbb0Pid0j2nQV4eq4ak8AYTyal1DNX7Q3uXA0P04VKyMgKbHD97NJP%2BSa475keXnD%2BHnBET%2BMjlQEHIuztr20WCYYV%2FS7ivbXl4WD6HQHzf89IamrCEhNdh%2Fogc%2FwuWdb23XzV27%2FDOjE8UH6f1ztubX1xBKyksto%2FXLCwWXwPbfeuNOvZttY%2FDebqbxJssdhLl0a6MQErf1GxZiPXH%2BXN9Ud5QdYmKPE7s&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231013T184405Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOQSUJJMB%2F20231013%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=65f08d142c8a04ff1f39361af23d811136cf728d832a11e6358df05b58bcb1e7",
      recipeIngredients: [
        "1 tablespoon (15ml) sake, optional; see note",
        "Two 4-ounce skin-on fillets of salmon, preferably cut from the belly",
        "2 teaspoons Diamond Crystal kosher salt (about 1/4 ounce; 7g); see note"
      ],
      recipeCalories: 1667,
      recipeID: "75ac1d28413333d800b4e775952ab8b8"
    },
]

export default function RecipesPage() {
  const [keyword, setKeyword] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  function handleSubmit() {
    setIsError(false);
    setIsLoading(true);
    getRecipesByCategory("word", keyword)
      .then((res) => {
        Array.isArray(res) ? setRecipes(res) : setIsError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <section className="recipes">
      <h1 className="recipes__title">Enter keyword and we will find recipes</h1>
      <SearchInput placeholder="Chicken" type="text" setValue={setKeyword} value={keyword} onSubmit={handleSubmit} />
      {isLoading ?
        <Preloader/> :
        isError ?
         <MessageBlock text="We could not find recipes according to your request" /> :
          <Recipes recipes={recipes} />}
    </section>
  );
}
