"use client";

import { Recipes } from "../../../components/Recipes/Recipes";
import "./../page.css";
import { SimpleSelect } from "../../../components/Select/Select";
import { dishTypesArray } from "../../../data/categoriesArray";
import { Preloader } from "../../../components/Preloader/Preloader";
import { MessageBlock } from "../../../components/MessageBlock/MessageBlock";
import { useState } from "react";
import { getRecipesByCategory } from "../../../utils/api";

export default function RecipesByDishPage() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  function handleSelect(dish: string) {
    setIsError(false);
    setIsLoading(true);
    getRecipesByCategory("dish", dish)
      .then((res) => {
        Array.isArray(res) ? setRecipes(res) : setIsError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <section className="recipes">
      <h1 className="recipes__title">Choose dish type and we will find recipes</h1>
      <SimpleSelect placeholder="Choose dish" categoriesArray={dishTypesArray} onSelect={handleSelect}/>
      {isLoading ?
        <Preloader/> :
        isError ?
          <MessageBlock text="We could not find recipes according to your request" /> :
          <Recipes recipes={recipes} />}
    </section>
  )
}
