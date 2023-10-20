export async function getRecipesByCategory(category: string, type: string | number) {
  const response = await fetch(`https://healthywoman-backend.onrender.com/recipes-by-${category}/${type}`);

  return response.json();
}

export async function getRecipeByID(id: string) {
  const response = await fetch(`https://healthywoman-backend.onrender.com/recipe-by-id/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  return response.json();
}
