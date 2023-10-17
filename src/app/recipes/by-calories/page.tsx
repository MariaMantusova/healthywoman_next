"use client";

import {useState} from "react";
import "./../page.css";
import { SearchInput } from "../../../components/SearchInput/SearchInput";
import { Recipes } from "../../../components/Recipes/Recipes";
import { Preloader } from "../../../components/Preloader/Preloader";
import { MessageBlock } from "../../../components/MessageBlock/MessageBlock";
import { getRecipesByCategory } from "../../../utils/api";

export default function RecipesByCaloriesPage() {
  const [calories, setCalories] = useState(345);
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  function handleSubmit() {
    setIsError(false);
    setIsLoading(true);
    getRecipesByCategory("calories", calories)
      .then((res) => {
        Array.isArray(res) ? setRecipes(res) : setIsError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

    return (
      <section className="recipes">
          <h1 className="recipes__title">Enter calories count and we will find recipes</h1>
          <SearchInput placeholder="200" type="number" setValue={setCalories} value={calories} onSubmit={handleSubmit} />
        {isLoading ?
          <Preloader/> :
          isError ?
            <MessageBlock text="We could not find recipes according to your request" /> :
            <Recipes recipes={recipes} />}
      </section>
    )
}
