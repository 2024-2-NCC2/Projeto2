import Header from '../Components/Header';
import Conteudo from "../Components/Conteudo";
import Footer from '../Components/Footer';
import banner from "../assets/FundoMentoria.svg";
import React, {  useEffect, useState } from "react";

import Filtros from "../Components/Filtros";
import ListaMentores from "../Components/ListaMentores";

// mentores
import fotoLuciano from '../assets/meneson.jpg'; 
import fotoAna from '../assets/fotoAna.png'; 
import fotoGui from '../assets/FotoGuiLuiz.png';       
import fotoDiego from '../assets/fotoDiego.png';
import fotoJoyce from '../assets/fotoJoyce.png';
import fotoBruna from '../assets/fotoBruna.png'
import fotoFelipe from '../assets/fotoFelipe.jpg'
import fotoGabriel from '../assets/fotoGabriel.jpeg'
import fotoDiana from '../assets/fotoDiana.webp'
import fotoJenifer from '../assets/fotoJenifer.jpg'
import fotoEduardo from '../assets/fotoEduardo.jpg'
import fotoJorge from '../assets/fotoJorge.avif'
function Mentoria() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const [filtroAtivo, setFiltroAtivo] = useState("Todos");

    const mentores = [
        {
            nome: "Luciano Santos",
            empresa: "Itaú Unibanco",
            descricao: (
                <>
                Gerente de setor de Tecnologia, <br /> mentor e voluntário do Geração Impacto,
                </>
            ), 
            categorias: ["Gestão", "Tecnologia"],
            foto: fotoLuciano 
        },
        {
            nome: "Ana Carolina",
            empresa: "Natura",
            descricao: (
                <>
                Superintendente de marketing, <br /> mentora e voluntária do Geração Impacto
                </>
            ),
            categorias: ["Carreira", "Marketing"],
            foto: fotoAna 
        },
        {
            nome: "Guilherme Luiz",
            empresa: "Unilever",
            descricao: (
                <>
                Analista de sistemas, mentor e <br /> Voluntario do Geração Impacto
                </>

            ),
            categorias: ["Carreira", "Tecnologia"],
            foto: fotoGui
        },
        {
            nome: "Diego Ferraz",
            empresa: "Morgan Stanley",
            descricao: (
                <>
                supervisor de logística e vendas, <br /> mentor e Voluntario do Geração Impacto
                </>
            ) ,
            categorias: ["Finanças", "Gestão"],
            foto: fotoDiego
        },
        {
            nome: "Joyce Rowe",
            empresa: "Nestlé",
            descricao: (
                <>
                Gestora de Pessoas e Diversidade,<br /> mentora e  Voluntaria do <br />Geração Impacto
                </>
            ) ,
            categorias: ["Gestão"],
            foto: fotoJoyce
        },
        {
            nome: "Bruna Oliveira",
            empresa: "Xp inc",
            descricao: (
                <>
                CEO da XP inc, mentora e <br /> Voluntaria da Geração Impacto
                </>
            ),
            categorias: ["Carreira", "Tecnologia"],
            foto: fotoBruna
        },
        {
            nome: "Felipe Dias",
            empresa: "Itaú Unibanco",
            descricao: (
                <>
                Estágiario de marketing, <br /> mentor e voluntário do Geração Impacto,
                </>
            ), 
            categorias: ["Gestão", "Tecnologia"],
            foto: fotoFelipe 
        },
        {
            nome: "Jorge Matheus",
            empresa: "Banco Pan",
            descricao: (
                <>
                Gestor de projetos, <br /> mentor e voluntário do Geração Impacto
                </>
            ),
            categorias: ["Carreira", "Gestão"],
            foto: fotoJorge 
        },
        {
            nome: "Jenifer Carvalho",
            empresa: "Bradesco",
            descricao: (
                <>
                Engenheira de Sofware Plena, mentora e <br /> Voluntaria do Geração Impacto
                </>

            ),
            categorias: ["Carreira", "Tecnologia"],
            foto: fotoJenifer
        },
        {
            nome: "Eduardo Suzuki",
            empresa: "Rappi",
            descricao: (
                <>
                Estágiario de logística e vendas, <br /> mentor e Voluntario do Geração Impacto
                </>
            ) ,
            categorias: ["Finanças", "Gestão"],
            foto: fotoEduardo
        },
        {
            nome: "Diana Andrade",
            empresa: "Vivo",
            descricao: (
                <>
                Gestora de Marketing,<br /> mentora e Voluntaria do <br />Geração Impacto
                </>
            ) ,
            categorias: ["Gestão"],
            foto: fotoDiana
        },
        {
            nome: "Gabriel Rodrigues",
            empresa: "Deloite",
            descricao: (
                <>
                Estágiario em Recrutamento e Seleção , mentor e <br /> Voluntario da Geração Impacto
                </>
            ),
            categorias: ["Carreira", "Marketing"],
            foto: fotoGabriel
        },
    ];

    return (
        <div>
            <Header />
            <div style={{ marginBottom: '40px' }}>
                <Conteudo banner={banner} texto="Programa <br /> de <br /> Mentoria" />
            </div>
            <Filtros filtroAtivo={filtroAtivo} setFiltroAtivo={setFiltroAtivo} />
            <ListaMentores mentores={mentores} filtroAtivo={filtroAtivo} />
            <Footer />
        </div>
    );
}

export default Mentoria;
