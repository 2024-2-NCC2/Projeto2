import React from "react";
import styled from "styled-components";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import PedroOliveira from '../assets/PedrOliveira.png';
import postImage from '../assets/postImagem.png';
import likeIcon from '../assets/like.svg';
import commentIcon from '../assets/comment.svg';
import shareIcon from '../assets/share.svg';
import edit from '../assets/edit.svg'

const ProfileCard = styled.section`
  background-color: #fff;
  color: #333;
  display: flex;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  align-items: center;
  padding: 2rem;
  margin: 2rem auto;
  border-radius: 10px;
  max-width: 800px;
  position: relative;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-right: 1.5rem;
`;

const EditProfileButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const PostsContainer = styled.div`
  width: 50%; 
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Post = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
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
const NomeUsuario = styled.h2`
  font-family: 'Neurial Grotesk';
  font-size: 2.0rem;
  font-weight: bolder;
  `
  const NomeUsuarioPost = styled.h3`
  font-family: 'Neurial Grotesk';
  font-size: 1.2rem;
  font-weight: bolder;
  `
  const DescricaoPerfilUsuario = styled.p`
  font-family: 'Neurial Grotesk';
  font-size: 1.0rem;
  `
  const Descricaopost = styled.p`
   font-family: 'Neurial Grotesk';
  font-size: 1.1rem;
  font-weight: bolder;
  `
  const EditImg = styled.img`
   width: 27px;
   height: 27px;
  `

function Profile() {
  return (
    <div>
      <Header />

      <ProfileCard>
        <ProfileImage src={PedroOliveira} alt="Foto do perfil" />
        <div>
          <NomeUsuario>Pedro Oliveira Guedes</NomeUsuario>
          <DescricaoPerfilUsuario>Aluno graduando em Ciência da Computação na Instituição de ensino Fundação Escola de Comércio Álvares Penteado</DescricaoPerfilUsuario>
        </div>
        <EditProfileButton>
          <EditImg src={edit} alt="Editar perfil" />
        </EditProfileButton>
      </ProfileCard>

      <PostsContainer>
        {[1, 2, 3].map((_, index) => (
          <Post key={index}>
            <PostHeader>
              <PostProfilePic src={PedroOliveira} alt="Felix Alexandre" />
              <NomeUsuarioPost>Pedro Oliveira</NomeUsuarioPost>
            </PostHeader>
            <PostImage src={postImage} alt="Post Image" />
            <Descricaopost>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</Descricaopost>
            <PostActions>
              <img src={likeIcon} alt="Curtir" />
              <img src={commentIcon} alt="Comentar" />
              <img src={shareIcon} alt="Compartilhar" />
            </PostActions>
          </Post>
        ))}
      </PostsContainer>

      <Footer />
    </div>
  );
}

export default Profile;
