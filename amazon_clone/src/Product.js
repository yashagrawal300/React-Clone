import React from "react";
import "./Product.css";
import {useStateValue} from "./StateProvider";



function Product({title, image,  price, rating,  id}) {

    const [state, dispatch] = useStateValue();


    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type : "ADD_TO_BASKET",
            item : {
                id : id,
                title: title,
                image: image,
                price: price,
                rating: rating,

            },
        });



    };



    return(
        <div className={"product"}>
            <div className={"product_info"}>
                <p>{title}</p>
                <div className={"product_price"}>
                    <small>$</small>
                    <strong>{price}</strong>
                </div>



                <div className={"product_rating"}>
                    {Array(rating).fill().map((_ , i) => (
                        <p>&#11088;</p>

                    ))}

                </div>
            </div>

            <img src={image} />

            <button onClick={addToBasket}>Add to Basket</button>



        </div>
    )

}


export default Product;
