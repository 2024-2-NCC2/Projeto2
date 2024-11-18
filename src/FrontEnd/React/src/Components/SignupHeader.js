
import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/Logo.png'; 

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 20px;
  background-color: transparent; 
  z-index: 1000; 
  box-sizing: border-box;
`;

const LogoImg = styled.img`
  width: 100px; 
`;

function SignupHeader() {
  return (
    <HeaderContainer>
      <a href="/">
        <LogoImg src={Logo} alt="Logo do Site" />
      </a>
    </HeaderContainer>
  );
}

export default SignupHeader;
