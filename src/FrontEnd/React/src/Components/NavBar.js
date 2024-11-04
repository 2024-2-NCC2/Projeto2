import React, { useState } from "react";
import styled from 'styled-components';
import { Link, useNavigate, useLocation } from "react-router-dom";


const NavBarContainer = styled.nav`
    font-family: 'FrankFurter';
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 0;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 1em;
    }
`;

const MenuToggle = styled.button`
    font-size: 1.5em;
    background: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
    display: none;

    @media (max-width: 768px) {
        display: block;
    }
`;

const NavLinks = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
        flex-direction: column;
        display: ${props => (props.show ? 'block' : 'none')};
        width: 100%;
        padding: 0;
    }
`;

const Menu = styled(Link)`
    font-family: 'Neurial Grotesk';
    color: #fff;
    margin: 0 1em;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        text-decoration: none;
         color: #F4D7D7;
    }

    @media (max-width: 768px) {
        margin: 0.5em 0;
    }
`;

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleNavigation = (sectionId) => {
        if (location.pathname !== '/') {

            navigate('/', { state: { scrollTo: sectionId } });
        } else {
           
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    return (
        <NavBarContainer>
        <MenuToggle aria-label="Abrir Menu" onClick={toggleMenu}>
            &#9776;
        </MenuToggle>
        <NavLinks show={menuOpen}>
            <li><Menu to="/">Home</Menu></li>
            <li><Menu to="/sobre">Sobre</Menu></li>
            <li><Menu as="p" onClick={() => handleNavigation('ferramentas-section')}>Ferramentas</Menu></li>
            <li><Menu as="p" onClick={() => handleNavigation('contatos-section')}>Contato</Menu></li>
        </NavLinks>
    </NavBarContainer>
    );
}

export default NavBar;
