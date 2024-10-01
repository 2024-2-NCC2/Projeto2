import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import Logo from '../assets/Logo.png'

const HeaderContainer = styled.header`
font-size: 1.4rem;
  display:flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(90deg, rgba(242, 81, 87, 1) 0%, rgba(243, 138, 97, 1) 100%);
  padding: 10px 40px;
  color: #fff;
  font-weight:bold;
`;

const LogoImage = styled.img`
  width: 110px;  
  height: auto;
`;

function Header() {
  return (
    <HeaderContainer>
     <LogoImage src ={Logo} />  
      <NavBar />

      
    </HeaderContainer>
    
  );
}

export default Header;
