import { IRecipeProps } from "../../../interfaces/interfacesForProps";
import { getRecipeByID } from "../../../utils/api";
import { RecipePage } from "../../../components/RecipePage/RecipePage";

export async function generateMetadata({ params: { id } }: IRecipeProps) {
  const recipe = await getRecipeByID(id);

  return {
    title: recipe.recipeName
  };
}

export default async function Recipe({ params: { id } }: IRecipeProps) {
  const recipe = await getRecipeByID(id);

  return (
    <RecipePage recipe={recipe} />
  );
}
