import React, {useEffect, useState} from "react";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import './Payment.css';
import {Link, useHistory} from "react-router-dom";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {getBasketTotal} from "./reducer";
import CurrencyFormat from "react-currency-format";
import axios from "./axios";
import {db} from "./firebase";




function Payment() {

    const [{basket, user}, dispatch] = useStateValue();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("")

    const history = useHistory();

    const stripe = useStripe();

    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
         const getClientSeceret = async () =>{
            const response = await axios({
                method: 'post',
                //Stripe expects the total in a currency subunits

                url: '/payments/create?total=${getBasketTotal(basket) * 100}'
            });;

            setClientSecret(response.data.clientSecret);

        }



        getClientSeceret();
    }, [basket])


    console.log('The secret is ', clientSecret);




    const handleSubmit = async (event) => {
        //When clicked submite
        event.preventDefault();
        setProcessing(true);

        db
            .collection('users')
            .doc("user?.uid")
            .collection('orders')
            .doc("basket.id")
            .set({
                basket: basket,
            })


        history.replace("/orders")
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            //paymentIntent = payment confirmation

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: "EMPTY_BASKET"
            })





        })


    }

    const handleChange =event =>{

        setDisabled(event.empty);
        setError(event.error? event.error.message : "");




    }


    return(
        <div className={'payment'}>
            <div className={"payment_container"}>
                <h1>
                    Checkout(
                    <Link to={"/checkout"}>{basket?.length} items</Link>
                    )
                </h1>


                <div className={"payment_section"}>

                    <div className={"payment_title"}>
                        <h3>Delivery Address</h3>

                    </div>
                    <div className={"payment_address"}>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Anglles , CA</p>
                    </div>


                </div>

                <div className={"payment_section"}>
                    <div className={"payment_title"}>
                        <h3>Review items and delivery</h3>

                    </div>
                    <div className={"payment_items"}>
                        {/* Product*/}
                        {basket.map(item =>(
                            <CheckoutProduct
                            id ={item.id}
                            title ={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}

                            />
                        ))}

                    </div>



                </div>

                <div className={"payment_section"}>
                    <div className={"payment_title"}>
                        <h3>Payment Method</h3>

                    </div>

                    <div className={"payment_details"}>
                        {/* Stripe payment thing   */}


                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className={"payment_priceContainer"}>

                                <CurrencyFormat renderText={(value) => (
                                    <>
                                    <h3>Order Total: {value}</h3>
                                    </>
                                )}
                                                decimalScale={2}
                                                value={getBasketTotal(basket)}
                                                displayType={"text"}
                                                thousandSeparator={true}
                                                prefix={"$"}
                                                />



                                <button disabled={processing || disabled || succeeded}>

                                    <span>
                                        {
                                            processing? <p>Processinng</p>:
                                                "Buy Now"
                                        }
                                    </span>


                                </button>

                            </div>

                            {error && <div>{error}</div>}

                        </form>



                    </div>


                </div>


            </div>
        </div>
    )

}


export default Payment;
