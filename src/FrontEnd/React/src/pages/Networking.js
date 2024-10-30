import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import PedroOliveira from '../assets/PedrOliveira.png';
import postImage from '../assets/postImagem.png';
import likeIcon from '../assets/like.svg';
import commentIcon from '../assets/comment.svg';
import shareIcon from '../assets/share.svg';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const SearchBar = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  background-color: white;
  padding: 10px 4%;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;

  .user-photo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    cursor: pointer;
  }

  input {
    width: 80%;
    max-width: 600px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 90%;
    input {
      width: 100%;
    }
  }
`;

const DropdownMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 60px;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 2;

  a {
    color: #000;
    text-decoration: none;
    font-weight: bold;
    display: block;
    padding: 8px 10px;

    &:hover {
      background-color: #f1f1f1;
    }
  }
`;

const MainContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: center; 

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PostsContainer = styled.div`
  width: 50%; 
  margin-right: 70px;

  @media (max-width: 1024px) {
    width: 80%;
    margin-right: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProfileSidebar = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 80%;
    margin-top: 20px;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const ProfileCard = styled.div`
  background-color: #FF8A65;
  padding: 10px 20px; 
  text-align: center;
  border-radius: 8px;
  width: 100%;
  height: 60vh;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; 

  &::after {
    content: '';
    width: 100%;
    height: 50%;
    background-color: #4DD0E1; 
    position: absolute;
    bottom: 0;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    z-index: 0; 
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }
`;

const ProfilePic = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
  z-index: 1; 
`;

const ProfileName = styled.h2`
  margin: 0;
  font-family: 'Neurial Grotesk';
  font-weight: bolder;
  font-size: 1.5rem;
  z-index: 1;
`;

const ProfileInfo = styled.p`
  position: relative;
  margin: 1;
  font-size: 1.2rem;
  font-family: 'Neurial Grotesk';
  z-index: 1;
`;

const ProfileLinks = styled.div`
  display: flex;
  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;
  flex-direction: column;
  z-index: 1;
`;

const ProfileLink = styled.a`
  font-size: 1.5rem;
  color: #000;
  text-decoration: none;
  margin: 5px 0;
  font-weight: bold;
  margin-top: 40px;
  z-index: 1;
`;

const Post = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
`;

const PostProfilePic = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const PostImage = styled.img`
  width: 100%;
  height: auto;
  margin-top: 10px;
  border-radius: 8px;
`;

const PostActions = styled.div`
  margin-top: 10px;
  display: flex; 

  img {
    width: 35px; 
    height: 30px; 
    margin-right: 10px; 
    cursor: pointer;
    
    &:hover {
      opacity: 0.8; 
    }
  }
`;

  
  const NomeUsuarioPost = styled.h3`
  font-family: 'Neurial Grotesk';
  font-size: 1.2rem;
  font-weight: bolder;
  `
 
  const Descricaopost = styled.p`
   font-family: 'Neurial Grotesk';
  font-size: 1.1rem;
  font-weight: bolder;
  `

function Networking() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <Header />

      <PageContainer>
        <SearchBar>
          <img
            src={PedroOliveira}
            alt="Foto do usuário"
            className="user-photo"
            onClick={toggleMenu}
          />
          <input type="text" placeholder="Faça uma publicação" />
          <DropdownMenu isOpen={isMenuOpen}>
            <a href="/Profile">Visualizar seu perfil</a>
            <a href="/">Ver suas conexões</a>
          </DropdownMenu>
        </SearchBar>

        <MainContent>
          <PostsContainer>
            <Post>
              <PostHeader>
                <PostProfilePic src={PedroOliveira} alt="Felix Alexandre" />
                <NomeUsuarioPost>Felix Alexandre</NomeUsuarioPost>
              </PostHeader>
              <PostImage src={postImage} alt="Post Image" />
              <Descricaopost>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</Descricaopost>
              <PostActions>
                <img src={likeIcon} alt="Curtir" />
                <img src={commentIcon} alt="Comentar" />
                <img src={shareIcon} alt="Compartilhar" />
              </PostActions>
            </Post>

            <Post>
              <PostHeader>
                <PostProfilePic src={PedroOliveira} alt="Felix Alexandre" />
                <NomeUsuarioPost>Felix Alexandre</NomeUsuarioPost>
              </PostHeader>
              <PostImage src={postImage} alt="Post Image" />
              <Descricaopost>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</Descricaopost>
              <PostActions>
                <img src={likeIcon} alt="Curtir" />
                <img src={commentIcon} alt="Comentar" />
                <img src={shareIcon} alt="Compartilhar" />
              </PostActions>
            </Post>

            <Post>
              <PostHeader>
                <PostProfilePic src={PedroOliveira} alt="Felix Alexandre" />
                <NomeUsuarioPost>Felix Alexandre</NomeUsuarioPost>
              </PostHeader>
              <PostImage src={postImage} alt="Post Image" />
              <Descricaopost>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</Descricaopost>
              <PostActions>
                <img src={likeIcon} alt="Curtir" />
                <img src={commentIcon} alt="Comentar" />
                <img src={shareIcon} alt="Compartilhar" />
              </PostActions>
            </Post>
            
          </PostsContainer>

          <ProfileSidebar>
            <ProfileCard>
              <ProfilePic src={PedroOliveira} alt="Pedro Oliveira" />
              <ProfileName>Pedro Oliveira</ProfileName>
              <ProfileInfo>Estudante da Fundação Escola de Comércio Álvares Penteado</ProfileInfo>
              <ProfileLink href="/profile">Visualizar seu perfil</ProfileLink>
              <ProfileLinks>Minhas Conexões</ProfileLinks>
            </ProfileCard>
          </ProfileSidebar>
        </MainContent>
      </PageContainer>

      <Footer />
    </div>
  );
}

export default Networking;
