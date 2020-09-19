import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    return(

    <div className={"checkout"}>


        <div className={"checkout_left"}>
            <div className={"checkout_ad"}></div>
            <div className={"checkout_title"}>
                <h2>Your Shopping Basket</h2>



            </div>
            {basket.map(item => (
                <CheckoutProduct

                    id={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    rating={item.rating}
                />




            ))}
        </div>


        <div className={"checkout_right"}>
            <Subtotal/>

        </div>












    </div>

    )

}

export default Checkout;
