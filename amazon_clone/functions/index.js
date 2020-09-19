const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");

//const stripe = require("stripe")("sk_test_51HRP4KAhBXtrqZH7QqHwxPnLnWC06vJs4E9gsaHBFcNRUiRttRR55Xiy8Sf4bLYdnCLjUEX3Dx2B3UcAhrRHqLYp00BQ0I0yMi")

//API

//App config

const app = express();


//Middleware
app.use(cors({origin: true}));
app.use(express.json());


//Api routes


app.get('/', (request, response) => response.status(200).send("Hello world"))

app.post('/paymeents/create', async (request, response) =>{

    const total = request.query.total;

    console.log("payment Request", total);

    const paymentIntent = await stripe.paymentIntent.create({
        amount : total,
        currency : "usd",

    });

    //201 is OK

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

})

//Listen command

exports.api = functions.https.onRequest(app)

