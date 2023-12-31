import {Promo} from "../components/Promo/Promo";
import {DietPoints} from "../components/DietPoints/DietPoints";
import {Products} from "../components/Products/Products";
import {AboutUs} from "../components/AboutUs/AboutUs";

export default function Home() {
    return (
        <>
            <Promo/>
            <DietPoints/>
            <Products/>
            <AboutUs/>
        </>
    )
}
