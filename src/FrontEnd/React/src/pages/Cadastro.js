import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import SignupBox from '../Components/SignupBox';
import SignupIllustration from '../Components/SignupIllustration';
import Footer from '../Components/Footer';
import SignupHeader from '../Components/SignupHeader';


const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f8f8f8; 
  }
`;

const SignupPageContainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  max-width: 1200px;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
`;

function Signup() {
  return (
    <>
      <GlobalStyle />
      <SignupHeader />
      <SignupPageContainer>
        <SignupBox />
        <SignupIllustration />
      </SignupPageContainer>
      <Footer />
    </>
  );
}

export default Signup;