import React, { useEffect } from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ConteudoHome from "../Components/ConteudoHome";
import { useLocation } from 'react-router-dom';


function Home(){
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            const section = document.getElementById(location.state.scrollTo);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [location]);

    return(
        <div>
            <Header />
            <ConteudoHome /> 
            <Footer />
        </div>
    )
}
export default Home;