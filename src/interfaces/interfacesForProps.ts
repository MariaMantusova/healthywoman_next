import React from "react";
import { TRecipeInRecipes, TRecipePage } from "../types/mainTypes";
import { TCategoryInArray } from "../types/rareTypes";

export interface IPropsPromoPoint {
    name: string
    promoPointClass: string
    pointClass: string
    onClick: () => void
}

export interface IPropsAboutUsPoint {
    image: string
    title: string
    description: string
}

export interface IPropsProduct {
    name: string
    img: string
    description: string
    class?: string
    isActive: boolean
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IPropsRecipeIngredient {
    ingredient: {
        nameOfIngredient: string
        ingredientWeight: number
        ingredientPhoto: string
    }
}

export interface IPropsRecipeInfoItem {
    infoTitle: string
    infoText: string
}

export interface IPropsSearchInput {
    placeholder: string
    type: string
    setValue: React.Dispatch<React.SetStateAction<string | number>>
    value: string | number
    onSubmit: () => void
}

export interface IPropsRecipes {
    recipes: TRecipeInRecipes[]
}

export interface IPropsRecipeCard {
    recipe: TRecipeInRecipes
}

export interface IPropsSimpleSelect {
    placeholder: string
    categoriesArray: TCategoryInArray[]
    onSelect: (string) => void
}

export interface IPropsMessageBlock {
    text: string
    class: string
}

export interface IPropsRecipesPageBase {
    children: React.ReactNode
    titleName: string
    isLoading: boolean
    error: string
    recipes: TRecipeInRecipes[]
}

export interface IPropsRecipesPageWithSearchForm {
    category: string
    titleName: string
    placeholder: string
    inputType: string
}

export interface IPropsRecipesPageWithSelect {
    category: string
    titleName: string
    categoriesArray: TCategoryInArray[]
    placeholder: string
}

export interface IPropsRecipePage {
    recipe: TRecipePage
}

export interface IRecipeProps {
    params: {
        id: string
    }
}
