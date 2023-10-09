import "./Product.css";
import {IPropsProduct} from "../../interfaces/interfacesForProps";
import Image from "next/image";

const Product = (props: IPropsProduct) => {
    return(
        <li className={`product ${props.class}`}>
            <Image className="product__image" width={props.class === "product_active" ? 660 : 620} height={300} src={props.img} alt={props.name}/>
            <div className="product__info">
                <h3 className="product__name">{props.name}</h3>
                <p className="product__description">{props.description}</p>
            </div>
        </li>
    )

}

export { Product }
