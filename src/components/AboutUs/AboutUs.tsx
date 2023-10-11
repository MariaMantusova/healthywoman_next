import Image from "next/image";
import "./AboutUs.css";
import AboutUsImage from "../../images/about-us-women.png";
import {AboutUsPoint} from "../AboutUsPoint/AboutUsPoint";
import EcoIcon from "../../images/eco-icon-about-us.svg";
import BalanceIcon from "../../images/balance-icon-about-us.svg";
import IndividualIcon from "../../images/individual-icon-about-us.svg";
import HealthCareIcon from "../../images/health-care-icon-about-us.svg";

const AboutUs = () => {
    return(
        <section className="about-us">
            <Image className="about-us__image" src={AboutUsImage} alt="women"/>
            <div className="about-us__container">
                <h2 className="about-us__title">Why women choose our recipes?</h2>
                <ul className="about-us__list">
                    <AboutUsPoint image={EcoIcon} title="Environmental friendliness:"
                                  description="products are grown without the use of chemicals" />
                    <AboutUsPoint image={BalanceIcon} title="Balance:"
                                  description="our dishes are prepared by leading nutritionists according to a unique recipe"/>
                    <AboutUsPoint image={IndividualIcon} title="Individuality"
                                  description="We provide a large number of dish options for your choice"/>
                    <AboutUsPoint image={HealthCareIcon} title="Benefit:"
                                  description="by eating our products, you can be confident in your child's health and wellness"/>
                </ul>
            </div>
        </section>
    )
}

export {AboutUs}
