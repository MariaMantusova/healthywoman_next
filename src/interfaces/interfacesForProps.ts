export interface IPropsPromoPoint {
    name: string
    promoPointClass: string
    pointClass: string
    onClick: () => void
}

export interface IPropsProduct {
    name: string
    img: string
    description: string
    class?: string
}
