import { RecipesPageWithSearchForm } from "../../../components/RecipesPageWithSearchForm/RecipesPageWithSearchForm";

export default function RecipesByCaloriesPage() {
  return (
    <RecipesPageWithSearchForm category="calories" inputType="number" placeholder="457" titleName="calories"/>
  );
}
