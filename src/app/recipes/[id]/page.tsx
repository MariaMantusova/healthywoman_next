interface IRecipeProps {
    params: {
        id: string
    }
}

export function generateMetadata({params: { id }}: IRecipeProps) {
    return {
        title: id,
    }
}

export default function Recipe({params: { id }}: IRecipeProps) {
    return <p>Recipe {id}</p>
}
