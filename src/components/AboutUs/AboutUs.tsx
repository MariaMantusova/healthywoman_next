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
            <Image className="about-us__image" width={600} height={420} src="https://images.unsplash.com/photo-1518605360659-2aa9659ef66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIyfHx3b21lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="women"/>
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
