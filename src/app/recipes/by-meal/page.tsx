"use client";

import {useState} from "react";
import { Recipes } from "../../../components/Recipes/Recipes";
import "./../page.css";
import { SimpleSelect } from "../../../components/Select/Select";
import { mealTypesArray } from "../../../data/categoriesArray";
import { Preloader } from "../../../components/Preloader/Preloader";
import { MessageBlock } from "../../../components/MessageBlock/MessageBlock";
import { getRecipesByCategory } from "../../../utils/api";

export default function RecipesByMealPage() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  function handleSelect(mealType: string) {
    setIsError(false);
    setIsLoading(true);
    getRecipesByCategory("meal", mealType)
      .then((res) => {
        Array.isArray(res) ? setRecipes(res) : setIsError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <section className="recipes">
      <h1 className="recipes__title">Choose meal type and we will find recipes</h1>
      <SimpleSelect placeholder="Choose meal" categoriesArray={mealTypesArray}
                    onSelect={handleSelect} />
      {isLoading ?
        <Preloader/> :
        isError ?
          <MessageBlock text="We could not find recipes according to your request" /> :
          <Recipes recipes={recipes} />}
    </section>
  )
}
