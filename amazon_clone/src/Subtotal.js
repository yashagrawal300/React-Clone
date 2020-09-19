import React from "react";
import "./Subtotal.css";
import CurrencyForamt from "react-currency-format";
import {useStateValue} from "./StateProvider";
import {getBasketTotal} from "./reducer";
import {useHistory} from "react-router-dom";


function Subtotal() {
    const history = useHistory();
    const [{basket}, dispatch] = useStateValue();


    return(
        <div className="subtotal">
            <CurrencyForamt renderText={(value) => (
                <>
                <p>
                    Subtotal ({basket?.length} items):
                    <strong>{value}</strong>



                </p>

                <small className="subtotal_gift">
                    <input type="checkbox" /> This order contains a gift

                </small>
                </>


            )}
                deciamlScale = {2}
                value = {getBasketTotal(basket)}
                displayType = {"text"}
                thousandSeperator = {true}
                prefix = {"$"}/>



                <button onClick={e => history.push("/payment")}>Proceed to Checkout</button>


        </div>
    );

}


export default Subtotal;
