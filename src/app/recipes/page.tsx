"use client";

import { useState } from "react";
import "./page.css";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { Recipes } from "../../components/Recipes/Recipes";
import { getRecipesByCategory } from "../../utils/api";
import { Preloader } from "../../components/Preloader/Preloader";
import {MessageBlock} from "../../components/MessageBlock/MessageBlock";

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
        <Preloader /> :
        isError ?
          <MessageBlock text="We could not find recipes according to your request"
                        class="message-block__text_error" /> :
          recipes.length < 1 ?
            <MessageBlock text="Let's start" class="message-block__text_info" /> :
            <Recipes recipes={recipes} />}
    </section>
  );
}
