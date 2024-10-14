import React, { useState } from "react";
import styled from "styled-components";
import Header from '../Components/Header';
import Conteudo from "../Components/Conteudo";
import Footer from '../Components/Footer';
import banner from "../assets/FundoCursos.png";
import Comunicacao from "../assets/pessoas.jpg";
import Metodologia from "../assets/metodologia.jpg";
import PensamentoAnalitico from "../assets/pensamento-analitico.webp";
import VisaoSistemica from "../assets/visao-sistemica.webp";
import Financa from "../assets/finanças.webp";
import Produtividade from "../assets/produtividade-no-trabalho-scaled-1.jpg";
import Inteligencia from "../assets/inteligenciaEmocional.jpg";
import Marketing from "../assets/marketing-pessoal.jpg";

const Section = styled.section`
  text-align: center;
  padding: 2em 0;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f7f1e7;
`;

const Titulo = styled.h1`
  font-family: 'Neurial Grotesk';
  font-size: 36px;
  color: #35c1b7;
`;

const Descricao = styled.p`
  font-family: 'Neurial Grotesk';
  font-size: 18px;
  color: #000;
  margin-top: 10px;
`;

const CursoContainer = styled.div`
  background-color: #2acfcf;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column; 
  align-items: center;
  position: relative;
  gap: 20px;
`;

const LinhaDeCards = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: center;
  }
`;

const CardCurso = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  width: calc(50% - 10px); 
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 90%; 
  }

  @media (max-width: 480px) {
    width: 100%; 
  }
`;

const CursoImg = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
`;

const CursoTitulo = styled.h3`
  font-family: 'Neurial Grotesk';
  font-size: 16px;
  padding: 10px;
`;

const BotaoNavegar = styled.button`
  font-size: 24px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1; 

  &:first-of-type {
    left: -20px;
  }

  &:last-of-type {
    right: -20px;
  }
`;

function Cursos() {
  
  const [index, setIndex] = useState(0);

  const cards = [
    {
      img: Comunicacao,
      title: "Comunicação ativa e liderança de equipes",
    },
    {
      img: Metodologia,
      title: "Uso das metodologias ágeis no mercado de trabalho",
    },
    {
      img: PensamentoAnalitico,
      title: "Pensamento crítico e analítico",
    },
    {
      img: VisaoSistemica,
      title: "Visão sistêmica da organização",
    },
    {
      img: Financa,
      title: "Finanças pessoais: Como se organizar financeiramente",
    },
    {
      img: Inteligencia,
      title: "A importância da Inteligência Emocional",
    },
    {
      img: Produtividade,
      title: "Como aumentar sua produtividade.",
    },
    {
      img: Marketing,
      title: "Marketing Pessoal: A importância de ter seu marketing",
    },
  ];

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 4) % cards.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 4 + cards.length) % cards.length);
  };

  const displayedCards = [
    cards[index],
    cards[(index + 1) % cards.length],
    cards[(index + 2) % cards.length],
    cards[(index + 3) % cards.length]
  ];

  return (
    <div>
      <Header />
      <Conteudo banner={banner} texto="Cursos e <br /> Webinars" />
      <Section>
        <Titulo>Uma ampla seleção de Cursos</Titulo>
        <Descricao>
          Desenvolva ainda mais com os cursos oferecidos pela Geração Impacto.
          Vamos dar o play?
        </Descricao>
        <CursoContainer>
          <BotaoNavegar onClick={handlePrev}>&lt;</BotaoNavegar>
          <LinhaDeCards>
            {displayedCards.slice(0, 2).map((card, i) => (
              <CardCurso key={i}>
                <CursoImg src={card.img} alt={card.title} />
                <CursoTitulo>{card.title}</CursoTitulo>
              </CardCurso>
            ))}
          </LinhaDeCards>
          <LinhaDeCards>
            {displayedCards.slice(2).map((card, i) => (
              <CardCurso key={i}>
                <CursoImg src={card.img} alt={card.title} />
                <CursoTitulo>{card.title}</CursoTitulo>
              </CardCurso>
            ))}
          </LinhaDeCards>
          <BotaoNavegar onClick={handleNext}>&gt;</BotaoNavegar>
        </CursoContainer>
      </Section>
      <Footer />
    </div>
  );
}

export default Cursos;
