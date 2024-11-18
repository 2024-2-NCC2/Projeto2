import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';  
import LoginBox from '../Components/LoginBox';
import Illustration from '../Components/Illustration';
import Footer from '../Components/Footer';
import SignupHeader from '../Components/SignupHeader';


const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f8f8f8; 
  }
`;

const LoginPageContainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  max-width: 1200px;
  width: 100%;
  height: 100vh; 
  box-sizing: border-box; 
`;



function Login() {
  return (
    <>
      <GlobalStyle />
      <SignupHeader />
      <LoginPageContainer>
        <LoginBox />
        <Illustration />
      </LoginPageContainer>
      <Footer />
    </>
  );
}

export default Login;
