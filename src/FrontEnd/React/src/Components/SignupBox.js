import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios'; 


const SignupBoxContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 50px;
  height: 80vh;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 550px ) {
 width: 400px;
 }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333333;
  margin-bottom: 20px;
  text-align: center;
`;

const InputContainer = styled.div`
  margin-bottom: 12px;
  width: 100%;
  display: flex;
  gap: 10px;
`;

const HalfInput = styled.input`
  flex: 1;
  padding: 14px;
  border: 1px solid #f25157;
  border-radius: 12px;
  font-size: 14px;
  box-sizing: border-box;

  &:focus {
    border-color: #5a1719;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #16a8ab;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0f8685;
  }
`;

function SignupBox() {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     
      const response = await axios.post('http://localhost:3000/auth/register', formData);
      alert(response.data.message); 
      console.log('Dados enviados:', formData);

      navigate('/home');
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error.response?.data || error.message);
      console.log('Dados enviados:', formData);

      alert('Ocorreu um erro ao cadastrar. Tente novamente.');
    }
  };

  return (
    <SignupBoxContainer>
      <Form onSubmit={handleSubmit}>
        <Title>Cadastre-se na nossa comunidade</Title>

        <InputContainer>
          <HalfInput
            type="text"
            name="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleInputChange}
            required
          />
          <HalfInput
            type="text"
            name="sobrenome"
            placeholder="Sobrenome"
            value={formData.sobrenome}
            onChange={handleInputChange}
            required
          />
        </InputContainer>

        <InputContainer>
          <HalfInput
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </InputContainer>

        <InputContainer>
          <HalfInput
            type="password"
            name="senha"
            placeholder="Senha"
            value={formData.senha}
            onChange={handleInputChange}
            required
          />
        </InputContainer>

        <SubmitButton type="submit">Cadastrar</SubmitButton>
      </Form>
    </SignupBoxContainer>
  );
}

export default SignupBox;
