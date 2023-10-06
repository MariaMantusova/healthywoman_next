'use client'

import { useState } from 'react';
import Link from "next/link";
import {PromoPoint} from "../PromoPoint/PromoPoint";
import PregnantImage from "../../images/pregnant-promo.png";
import WithChildImage from "../../images/with-child-promo.png";
import AloneImage from "../../images/alone-promo.png";
import "./Promo.css";
import Image from "next/image";

const Promo = () => {
    const [imageState, setImageState] = useState("pregnant");
    const image = imageState === "pregnant" ?
        PregnantImage :
        imageState === "withChild" ?
            WithChildImage :
            imageState === "alone" ? AloneImage : null

    function onClickPromoPointPregnant() {
        setImageState("pregnant")
    }

    function onClickPromoPointWithChild() {
        setImageState("withChild")
    }

    function onClickPromoPointAlone() {
        setImageState("alone")
    }

    return (
        <section className="promo">
            <div className="promo__text-container">
                <h1 className="promo__title">Recipes for the health of the female body</h1>
                <p className="promo__text">Healthy and delicious recipes for you and your loved ones</p>
                <Link href="/recipes" className="promo__link">Choose recipes
                    <span className="promo__link-pointer">&#10230;</span>
                </Link>
            </div>
            <div className="promo__image-container">
                <PromoPoint name="For pregnant" pointClass={imageState === "pregnant" && "promo-point_active"}
                    promoPointClass="promo-point__container_up" onClick={onClickPromoPointPregnant} />
                <PromoPoint name="For breastfeeding" pointClass={imageState === "withChild" && "promo-point_active"}
                    promoPointClass="promo-point__container_medium" onClick={onClickPromoPointWithChild} />
                <PromoPoint name="For a healthy body" pointClass={imageState === "alone" && "promo-point_active"}
                    promoPointClass="promo-point__container_down" onClick={onClickPromoPointAlone} />
                <Image className="promo__image" src={image} alt="pregnant woman"/>
            </div>
        </section>
    )
}

export { Promo };
