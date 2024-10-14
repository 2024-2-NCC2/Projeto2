import styled from "styled-components";

const ConteudoBanner = styled.div`
  position: relative;
  margin-bottom: 15px;
  animation-name: aparecimento;
  animation-duration: 0.8s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  display: flex;
  justify-content: left;
  overflow: hidden; 
  
  @keyframes aparecimento {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }

  @media screen and (max-width: 789px) {
    justify-content: center;
    height: auto;
    margin-top: -25px;
  }
`;

const ImageConteudo = styled.img`
  width: 100%; 
  height: 90vh;
  object-fit: cover;

  @media screen and (max-width: 789px) {
    height: 45vh;
  }
`;

const ConteudoTexto = styled.h2`
  position: absolute;
  top: 5%;
  padding-left: 85px;
  color: #fff;
  font-size: 100px;
  text-transform: uppercase;

  @media screen and (max-width: 789px) {
    font-size: 2.7rem;
    padding: 0;
    transform: translateY(50%);
  }

  @media screen and (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

function Conteudo(props) {
  return (
    <ConteudoBanner>
      <ImageConteudo src={props.banner} alt="alguma coisa" />
      <ConteudoTexto dangerouslySetInnerHTML={{ __html: props.texto }} />
    </ConteudoBanner>
  );
}

export default Conteudo;
