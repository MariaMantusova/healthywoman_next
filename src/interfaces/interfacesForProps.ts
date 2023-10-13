import React from "react";

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
