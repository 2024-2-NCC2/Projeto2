import React from "react";
import styled from "styled-components";
import iconeTodos from "../assets/iconeTodos.png";
import iconeCarreira from "../assets/iconeCarreira.png";
import iconeTecnologia from "../assets/iconeTecnologia.png";
import iconeFinancas from "../assets/iconeFinancas.png";
import iconeMarketing from "../assets/iconeMarketing.png";
import iconeGestao from "../assets/iconeGestao.png";
import iconeFiltros from "../assets/iconeFiltros.png";


const FiltrosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const PesquisaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const BarraPesquisa = styled.input`
  width: 60%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const BotaoFiltros = styled.button`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-left: 10px;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #ddd;
  }
`;

const BotoesFiltroContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px; 
  flex-wrap: wrap; 
  margin-top: 20px;
`;

const BotaoFiltro = styled.button`
  background-color: ${(props) => (props.ativo ? "#ccc" : "#f0f0f0")};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  border-radius: 10px;

  &:hover {
    background-color: #ddd;
  }
`;

const IconeFiltro = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const IconeFiltros = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;


const categorias = [
  { nome: "Todos", icone: iconeTodos },
  { nome: "Carreira", icone: iconeCarreira },
  { nome: "Tecnologia", icone: iconeTecnologia },
  { nome: "Finanças", icone: iconeFinancas },
  { nome: "Marketing", icone: iconeMarketing },
  { nome: "Gestão", icone: iconeGestao }
];


function Filtros({ filtroAtivo, setFiltroAtivo }) {
  return (
    <FiltrosContainer>
     
      <PesquisaContainer>
        <BarraPesquisa 
          type="text" 
          placeholder="Pesquise por nome, categoria, skills, empresa ..." 
        />
        <BotaoFiltros>
          <IconeFiltros src={iconeFiltros} alt="ícone filtros" />
          Filtros
        </BotaoFiltros>
      </PesquisaContainer>

 
      <BotoesFiltroContainer>
        {categorias.map((categoria) => (
          <BotaoFiltro
            key={categoria.nome}
            ativo={filtroAtivo === categoria.nome}
            onClick={() => setFiltroAtivo(categoria.nome)}
          >
            <IconeFiltro src={categoria.icone} alt={`${categoria.nome} ícone`} />
            {categoria.nome}
          </BotaoFiltro>
        ))}
      </BotoesFiltroContainer>
    </FiltrosContainer>
  );
}

export default Filtros;
