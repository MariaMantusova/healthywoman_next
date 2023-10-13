import { TRecipeInRecipes } from "../../types/mainTypes";
import "./page.css";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { Recipes } from "../../components/Recipes/Recipes";

const recipes: TRecipeInRecipes[] = [
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
    {
        recipeName: "Ikura (Salmon Caviar)",
        recipeImage: "https://edamam-product-images.s3.amazonaws.com/web-img/e46/e465b384d5b6a1e575a9b4936dcd7cad.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLWVhc3QtMSJGMEQCIEOC7TLdHaZGXXVlmN3aQHnrzceVOuDXBVdEMu7TWbKvAiBoVi7xlzjhqWvxvfgOzdpzcrnkFWXcjOgPVKSU2IN7dyq5BQgzEAAaDDE4NzAxNzE1MDk4NiIMHvyKOpMwaJM02OMyKpYF8YCYRl4fmyXgtfK232Bc1O7L%2FlNYasTlbno0eOu3amLTFjB6Je02O%2BzcrrzrqI8hm2AXTL%2F5BoaK1HjnomVvgXiLwrd8kxta%2FsM3D3En%2BwAk4vQ4ikkX3l6YzXuZvaKEoYKADywA7CshgWc7ET9t8ggAiyXq6bbheXc1GhWEJPtnCByQO3pku6jGxGkIvYc32tYogjHJzDghDzA5%2FDs1L%2Fr44yqLo%2BxBAtjFUdkbhVZ1pNLXzEO%2BTBUSJDuthDq1KCVFBY3sVKUhVrpZzdCq4aRaqfCOu77LDWcPwFMHMMsh8rndzLmgeXYb7kUA2RFw4DsolLTV5Ocl%2BnomrLieJTbrxl4t3bkns%2BjG6UyMEysjpyD3Lr5wRjSUr2RuMuaC22VYZTGChRrgy%2Bk2MCqpRPX24JWCFe9duqjw%2BldrghwVevUjL8TRtheByCHQ%2BUGBpm95FrV%2BvkL4IZHX6vOXgyTWTz7JI65RUu1ATNFcEodqLfuvZeooXiaBfXYut3clemCR0BlWVuOGkt6sDsCfCk7kK6VtMjP7oSskJWEjf8r7agLTonHiCRqSszpfnL%2BwnGMwjp0dJz26GYBYSEER4Jhd%2FxNTPIuuFwAtFJrQ%2BOutChjKq1c9XWAIMk3UJ%2BxGyOxDCyQOKzH%2BuSrhhH1eqFXnN35ys%2BmYP4blBXk3pOmdFTxe8Uoe7xJ8LLlTHcz%2FTBdnVclLADxJPbSj%2FmJOc%2BSwTHRMi%2Bz1HhEsexYTOsgF2ndlRqGE1KCfIzRC70TgSXpc31R%2BVAEHr7KJxGrJi4bYr4XVyipJIZJjpHAiuXT8%2FZa5xSPsa3uN2tl%2FHeDxU4r%2BwccuHDw8NKZWharkqDfSN3488GnzvqLNsYKZm9jzLA%2BouY0wsI2mqQY6sgFFXcpGcljCqWbb0Pid0j2nQV4eq4ak8AYTyal1DNX7Q3uXA0P04VKyMgKbHD97NJP%2BSa475keXnD%2BHnBET%2BMjlQEHIuztr20WCYYV%2FS7ivbXl4WD6HQHzf89IamrCEhNdh%2Fogc%2FwuWdb23XzV27%2FDOjE8UH6f1ztubX1xBKyksto%2FXLCwWXwPbfeuNOvZttY%2FDebqbxJssdhLl0a6MQErf1GxZiPXH%2BXN9Ud5QdYmKPE7s&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231013T184405Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOQSUJJMB%2F20231013%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=dca5f0a0e29e7706773b8fbea4af9a5463cc863ea8b3bab0d80bb07d64f553aa",
        recipeIngredients: [
            "1 1/2 cups dashi",
            "2 tablespoons soy sauce",
            "1 tablespoon sake",
            "1 tablespoon sugar - granulated",
            "1 tablespoon salt",
            "2 large skeins salmon roe - fresh"
        ],
        recipeCalories: 790,
        recipeID: "5cfd32ab67396a6249f599b2f53e6b57"
    },
    {
        recipeName: "Cardamom Honey Caramel Pears recipes",
        recipeImage: "https://edamam-product-images.s3.amazonaws.com/web-img/fc9/fc96d8c3e44eaa3f240816d7d8bd0ba4.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLWVhc3QtMSJGMEQCIEOC7TLdHaZGXXVlmN3aQHnrzceVOuDXBVdEMu7TWbKvAiBoVi7xlzjhqWvxvfgOzdpzcrnkFWXcjOgPVKSU2IN7dyq5BQgzEAAaDDE4NzAxNzE1MDk4NiIMHvyKOpMwaJM02OMyKpYF8YCYRl4fmyXgtfK232Bc1O7L%2FlNYasTlbno0eOu3amLTFjB6Je02O%2BzcrrzrqI8hm2AXTL%2F5BoaK1HjnomVvgXiLwrd8kxta%2FsM3D3En%2BwAk4vQ4ikkX3l6YzXuZvaKEoYKADywA7CshgWc7ET9t8ggAiyXq6bbheXc1GhWEJPtnCByQO3pku6jGxGkIvYc32tYogjHJzDghDzA5%2FDs1L%2Fr44yqLo%2BxBAtjFUdkbhVZ1pNLXzEO%2BTBUSJDuthDq1KCVFBY3sVKUhVrpZzdCq4aRaqfCOu77LDWcPwFMHMMsh8rndzLmgeXYb7kUA2RFw4DsolLTV5Ocl%2BnomrLieJTbrxl4t3bkns%2BjG6UyMEysjpyD3Lr5wRjSUr2RuMuaC22VYZTGChRrgy%2Bk2MCqpRPX24JWCFe9duqjw%2BldrghwVevUjL8TRtheByCHQ%2BUGBpm95FrV%2BvkL4IZHX6vOXgyTWTz7JI65RUu1ATNFcEodqLfuvZeooXiaBfXYut3clemCR0BlWVuOGkt6sDsCfCk7kK6VtMjP7oSskJWEjf8r7agLTonHiCRqSszpfnL%2BwnGMwjp0dJz26GYBYSEER4Jhd%2FxNTPIuuFwAtFJrQ%2BOutChjKq1c9XWAIMk3UJ%2BxGyOxDCyQOKzH%2BuSrhhH1eqFXnN35ys%2BmYP4blBXk3pOmdFTxe8Uoe7xJ8LLlTHcz%2FTBdnVclLADxJPbSj%2FmJOc%2BSwTHRMi%2Bz1HhEsexYTOsgF2ndlRqGE1KCfIzRC70TgSXpc31R%2BVAEHr7KJxGrJi4bYr4XVyipJIZJjpHAiuXT8%2FZa5xSPsa3uN2tl%2FHeDxU4r%2BwccuHDw8NKZWharkqDfSN3488GnzvqLNsYKZm9jzLA%2BouY0wsI2mqQY6sgFFXcpGcljCqWbb0Pid0j2nQV4eq4ak8AYTyal1DNX7Q3uXA0P04VKyMgKbHD97NJP%2BSa475keXnD%2BHnBET%2BMjlQEHIuztr20WCYYV%2FS7ivbXl4WD6HQHzf89IamrCEhNdh%2Fogc%2FwuWdb23XzV27%2FDOjE8UH6f1ztubX1xBKyksto%2FXLCwWXwPbfeuNOvZttY%2FDebqbxJssdhLl0a6MQErf1GxZiPXH%2BXN9Ud5QdYmKPE7s&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231013T184405Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOQSUJJMB%2F20231013%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=65f08d142c8a04ff1f39361af23d811136cf728d832a11e6358df05b58bcb1e7",
        recipeIngredients: [
            "1 ½ cups heavy cream",
            "1 ½ cups + 1 tablespoon mild honey, such as clover",
            "¾ teaspoon salt, kosher",
            "3 cardamom pods, cracked and seeds ground or ¼ teaspoon ground cardamom",
            "3 cardamom pods, cracked and seeds ground or ¼ teaspoon ground cardamom",
            "1 cup toasted, roughly ground hazelnuts"
        ],
        recipeCalories: 3676,
        recipeID: "65245c71675619cbb69d95f6b4591457"
    },
    {
        recipeName: "Ribboned Asparagus Salad With Lemon",
        recipeImage: "https://edamam-product-images.s3.amazonaws.com/web-img/fc9/fc96d8c3e44eaa3f240816d7d8bd0ba4.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLWVhc3QtMSJGMEQCIEOC7TLdHaZGXXVlmN3aQHnrzceVOuDXBVdEMu7TWbKvAiBoVi7xlzjhqWvxvfgOzdpzcrnkFWXcjOgPVKSU2IN7dyq5BQgzEAAaDDE4NzAxNzE1MDk4NiIMHvyKOpMwaJM02OMyKpYF8YCYRl4fmyXgtfK232Bc1O7L%2FlNYasTlbno0eOu3amLTFjB6Je02O%2BzcrrzrqI8hm2AXTL%2F5BoaK1HjnomVvgXiLwrd8kxta%2FsM3D3En%2BwAk4vQ4ikkX3l6YzXuZvaKEoYKADywA7CshgWc7ET9t8ggAiyXq6bbheXc1GhWEJPtnCByQO3pku6jGxGkIvYc32tYogjHJzDghDzA5%2FDs1L%2Fr44yqLo%2BxBAtjFUdkbhVZ1pNLXzEO%2BTBUSJDuthDq1KCVFBY3sVKUhVrpZzdCq4aRaqfCOu77LDWcPwFMHMMsh8rndzLmgeXYb7kUA2RFw4DsolLTV5Ocl%2BnomrLieJTbrxl4t3bkns%2BjG6UyMEysjpyD3Lr5wRjSUr2RuMuaC22VYZTGChRrgy%2Bk2MCqpRPX24JWCFe9duqjw%2BldrghwVevUjL8TRtheByCHQ%2BUGBpm95FrV%2BvkL4IZHX6vOXgyTWTz7JI65RUu1ATNFcEodqLfuvZeooXiaBfXYut3clemCR0BlWVuOGkt6sDsCfCk7kK6VtMjP7oSskJWEjf8r7agLTonHiCRqSszpfnL%2BwnGMwjp0dJz26GYBYSEER4Jhd%2FxNTPIuuFwAtFJrQ%2BOutChjKq1c9XWAIMk3UJ%2BxGyOxDCyQOKzH%2BuSrhhH1eqFXnN35ys%2BmYP4blBXk3pOmdFTxe8Uoe7xJ8LLlTHcz%2FTBdnVclLADxJPbSj%2FmJOc%2BSwTHRMi%2Bz1HhEsexYTOsgF2ndlRqGE1KCfIzRC70TgSXpc31R%2BVAEHr7KJxGrJi4bYr4XVyipJIZJjpHAiuXT8%2FZa5xSPsa3uN2tl%2FHeDxU4r%2BwccuHDw8NKZWharkqDfSN3488GnzvqLNsYKZm9jzLA%2BouY0wsI2mqQY6sgFFXcpGcljCqWbb0Pid0j2nQV4eq4ak8AYTyal1DNX7Q3uXA0P04VKyMgKbHD97NJP%2BSa475keXnD%2BHnBET%2BMjlQEHIuztr20WCYYV%2FS7ivbXl4WD6HQHzf89IamrCEhNdh%2Fogc%2FwuWdb23XzV27%2FDOjE8UH6f1ztubX1xBKyksto%2FXLCwWXwPbfeuNOvZttY%2FDebqbxJssdhLl0a6MQErf1GxZiPXH%2BXN9Ud5QdYmKPE7s&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231013T184405Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOQSUJJMB%2F20231013%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=65f08d142c8a04ff1f39361af23d811136cf728d832a11e6358df05b58bcb1e7",
        recipeIngredients: [
            "1/4 cup pine nuts or sliced almonds, toasted* and cooled",
            "1 pound asparagus, rinsed",
            "1 lemon, halved",
            "Olive oil",
            "Coarse salt",
            "Freshly ground black pepper",
            "1 to 2 ounces Parmesan cheese"
        ],
        recipeCalories: 587,
        recipeID: "a175c37cd5839d1d987f5c731c22733e"
    },
    {
        recipeName: "Caramel-Glazed Cardamom Palmiers",
        recipeImage: "https://edamam-product-images.s3.amazonaws.com/web-img/fc9/fc96d8c3e44eaa3f240816d7d8bd0ba4.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLWVhc3QtMSJGMEQCIEOC7TLdHaZGXXVlmN3aQHnrzceVOuDXBVdEMu7TWbKvAiBoVi7xlzjhqWvxvfgOzdpzcrnkFWXcjOgPVKSU2IN7dyq5BQgzEAAaDDE4NzAxNzE1MDk4NiIMHvyKOpMwaJM02OMyKpYF8YCYRl4fmyXgtfK232Bc1O7L%2FlNYasTlbno0eOu3amLTFjB6Je02O%2BzcrrzrqI8hm2AXTL%2F5BoaK1HjnomVvgXiLwrd8kxta%2FsM3D3En%2BwAk4vQ4ikkX3l6YzXuZvaKEoYKADywA7CshgWc7ET9t8ggAiyXq6bbheXc1GhWEJPtnCByQO3pku6jGxGkIvYc32tYogjHJzDghDzA5%2FDs1L%2Fr44yqLo%2BxBAtjFUdkbhVZ1pNLXzEO%2BTBUSJDuthDq1KCVFBY3sVKUhVrpZzdCq4aRaqfCOu77LDWcPwFMHMMsh8rndzLmgeXYb7kUA2RFw4DsolLTV5Ocl%2BnomrLieJTbrxl4t3bkns%2BjG6UyMEysjpyD3Lr5wRjSUr2RuMuaC22VYZTGChRrgy%2Bk2MCqpRPX24JWCFe9duqjw%2BldrghwVevUjL8TRtheByCHQ%2BUGBpm95FrV%2BvkL4IZHX6vOXgyTWTz7JI65RUu1ATNFcEodqLfuvZeooXiaBfXYut3clemCR0BlWVuOGkt6sDsCfCk7kK6VtMjP7oSskJWEjf8r7agLTonHiCRqSszpfnL%2BwnGMwjp0dJz26GYBYSEER4Jhd%2FxNTPIuuFwAtFJrQ%2BOutChjKq1c9XWAIMk3UJ%2BxGyOxDCyQOKzH%2BuSrhhH1eqFXnN35ys%2BmYP4blBXk3pOmdFTxe8Uoe7xJ8LLlTHcz%2FTBdnVclLADxJPbSj%2FmJOc%2BSwTHRMi%2Bz1HhEsexYTOsgF2ndlRqGE1KCfIzRC70TgSXpc31R%2BVAEHr7KJxGrJi4bYr4XVyipJIZJjpHAiuXT8%2FZa5xSPsa3uN2tl%2FHeDxU4r%2BwccuHDw8NKZWharkqDfSN3488GnzvqLNsYKZm9jzLA%2BouY0wsI2mqQY6sgFFXcpGcljCqWbb0Pid0j2nQV4eq4ak8AYTyal1DNX7Q3uXA0P04VKyMgKbHD97NJP%2BSa475keXnD%2BHnBET%2BMjlQEHIuztr20WCYYV%2FS7ivbXl4WD6HQHzf89IamrCEhNdh%2Fogc%2FwuWdb23XzV27%2FDOjE8UH6f1ztubX1xBKyksto%2FXLCwWXwPbfeuNOvZttY%2FDebqbxJssdhLl0a6MQErf1GxZiPXH%2BXN9Ud5QdYmKPE7s&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231013T184405Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOQSUJJMB%2F20231013%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=65f08d142c8a04ff1f39361af23d811136cf728d832a11e6358df05b58bcb1e7",
        recipeIngredients: [
            "2 1/2 cup all-purpose flour",
            "2 tbsp granulated sugar",
            "1/4 tsp fine salt",
            "8 oz cold unsalted butter",
            "8 oz cold cream cheese",
            "1 cup granulated sugar",
            "1 tsp ground cardamom",
            "2 x large pinches fine salt"
        ],
        recipeCalories: 4434,
        recipeID: "e33fdf7211b802a21cb086948ac97f38"
    },
    {
        recipeName: "Ultimate Veggie Burger recipes",
        recipeImage: "https://edamam-product-images.s3.amazonaws.com/web-img/fc9/fc96d8c3e44eaa3f240816d7d8bd0ba4.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLWVhc3QtMSJGMEQCIEOC7TLdHaZGXXVlmN3aQHnrzceVOuDXBVdEMu7TWbKvAiBoVi7xlzjhqWvxvfgOzdpzcrnkFWXcjOgPVKSU2IN7dyq5BQgzEAAaDDE4NzAxNzE1MDk4NiIMHvyKOpMwaJM02OMyKpYF8YCYRl4fmyXgtfK232Bc1O7L%2FlNYasTlbno0eOu3amLTFjB6Je02O%2BzcrrzrqI8hm2AXTL%2F5BoaK1HjnomVvgXiLwrd8kxta%2FsM3D3En%2BwAk4vQ4ikkX3l6YzXuZvaKEoYKADywA7CshgWc7ET9t8ggAiyXq6bbheXc1GhWEJPtnCByQO3pku6jGxGkIvYc32tYogjHJzDghDzA5%2FDs1L%2Fr44yqLo%2BxBAtjFUdkbhVZ1pNLXzEO%2BTBUSJDuthDq1KCVFBY3sVKUhVrpZzdCq4aRaqfCOu77LDWcPwFMHMMsh8rndzLmgeXYb7kUA2RFw4DsolLTV5Ocl%2BnomrLieJTbrxl4t3bkns%2BjG6UyMEysjpyD3Lr5wRjSUr2RuMuaC22VYZTGChRrgy%2Bk2MCqpRPX24JWCFe9duqjw%2BldrghwVevUjL8TRtheByCHQ%2BUGBpm95FrV%2BvkL4IZHX6vOXgyTWTz7JI65RUu1ATNFcEodqLfuvZeooXiaBfXYut3clemCR0BlWVuOGkt6sDsCfCk7kK6VtMjP7oSskJWEjf8r7agLTonHiCRqSszpfnL%2BwnGMwjp0dJz26GYBYSEER4Jhd%2FxNTPIuuFwAtFJrQ%2BOutChjKq1c9XWAIMk3UJ%2BxGyOxDCyQOKzH%2BuSrhhH1eqFXnN35ys%2BmYP4blBXk3pOmdFTxe8Uoe7xJ8LLlTHcz%2FTBdnVclLADxJPbSj%2FmJOc%2BSwTHRMi%2Bz1HhEsexYTOsgF2ndlRqGE1KCfIzRC70TgSXpc31R%2BVAEHr7KJxGrJi4bYr4XVyipJIZJjpHAiuXT8%2FZa5xSPsa3uN2tl%2FHeDxU4r%2BwccuHDw8NKZWharkqDfSN3488GnzvqLNsYKZm9jzLA%2BouY0wsI2mqQY6sgFFXcpGcljCqWbb0Pid0j2nQV4eq4ak8AYTyal1DNX7Q3uXA0P04VKyMgKbHD97NJP%2BSa475keXnD%2BHnBET%2BMjlQEHIuztr20WCYYV%2FS7ivbXl4WD6HQHzf89IamrCEhNdh%2Fogc%2FwuWdb23XzV27%2FDOjE8UH6f1ztubX1xBKyksto%2FXLCwWXwPbfeuNOvZttY%2FDebqbxJssdhLl0a6MQErf1GxZiPXH%2BXN9Ud5QdYmKPE7s&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231013T184405Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOQSUJJMB%2F20231013%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=65f08d142c8a04ff1f39361af23d811136cf728d832a11e6358df05b58bcb1e7",
        recipeIngredients: [
            "2 1/2 cups sprouted garbanzo beans (chickpeas) OR canned garbanzos, drained and rinsed",
            "4 large eggs",
            "1/2 teaspoon fine-grain sea salt",
            "1/3 cup chopped fresh cilantro",
            "1 onion, chopped",
            "Grated zest of one large lemon",
            "1 cup micro sprouts, chopped (try brocolli, onion, or alfalfa sprouts - optional)",
            "1 cup toasted (whole-grain) bread crumbs",
            "1 tablespoon extra-virgin olive oil (or clarified butter)"
        ],
        recipeCalories: 2399,
        recipeID: "4442d46778d89c3b9adf19580b3fd317"
    },
    {
        recipeName: "Croissant Breakfast Sandwich",
        recipeImage: "https://edamam-product-images.s3.amazonaws.com/web-img/fc9/fc96d8c3e44eaa3f240816d7d8bd0ba4.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLWVhc3QtMSJGMEQCIEOC7TLdHaZGXXVlmN3aQHnrzceVOuDXBVdEMu7TWbKvAiBoVi7xlzjhqWvxvfgOzdpzcrnkFWXcjOgPVKSU2IN7dyq5BQgzEAAaDDE4NzAxNzE1MDk4NiIMHvyKOpMwaJM02OMyKpYF8YCYRl4fmyXgtfK232Bc1O7L%2FlNYasTlbno0eOu3amLTFjB6Je02O%2BzcrrzrqI8hm2AXTL%2F5BoaK1HjnomVvgXiLwrd8kxta%2FsM3D3En%2BwAk4vQ4ikkX3l6YzXuZvaKEoYKADywA7CshgWc7ET9t8ggAiyXq6bbheXc1GhWEJPtnCByQO3pku6jGxGkIvYc32tYogjHJzDghDzA5%2FDs1L%2Fr44yqLo%2BxBAtjFUdkbhVZ1pNLXzEO%2BTBUSJDuthDq1KCVFBY3sVKUhVrpZzdCq4aRaqfCOu77LDWcPwFMHMMsh8rndzLmgeXYb7kUA2RFw4DsolLTV5Ocl%2BnomrLieJTbrxl4t3bkns%2BjG6UyMEysjpyD3Lr5wRjSUr2RuMuaC22VYZTGChRrgy%2Bk2MCqpRPX24JWCFe9duqjw%2BldrghwVevUjL8TRtheByCHQ%2BUGBpm95FrV%2BvkL4IZHX6vOXgyTWTz7JI65RUu1ATNFcEodqLfuvZeooXiaBfXYut3clemCR0BlWVuOGkt6sDsCfCk7kK6VtMjP7oSskJWEjf8r7agLTonHiCRqSszpfnL%2BwnGMwjp0dJz26GYBYSEER4Jhd%2FxNTPIuuFwAtFJrQ%2BOutChjKq1c9XWAIMk3UJ%2BxGyOxDCyQOKzH%2BuSrhhH1eqFXnN35ys%2BmYP4blBXk3pOmdFTxe8Uoe7xJ8LLlTHcz%2FTBdnVclLADxJPbSj%2FmJOc%2BSwTHRMi%2Bz1HhEsexYTOsgF2ndlRqGE1KCfIzRC70TgSXpc31R%2BVAEHr7KJxGrJi4bYr4XVyipJIZJjpHAiuXT8%2FZa5xSPsa3uN2tl%2FHeDxU4r%2BwccuHDw8NKZWharkqDfSN3488GnzvqLNsYKZm9jzLA%2BouY0wsI2mqQY6sgFFXcpGcljCqWbb0Pid0j2nQV4eq4ak8AYTyal1DNX7Q3uXA0P04VKyMgKbHD97NJP%2BSa475keXnD%2BHnBET%2BMjlQEHIuztr20WCYYV%2FS7ivbXl4WD6HQHzf89IamrCEhNdh%2Fogc%2FwuWdb23XzV27%2FDOjE8UH6f1ztubX1xBKyksto%2FXLCwWXwPbfeuNOvZttY%2FDebqbxJssdhLl0a6MQErf1GxZiPXH%2BXN9Ud5QdYmKPE7s&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231013T184405Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOQSUJJMB%2F20231013%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=65f08d142c8a04ff1f39361af23d811136cf728d832a11e6358df05b58bcb1e7",
        recipeIngredients: [
            "2 croissants",
            "2 eggs",
            "2 oz smoked salmon",
            "1 Persian cucumber sliced"
        ],
        recipeCalories: 430,
        recipeID: "7e6db2113729e5ab0f826958ce2ef057"
    },
    {
        recipeName: "Smoked Fish, Eggs, and Onions Recipe",
        recipeImage: "https://edamam-product-images.s3.amazonaws.com/web-img/fc9/fc96d8c3e44eaa3f240816d7d8bd0ba4.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLWVhc3QtMSJGMEQCIEOC7TLdHaZGXXVlmN3aQHnrzceVOuDXBVdEMu7TWbKvAiBoVi7xlzjhqWvxvfgOzdpzcrnkFWXcjOgPVKSU2IN7dyq5BQgzEAAaDDE4NzAxNzE1MDk4NiIMHvyKOpMwaJM02OMyKpYF8YCYRl4fmyXgtfK232Bc1O7L%2FlNYasTlbno0eOu3amLTFjB6Je02O%2BzcrrzrqI8hm2AXTL%2F5BoaK1HjnomVvgXiLwrd8kxta%2FsM3D3En%2BwAk4vQ4ikkX3l6YzXuZvaKEoYKADywA7CshgWc7ET9t8ggAiyXq6bbheXc1GhWEJPtnCByQO3pku6jGxGkIvYc32tYogjHJzDghDzA5%2FDs1L%2Fr44yqLo%2BxBAtjFUdkbhVZ1pNLXzEO%2BTBUSJDuthDq1KCVFBY3sVKUhVrpZzdCq4aRaqfCOu77LDWcPwFMHMMsh8rndzLmgeXYb7kUA2RFw4DsolLTV5Ocl%2BnomrLieJTbrxl4t3bkns%2BjG6UyMEysjpyD3Lr5wRjSUr2RuMuaC22VYZTGChRrgy%2Bk2MCqpRPX24JWCFe9duqjw%2BldrghwVevUjL8TRtheByCHQ%2BUGBpm95FrV%2BvkL4IZHX6vOXgyTWTz7JI65RUu1ATNFcEodqLfuvZeooXiaBfXYut3clemCR0BlWVuOGkt6sDsCfCk7kK6VtMjP7oSskJWEjf8r7agLTonHiCRqSszpfnL%2BwnGMwjp0dJz26GYBYSEER4Jhd%2FxNTPIuuFwAtFJrQ%2BOutChjKq1c9XWAIMk3UJ%2BxGyOxDCyQOKzH%2BuSrhhH1eqFXnN35ys%2BmYP4blBXk3pOmdFTxe8Uoe7xJ8LLlTHcz%2FTBdnVclLADxJPbSj%2FmJOc%2BSwTHRMi%2Bz1HhEsexYTOsgF2ndlRqGE1KCfIzRC70TgSXpc31R%2BVAEHr7KJxGrJi4bYr4XVyipJIZJjpHAiuXT8%2FZa5xSPsa3uN2tl%2FHeDxU4r%2BwccuHDw8NKZWharkqDfSN3488GnzvqLNsYKZm9jzLA%2BouY0wsI2mqQY6sgFFXcpGcljCqWbb0Pid0j2nQV4eq4ak8AYTyal1DNX7Q3uXA0P04VKyMgKbHD97NJP%2BSa475keXnD%2BHnBET%2BMjlQEHIuztr20WCYYV%2FS7ivbXl4WD6HQHzf89IamrCEhNdh%2Fogc%2FwuWdb23XzV27%2FDOjE8UH6f1ztubX1xBKyksto%2FXLCwWXwPbfeuNOvZttY%2FDebqbxJssdhLl0a6MQErf1GxZiPXH%2BXN9Ud5QdYmKPE7s&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231013T184405Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOQSUJJMB%2F20231013%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=65f08d142c8a04ff1f39361af23d811136cf728d832a11e6358df05b58bcb1e7",
        recipeIngredients: [
            "3 Spanish onions, sliced in rounds",
            "3 tablespoons vegetable oil",
            "8 large eggs",
            "1/2 cup smoked salmon (or your choice of smoked fish (sturgeon, whitefish, trout)"
        ],
        recipeCalories: 1173,
        recipeID: "990cc33c3ab0206ab938d231c6789a73"
    },
]

export default function RecipesPage() {
    return (
      <section className="recipes">
          <h1 className="recipes__title">Enter keyword and we will find recipes</h1>
          <SearchInput placeholder="Chicken" type="text" />
          <Recipes recipes={recipes}/>
      </section>
    )
}
