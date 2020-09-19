import React from "react";
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";


function Header() {
    const [{basket, user}, dispatch] = useStateValue();

    const nameChanging = () =>{
        if(auth.currentUser){
            return auth.currentUser.email.toString();
        }
        else{
            return "Guest";
        }
    }

    const handleAuthentiation = () =>{
        if(user){
            auth.signOut();
        }
    }




    return(
        <div className={'header'}>
            <Link to={"/"}>
                <img className={"header_logo"} src={"http://pngimg.com/uploads/amazon/amazon_PNG11.png"} />

            </Link>

            {/*Amazon Logo  */}


            {/*Amazon Search bar  */}
            <div className={"header_search"}>
                <input className={"header_SearchInput"} type={"text"}/>
                <SearchIcon className={"header_searchIcon"}>

                </SearchIcon>
            </div>

            {/*Amazon navigation four buttons  */}

            <div className={"header_nav"}>
                <Link to={!user && '/login'}>
                <div className={"header_options"} onClick={handleAuthentiation}>

                    <span className={"header_optionLineOne"}>
                        Hello {nameChanging()}

                    </span>
                    <span className={"header_optionLineTwo"}>
                            {user ? "Sign Out" : "Sign In"}

                    </span>


                </div>
                </Link>


                <div className={"header_options"}>
                    <span className={"header_optionLineOne"}>
                        Returns
                    </span>
                    <span className={"header_optionLineTwo"}>
                        & Orders
                    </span>
                </div>


                <div className={"header_options"}>
                    <span className={"header_optionLineOne"}>
                        Your
                    </span>
                    <span className={"header_optionLineTwo"}>
                        Prime
                    </span>
                </div>

            </div>


            <Link to={"/Checkout"}>

            <div className={"header_optionBasket"}>
                <ShoppingBasketIcon />
                <span className={"header_optionLineTwo header_basketCount"}>
                    {basket?.length}


                </span>

            </div>

            </Link>





        </div>
    )

}



export default Header
