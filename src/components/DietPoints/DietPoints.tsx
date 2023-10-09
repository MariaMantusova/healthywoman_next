import "./DietPoints.css";
import Image from "next/image";
import Nutritionist from "../../images/woman-dietolog.png";

const DietPoints = () => {
    return (
        <section className="diet-points">
            <Image className="diet-points__image" src={Nutritionist} alt="nutritionist"/>
            <div className="diet-points__info">
                <p className="diet-points__name">Ivanova Nadezhda Alexandrovna</p>
                <p className="diet-points__description">Certified nutritionist</p>
            </div>
            <div className="diet-points__container">
                <h2 className="diet-points__title">Why do you need to eat healthy food?</h2>
                <div className="diet-points__items">
                    <p className="diet-points__item">&#10003;  Healthy child</p>
                    <p className="diet-points__item">&#10003;  Boosting immunity</p>
                    <p className="diet-points__item">&#10003;  Keeping your fit</p>
                    <p className="diet-points__item">&#10003;  No harmful components</p>
                    <p className="diet-points__item">&#10003;  Reducing the load on organs digestion</p>
                </div>
            </div>
        </section>
    )
}

export {DietPoints}
