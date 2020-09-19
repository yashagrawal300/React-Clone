import React from "react";
import "./CheckoutProduct.css"
import {useStateValue} from "./StateProvider";


function CheckoutProduct({id, price, title, image, rating}) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () =>{
        //Remove items from the basket

        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })


    }

    return (
        <div className={"checkoutProduct"}>
            <img className={"checkoutProduct_image"} src={image} />

            <div className={"checkoutProduct_info"}>

                <p className={"checkoutProduct_title"}>{title}</p>


                <p className={"checkoutProduct_price"}>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>


                <div className={"checkoutProduct_rating"}>
                    {Array(rating).fill().map((_ , i) => (
                        <p>&#11088;</p>
                    ))}
                </div>

                <button onClick={removeFromBasket}>Remove From Basket</button>


            </div>

        </div>
    )

}


export default CheckoutProduct;
