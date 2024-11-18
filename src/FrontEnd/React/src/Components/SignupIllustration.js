import styled from 'styled-components';
import SignupImage from '../assets/Illustration2.svg';

const IllustrationContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 80%; 
    max-height: 80%; 
    object-fit: contain;
    @media (max-width: 550px ) {
 display: none;
 }
  }
`;

function SignupIllustration() {
  return (
    <IllustrationContainer>
      <img src={SignupImage} alt="Illustration" />
    </IllustrationContainer>
  );
}

export default SignupIllustration;