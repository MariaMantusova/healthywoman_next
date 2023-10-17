export async function getRecipesByCategory(category: string, type: string | number) {
  const response = await fetch(`https://healthywoman-backend.onrender.com/recipes-by-${category}/${type}`);

  return response.json();
}
