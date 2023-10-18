"use client";

import { Recipes } from "../../../components/Recipes/Recipes";
import "./../page.css";
import { SimpleSelect } from "../../../components/Select/Select";
import { cuisinesArray } from "../../../data/categoriesArray";
import { useState } from "react";
import { getRecipesByCategory } from "../../../utils/api";
import { Preloader } from "../../../components/Preloader/Preloader";
import { MessageBlock } from "../../../components/MessageBlock/MessageBlock";

export default function RecipesByCuisinePage() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  function handleSelect(cuisine: string) {
    setIsError(false);
    setIsLoading(true);
    getRecipesByCategory("cuisine", cuisine)
      .then((res) => {
        Array.isArray(res) ? setRecipes(res) : setIsError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <section className="recipes">
      <h1 className="recipes__title">Choose cuisine and we will find recipes</h1>
      <SimpleSelect placeholder="Choose cuisine" categoriesArray={cuisinesArray} onSelect={handleSelect} />
      {isLoading ?
        <Preloader/> :
        isError ?
          <MessageBlock text="We could not find recipes according to your request" /> :
          <Recipes recipes={recipes} />}
    </section>
  )
}
