import React from "react";
import Header from '../Components/Header'
import Conteudo from "../Components/Conteudo";
import Footer from '../Components/Footer'
import banner from "../assets/FundoMentoria.svg";


function Mentoria(){
    return(
        <div>
            <Header />
          <Conteudo banner={banner} texto = "Programa <br /> de <br /> Mentoria" />
            <Footer />
        </div>
    )
}
export default Mentoria