import React from "react";
import "./Home.css";
import Product from "./Product";


function Home() {
    return(
        <div className={"home"}>
            <div className={"home_container"}>

                <div className={"home_row"}>
                    {/* Product */}

                    <Product title={"The lean startup"}
                            price={29.99}
                            image={"https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"}
                            rating={3}
                            id = {2}/>



                    {/* Product */}

                    <Product title={"Oppo 9"}
                             price={299.99}
                             image={"https://www.clipartkey.com/mpngs/m/234-2346583_smartphones-png-combo-new-mobile-phone-png.png"}
                             rating={4}
                             id = {3}/>

                </div>



                <div className={"home_row"}>
                    {/* Product */}
                    <Product title={"Roses Bouqet"}
                             price={2.20}
                             image={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXiAmEDjC_iEFaKNbFwt9MZfwxzCd4dW-2Xw&usqp=CAU"}
                             rating={5}
                             id = {4}/>
                    {/* Product */}

                        {/* Product */}
                        <Product title={"Predator Asus 8GB RAM/ 4GB Graphic Card/ 2TB HardDisk/ Windows 10/ Gaming Laptop"}
                                 price={300.10}
                                 image={"https://static.acer.com/up/Resource/Acer/Predator/Homepage/Featured_Products/20200609/Predator-Helios-700-PH717-71-preview.png"}
                                 rating={4}
                                 id = {5}/>
                    {/* Product */}

                        <Product title={"Cracking the Coding Interview"}
                                 price={50.5}
                                 image={"https://www.codewithc.com/wp-content/uploads/2017/08/Free-Download-Cracking-the-Coding-Interview.png"}
                                 rating={5}
                                 id = {6}/>


                </div>


                <div className={"home_row"}>
                    {/* Product */}
                    <Product title={"Samsung Curved LED Tv "}
                             price={500.5}
                             image={"https://5.imimg.com/data5/TV/PP/MY-18139975/223-7cm-2888-29-suhd-4k-curved-smart-tv-js9500-series-9-500x500.png"}
                             rating={4}
                             id = {7}/>


                </div>
                </div>

            </div>






    )

}

export default Home;

