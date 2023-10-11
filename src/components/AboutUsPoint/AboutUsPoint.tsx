import {IPropsAboutUsPoint} from "../../interfaces/interfacesForProps";
import Image from "next/image";
import "./AboutUsPoint.css";

const AboutUsPoint = (props: IPropsAboutUsPoint) => {
    return(
        <li className="about-us__point">
            <Image className="about-us__icon" src={props.image} alt={props.title}/>
            <div className="about-us__info">
                <h3 className="about-us__name">{props.title}</h3>
                <p className="about-us__description">{props.description}</p>
            </div>
        </li>
    )
}

export {AboutUsPoint}
