import {IPropsPromoPoint} from "../../interfaces/interfacesForProps";
import "./PromoPoint.css";

const PromoPoint = (props: IPropsPromoPoint) => {
    return(
        <div className={`promo-point__container ${props.promoPointClass}`}>
            <p className="promo-point__name">{props.name}</p>
            <div className={`promo-point ${props.pointClass}`} onClick={props.onClick}></div>
        </div>
    )
}

export {PromoPoint}
