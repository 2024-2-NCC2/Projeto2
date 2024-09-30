import React from "react";
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ConteudoHome from "../Components/ConteudoHome";



function Home(){
    return(
        <div>
            <Header />
            <ConteudoHome /> 
            <Footer />
        </div>
    )
}
export default Home;