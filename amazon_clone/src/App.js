import React, {useEffect} from 'react';
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Orders from './Orders';

import './App.css';
import Checkout from "./Checkout";
import Login from "./Login";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import Payment from "./Payment";

import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";


const promise = loadStripe(
    "pk_test_51HRP4KAhBXtrqZH7Mp879b0UmkfBKQlcBwbBkH1CVwYcPyzYqTjkVxqvEBcKXQi8Sqp8ZIsKxg7CE1BTDridJ9WS00kIcFsYpm"
);



function App() {

    const [{}, dispatch] = useStateValue();


    useEffect(() =>{
        //will only runs one when tthe app components loads....

        auth.onAuthStateChanged(authUser => {
            console.log("USER IS ", authUser);

            if(authUser){
                //User just logged or user was logged in

                dispatch({
                    type :'SET_USER',
                    user: authUser
                })

            }
            else{
                //user is logged out

                dispatch({
                    type : 'SET_USER',
                    user : null
                })
            }
        })



    }, [])



  return (
      <Router>
    <div className="App">

        <Switch>

            <Route path={"/orders"}>
                <Header />
                <Orders />

            </Route>



            <Route path={"/login"}>
                <Login />

            </Route>

            <Route path="/checkout">
                <Header />

                <Checkout/>
            </Route>

            <Route path="/payment">
                <Header />
                <Elements stripe ={promise}>
                    <Payment/>
                </Elements>

            </Route>

            <Route path="/">
                <Header />

                <Home />
            </Route>

        </Switch>




    </div>
      </Router>
  );
}

export default App;
