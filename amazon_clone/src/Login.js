import React, {useState} from "react";
import "./Login.css";
import {Link, useHistory} from "react-router-dom";
import {auth} from "./firebase";

function Login() {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn =e => {
        e.preventDefault();

        //firebase login will go here

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                if(auth){
                    history.push("/")

                }
            })
            .catch(error => alert(error.message));

    }

    const register = e => {
        e.preventDefault();
        auth

            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if(auth){
                    history.push("/")

                }
            })
            .catch(error => alert(error.message));

        //firebase register
    }


    return(
        <div className={'login'}>
            <Link to={"/"}>
            <img src = "https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png" className={"login_logo"} />
            </Link>



            <div className={"login_container"}>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type={"text"} value={email} onChange={e=> setEmail(e.target.value)}/>


                    <h5>Passwoord</h5>
                    <input type={"password"} value={password} onChange={e => setPassword(e.target.value)}/>

                    <button className={"login_signInButton"} type={"submit"} onClick={signIn}>Sign in</button>
                    <p>
                        By signing-in ou agree to the Amazom fake clone Conditions of Use and Sale. Please see our Privacy Notice, our Cookies Notice and our Intrest-Based Ads Notice
                    </p>

                    <button className={"login_registerButton"} onClick={register}>Create your Amazon Account</button>


                </form>
            </div>





        </div>
    )

}



export default Login;
