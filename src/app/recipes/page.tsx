import { RecipesPageWithSearchForm } from "../../components/RecipesPageWithSearchForm/RecipesPageWithSearchForm";

export default function RecipesPage() {
  return (
    <RecipesPageWithSearchForm category="word" inputType="text" placeholder="Chicken" titleName="keyword"/>
  );
}
