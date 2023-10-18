"use client";

import { Recipes } from "../../../components/Recipes/Recipes";
import "./../page.css";
import { SimpleSelect } from "../../../components/Select/Select";
import { dietsArray } from "../../../data/categoriesArray";
import { useState } from "react";
import { getRecipesByCategory } from "../../../utils/api";
import { Preloader } from "../../../components/Preloader/Preloader";
import { MessageBlock } from "../../../components/MessageBlock/MessageBlock";

export default function RecipesByDietPage() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  function handleSelect(diet: string) {
    setIsError(false);
    setIsLoading(true);
    getRecipesByCategory("diet", diet)
      .then((res) => {
        Array.isArray(res) ? setRecipes(res) : setIsError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <section className="recipes">
      <h1 className="recipes__title">Choose diet and we will find recipes</h1>
      <SimpleSelect placeholder="Choose diet" categoriesArray={dietsArray} onSelect={handleSelect} />
      {isLoading ?
        <Preloader/> :
        isError ?
          <MessageBlock text="We could not find recipes according to your request" /> :
          <Recipes recipes={recipes} />}
    </section>
  )
}
