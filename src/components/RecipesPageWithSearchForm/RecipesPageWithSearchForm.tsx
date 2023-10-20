"use client";

import { useState } from "react";
import { getRecipesByCategory } from "../../utils/api";
import { SearchInput } from "../SearchInput/SearchInput";
import { IPropsRecipesPageWithSearchForm } from "../../interfaces/interfacesForProps";
import { RecipesPageBase } from "../RecipesPageBase/RecipesPageBase";

const RecipesPageWithSearchForm = (props: IPropsRecipesPageWithSearchForm) => {
  const [meaning, setMeaning] = useState<string | number>("");
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit() {
    setError("");
    setIsLoading(true);
    getRecipesByCategory(props.category, meaning)
      .then((res) => {
        Array.isArray(res) ? setRecipes(res) : setError(res.message)
      })
      .catch(() => {
        setError("We cannot get this route")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <RecipesPageBase titleName={props.titleName} isLoading={isLoading} error={error} recipes={recipes}>
      <SearchInput placeholder={props.placeholder} type={props.inputType}
                   setValue={setMeaning} value={meaning} onSubmit={handleSubmit} />
    </RecipesPageBase>
  );
}

export {RecipesPageWithSearchForm}
