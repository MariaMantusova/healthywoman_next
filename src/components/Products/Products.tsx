"use client";

import "./Products.css";
import {Product} from "../Product/Product";
import {useEffect, useState} from "react";

const Products = () => {
    const [isActiveVegetables, setIsActiveVegetables] = useState(false);
    const [isActiveMeat, setIsActiveMeat] = useState(true);
    const [isActiveDairy, setIsActiveDairy] = useState(false);

    useEffect(() => {
        if (isActiveVegetables) {
            setIsActiveDairy(false);
            setIsActiveMeat(false);
        }
    }, [isActiveVegetables])

    useEffect(() => {
        if (isActiveMeat) {
            setIsActiveVegetables(false);
            setIsActiveDairy(false);
        }
    }, [isActiveMeat])

    useEffect(() => {
        if (isActiveDairy) {
            setIsActiveVegetables(false);
            setIsActiveMeat(false);
        }
    }, [isActiveDairy])

    return(
        <section className="products">
            <h2 className="products__title">Mandatory products for a healthy diet:</h2>
            <ul className="products__container">
                <Product description="Broccoli, pumpkin, cauliflower, turnips, cucumbers.
                 Prepare dishes from stew mixtures without adding oil."
                         img="https://images.unsplash.com/photo-1575218823251-f9d243b6f720?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dauto=format&fit=crop&w=1470&q=80"
                         name="Vegetables" setIsActive={setIsActiveVegetables} isActive={isActiveVegetables}
                         class={isActiveVegetables && "product_active"} />
                <Product description="Rabbit, veal, turkey, skinless chicken.
                Meat dishes should be present in the diet every day in stewed, baked or boiled form."
                         img="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                         name="Meat"
                         class={isActiveMeat && "product_active"}
                         setIsActive={setIsActiveMeat}
                         isActive={isActiveMeat}/>
                <Product description="Cheese, fermented baked milk, yogurt, cottage cheese, plain yogurt, kefir.
                It is advisable for a nursing mother to eat them daily or every other day."
                         img="https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
                         name="Dairy products" setIsActive={setIsActiveDairy}
                         class={isActiveDairy && "product_active"}
                         isActive={isActiveDairy}/>
            </ul>
        </section>
    )
}

export { Products }
