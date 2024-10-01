import React from "react";
import styled from "styled-components";


const ContainerFerramentas = styled.div`
  width: 100%;
  height: 700px;
  background-color: #16a8ab;
  display: flex;
  margin-top: 37.2vh;
  flex-direction: column;
  font-family: 'FrankFurter';   
`;


const TituloFerramentas = styled.h2`
  margin-left: 50px;
`;

const TextoContainer = styled.p`
  margin-left: 30px;
  font-size: 1.9rem;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 50px;
  padding: 0 5%;
`;

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 50px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  width: 300px;
  text-align: center;
  padding: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;


const CardImg = styled.img`
  max-width: 100%;
  border-radius: 10px;
`;


const CardTitulo = styled.h3`
  font-family: 'FrankFurter';
  color: #fa7343;
  margin: 20px 0 10px 0;
`;


const CardTexto = styled.p`
  font-family: 'Neurial Grotesk';
  color: #333;
  font-size: 1.2rem;
`;

function Ferramentas() {
  return (
    <ContainerFerramentas>
      <TituloFerramentas>Nossas Ferramentas</TituloFerramentas>
      <TextoContainer>
        Descubra recursos para seu desenvolvimento e conexão.
      </TextoContainer>

      <CardContainer>
        <Card>
          <CardImg src="img/mentoria.png" alt="Programa de Mentoria" />
          <CardTitulo>Programa de Mentoria &gt;</CardTitulo>
          <CardTexto>
            Conecte-se com profissionais de sucesso e compartilhe conhecimentos.
          </CardTexto>
        </Card>
        <Card>
          <CardImg src="img/networking.jpg" alt="Plataforma de Networking" />
          <CardTitulo>Plataforma de Networking &gt;</CardTitulo>
          <CardTexto>
            Conecte-se e compartilhe experiências valiosas com colegas.
          </CardTexto>
        </Card>
        <Card>
          <CardImg src="img/cursos.jpg" alt="Cursos Online & Webinar" />
          <CardTitulo>Cursos Online & Webinar &gt;</CardTitulo>
          <CardTexto>
            Aprimore suas habilidades com recursos de aprendizagem online
            gratuitos e impulsione suas habilidades.
          </CardTexto>
        </Card>
      </CardContainer>
    </ContainerFerramentas>
  );
}

export default Ferramentas;
