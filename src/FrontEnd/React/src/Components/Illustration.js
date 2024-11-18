import styled from 'styled-components';
import IllustrationPhoto from '../assets/illustration 22.svg';

const IllustrationContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;


`;

const Img = styled.img`

    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  
  @media (max-width: 550px ) {
 display: none;
 }
`


function Illustration() {
  return (
    <IllustrationContainer>
      <Img src={IllustrationPhoto} alt="Illustration" />
    </IllustrationContainer>
  );
}

export default Illustration;
