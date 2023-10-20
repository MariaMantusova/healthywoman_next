import { IRecipeProps } from "../../../interfaces/interfacesForProps";
import { getRecipeByID } from "../../../utils/api";
import { RecipePage } from "../../../components/RecipePage/RecipePage";

export function generateMetadata({ params: { id } }: IRecipeProps) {
  return {
    title: id
  };
}

export default async function Recipe({ params: { id } }: IRecipeProps) {
  const recipe = await getRecipeByID(id);

  return (
    <RecipePage recipe={recipe} />
  );
}
