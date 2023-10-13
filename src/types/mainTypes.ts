export type TRecipePage = {
  recipeName: string
  recipeImage: string
  recipeSource: string
  recipeCalories: number
  recipeCuisine: string[]
  recipeMeal: string[]
  recipeType: string[]
  recipeDiets: string[]
  recipeHealthy: string[]
  recipeIngredientsDetails: {
    nameOfIngredient: string
    ingredientWeight: number
    ingredientPhoto: string
  }[]
}
