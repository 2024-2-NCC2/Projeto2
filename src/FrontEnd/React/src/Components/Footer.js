import React from "react";
import styled from 'styled-components'

const FooterContainer = styled.footer`
   background: linear-gradient(90deg, rgba(243, 138, 97, 1) 0%, rgba(242, 81, 87, 1) 100%);
    padding: 1em;
    z-index: 1;
    color: #fff;
    text-align:center;
    position: relative;
    margin: 0;
    font-family: 'Neurial Grotesk';
    
   
`

function Footer(){
    return(
        <FooterContainer>
       <p>© 2024 Geração Impacto - Todos os direitos reservados.</p>
        </FooterContainer>
    )    
}

export default Footer