import React, { useState } from "react";
import styled from "styled-components";


const ListaContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 20px; 
  padding: 10px; 
  justify-items: center; 
 

  @media (max-width: 600px) {
    justify-content: center;
    
    grid-template-columns: repeat(auto-fill, minmax(00px, 1fr))
  }

  @media (max-width: 768px) {
    padding: 3px;
    grid-template-columns: repeat(auto-fill, minmax(767px, 1fr))
  }
  @media (max-width: 1024px) {
    padding: 3px;
    
  }
`;
const Card = styled.div`
  background-color: #ff7043;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  display: grid;
  grid-template-columns: 100px auto; 
  gap: 20px; 
  align-items: flex-start; 
  position: relative; 
  width: 500px;
  height: 150px;
  margin: 0 10px; 

  @media (max-width: 600px) {
    width: 360px;
    height: 220px;
    margin: 0;
  
  }
  @media (max-width: 1024px) {
  width: 390px;
  height: 170px;
  }
  @media (max-width: 320px) {
    width: 280px;
    height: 205px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const FotoMentor = styled.img`
  width: 125px;
  height: 120px;
  border-radius: 10%;
  margin-bottom: 10px;
`;

const Nome = styled.h3`
font-size: 1.5rem;
  margin: 3px 12px;
  color: #000000;
  font-family: 'Neurial Grotesk';
 
`;

const Empresa = styled.p`
  font-size: 1.2rem;
  margin: 1px 12px;
  font-weight: bold;
  color: #000000;
  font-family: 'Neurial Grotesk';
`;

const Descricao = styled.p`
  font-size: 1.1rem;
  margin-top: 10px;
  text-align: center;
  color: #000000;
  font-family: 'Neurial Grotesk';
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
  @media (max-width: 1024px) {
    font-size: 0.9rem;
  }
`;

const Categorias = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  position: absolute; 
  bottom: 10px; 
  left: 13%; 
  width: 100px; 
  justify-content: center; 
  font-family: 'Neurial Grotesk';
`;


const TagCategoria = styled.span`
  background-color: #40BFC1;
  color: #FFFFFF;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  @media (max-width: 320px) {
    width: 74px;
    padding: 3px 7px;
   
  }
`;
const PaginacaoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 30px 90px 50px 0;
`;
const BotaoPagina = styled.button`
  background-color: ${(props) => (props.ativo ? "#40BFC1" : "#f0f0f0")};
  border: none;
  padding: 10px 15px;
  margin: 0 5px;  
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #ddd;
  }
`;

function ListaMentores({ mentores, filtroAtivo }) {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const mentoresPorPagina = 6; 

  const mentoresFiltrados = filtroAtivo === "Todos"
      ? mentores
      : mentores.filter(mentor => mentor.categorias.includes(filtroAtivo));

  
  const totalPaginas = Math.ceil(mentoresFiltrados.length / mentoresPorPagina);


  const inicio = (paginaAtual - 1) * mentoresPorPagina;
  const fim = inicio + mentoresPorPagina;
  const mentoresExibidos = mentoresFiltrados.slice(inicio, fim);

  return (
      <div>
          <ListaContainer>
              {mentoresExibidos.map((mentor, index) => (
                  <Card key={index}>
                      <FotoMentor src={mentor.foto} alt={`Foto de ${mentor.nome}`} />
                      <Categorias>
                          {mentor.categorias.map((categoria, index) => (
                              <TagCategoria key={index}>{categoria}</TagCategoria>
                          ))}
                      </Categorias>
                      <InfoContainer>
                          <Nome>{mentor.nome}</Nome>
                          <Empresa>{mentor.empresa}</Empresa>
                          <Descricao>{mentor.descricao}</Descricao>
                      </InfoContainer>
                  </Card>
              ))}
          </ListaContainer>

         
          <PaginacaoContainer>
              {Array.from({ length: totalPaginas }, (_, index) => (
                  <BotaoPagina
                      key={index + 1}
                      ativo={paginaAtual === index + 1}
                      onClick={() => setPaginaAtual(index + 1)}
                  >
                      {index + 1}
                  </BotaoPagina>
              ))}
          </PaginacaoContainer>
      </div>
  );
}

export default ListaMentores;