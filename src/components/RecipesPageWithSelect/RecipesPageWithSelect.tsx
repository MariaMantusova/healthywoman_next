"use client"

import { useState } from "react";
import { RecipesPageBase } from "../RecipesPageBase/RecipesPageBase";
import { getRecipesByCategory } from "../../utils/api";
import { SimpleSelect } from "../Select/Select";
import { IPropsRecipesPageWithSelect } from "../../interfaces/interfacesForProps";
import { TRecipeInRecipes } from "../../types/mainTypes";

const RecipesPageWithSelect = (props: IPropsRecipesPageWithSelect) => {
  const [recipes, setRecipes] = useState<TRecipeInRecipes[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function handleSelect(type: string) {
    setError("");
    setIsLoading(true);
    getRecipesByCategory(props.category, type)
      .then((res) => {
        Array.isArray(res) ? setRecipes(res) : setError(res.message);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  return (
    <RecipesPageBase titleName={props.titleName} isLoading={isLoading} error={error} recipes={recipes}>
      <SimpleSelect placeholder={props.placeholder} categoriesArray={props.categoriesArray} onSelect={handleSelect} />
    </RecipesPageBase>
  );
}

export {RecipesPageWithSelect}
