import React from "react";
import styled from "styled-components";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import banner from '../assets/fundoSobre.png';
import ODS10Icon from '../assets/ODS10.svg';
import linkedinIcon from '../assets/linkedin.svg';
import AnimacaoTexto from "../Components/AnimacaoTexto";

import fotoIntegrante1 from '../assets/muniz.jpeg';
import fotoIntegrante2 from '../assets/muniz.jpeg';
import fotoIntegrante3 from '../assets/muniz.jpeg';
import fotoIntegrante4 from '../assets/muniz.jpeg';
import fotoIntegrante5 from '../assets/muniz.jpeg';

const ConteudoBanner = styled.div`
  position: relative;
  margin-bottom: 15px;
  display: flex;
  justify-content: left;
  overflow: visible;

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

const ConteudoTexto = styled.div`
  position: absolute;
  top: 30%;
  left: 3%;
  font-family: 'Neurial Grotesk';
  color: #fff;
  font-size: 2.5rem;
  line-height: 1.2;
  text-transform: uppercase;

  @media screen and (max-width: 1024px) {
    font-size: 2rem;
    top: 25%;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
    top: 20%;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
    left: 5%;
    top: 15%;
  }
`;

const ODSIcon = styled.img`
  position: absolute;
  top: 93%;
  right: 5%;
  width: 320px;
  height: auto;
  z-index: 1;

  @media screen and (max-width: 1024px) {
    width: 200px;
    top: 90%;
  }

  @media screen and (max-width: 768px) {
    width: 120px;
    top: 85%;
    right: 3%;
  }

  @media screen and (max-width: 480px) {
    width: 80px;
    top: 80%;
    right: 2%;
  }
`;

const TextContent = styled.div`
  padding: 20px;
  color: #333;
  line-height: 1.4;
  text-align: justify;
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media screen and (min-width: 1024px) {
    margin-right: 150px;
    
  }
`;

const HighlightedTitle = styled.h2`
  color: #16A8AB;
  margin-right: 50px;
  font-family: 'Neurial Grotesk';
  font-size: 2.0rem;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.6rem;
    margin-right: 0;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 15px ;
  color: #000000;
  font-family: 'Neurial Grotesk';
  font-size: 2.0rem;
  line-height: 1.6;

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const TeamSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;



const TitleText = styled.h2`
  font-family: 'Neurial Grotesk';
  color: #000000;
  font-size: 2.5rem;
  text-transform: uppercase;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const SubTitleText = styled.h2`
  font-family: 'Neurial Grotesk';
  color: #ffffff;
  font-size: 1.5rem;
  text-transform: uppercase;
  margin: 20px;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    margin: 15px;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
    margin: 10px;
  }
`;

const TeamGridTop = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center; 
  margin-top: -100px;
  z-index: 1;
  position: relative;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  
  }
`;
const GradientRectangle = styled.div`
  background: linear-gradient(90deg, #FF6F61, #16A8AB);
  padding: 18px;
  width: 97.35%;
 
  height: 300px;
  text-align: center;
  margin: -30px auto 50px auto;
  position: relative;

  @media screen and (max-width: 1024px) {
    height: 250px;
  }

  @media screen and (max-width: 768px) {
    height: 200px;
    padding: 15px;
    width: 93.8%;
    margin: -10px auto 40px auto;
  }

  @media screen and (max-width: 480px) {
    height: 150px;
    padding: 10px;
    width: 80%;
  }
`;
const TeamGridBottom = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 40px;
  padding-bottom: 70px;
  justify-content: center; 
  

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const TeamCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;

  width: 250px;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    width: 200px;
  }

  @media screen and (max-width: 480px) {
    width: 180px;
  }
`;

const MemberImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    height: 180px;
  }

  @media screen and (max-width: 480px) {
    height: 150px;
  }
`;

const MemberName = styled.p`
  font-family: 'Neurial Grotesk';
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 5px;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const LinkedInIcon = styled.a`
  display: inline-block;
  margin-top: 5px;
  img {
    width: 24px;
    height: 24px;

    @media screen and (max-width: 768px) {
      width: 20px;
      height: 20px;
    }

    @media screen and (max-width: 480px) {
      width: 18px;
      height: 18px;
    }
  }
`;

function Sobre() {
  const teamMembers = [
    { name: "Guilherme Muniz", image: fotoIntegrante1, linkedin: "https://www.linkedin.com/in/guimuniiz/" },
    { name: "Maria Eduarda", image: fotoIntegrante2, linkedin: "https://www.linkedin.com/in/maria-eduarda-c-foloni/" },
    { name: "Arthur Paltrinieri", image: fotoIntegrante3, linkedin: "https://www.linkedin.com/in/arthur-paltrinieri/" },
    { name: "Eduardo Chen", image: fotoIntegrante4, linkedin: "https://www.linkedin.com/in/eduardo-chen-zou-637443292/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { name: "Fabiano Chou", image: fotoIntegrante5, linkedin: "https://www.linkedin.com/in/fabiano-chou-759b072b3/" },
  ];

  return (
    <div>
      <Header />
      
      <ConteudoBanner>
        <ImageConteudo src={banner} alt="Banner" />
        <ConteudoTexto>
          Temos como missão <span style={{ color: "red" }}>empoderar</span> jovens<br />
          Marginalizados, ampliando<br /> oportunidades e promovendo<br />
          <span style={{ color: "red" }}>desenvolvimento Pessoal e Profissional</span>
        </ConteudoTexto>
        <ODSIcon src={ODS10Icon} alt="ODS 10 - Redução das Desigualdades" />
      </ConteudoBanner>

      <TextContent>
        <HighlightedTitle>
          Fazemos isso pelo meio tecnológico e ações <br /> educativas onde o jovem possa se evoluir cada vez mais.
        </HighlightedTitle>
        <Paragraph>
          A Geração Impacto nasce através da ODS 10 - Redução das desigualdades. Onde nossa missão é criar uma plataforma de empoderamento para jovens 
          marginalizados, dando recursos educacionais, networking com 
          profissionais e ferramentas para seu desenvolvimento pessoal e 
          profissional, podendo assim se preparar ainda mais para o mercado corporativo 
          e seus desafios.
        </Paragraph>
        <AnimacaoTexto />
      </TextContent>

      <GradientRectangle>
          <TitleText>Quem faz o Geração Impacto?</TitleText>
           <SubTitleText>Conheça a equipe por traz desse projeto</SubTitleText>
        </GradientRectangle>
      <TeamSectionContainer>
        <TeamGridTop>
          {teamMembers.slice(0, 3).map((member, index) => (
            <TeamCard key={index}>
              <MemberImage src={member.image} alt={`Foto de ${member.name}`} />
              <MemberName>{member.name}</MemberName>
              <LinkedInIcon href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" />
              </LinkedInIcon>
            </TeamCard>
          ))}
        </TeamGridTop>

       
         
 

        <TeamGridBottom>
          {teamMembers.slice(3, 5).map((member, index) => (
            <TeamCard key={index}>
              <MemberImage src={member.image} alt={`Foto de ${member.name}`} />
              <MemberName>{member.name}</MemberName>
              <LinkedInIcon href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" />
              </LinkedInIcon>
            </TeamCard>
          ))}
        </TeamGridBottom>
      </TeamSectionContainer>

      <Footer />
    </div>
  );
}

export default Sobre;
