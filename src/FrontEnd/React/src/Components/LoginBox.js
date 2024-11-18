import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginBoxContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333333;
  margin-bottom: 20px;
  text-align: center;
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px;
  border: 1px solid #f25157;
  border-radius: 12px;
  font-size: 16px;
  box-sizing: border-box;

  &:focus {
    border-color: #5a1719;
    outline: none;
  }
`;

const ShowPasswordButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #f25157;
  cursor: pointer;
  font-size: 14px;
  padding: 0;
`;

const ForgotPasswordLink = styled.a`
  display: block;
  margin-bottom: 20px;
  color: #f25157;
  text-decoration: none;
  text-align: center;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #f25157;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #be363b;
  }
`;

const JoinContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const JoinLink = styled.a`
  color: #0073b1;
  text-decoration: none;
`;

function LoginBox() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        email_usu: email,
        senha_usu: senha,
      });

     
      localStorage.setItem('token', response.data.token);

     
      navigate('/home');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Email ou senha incorretos');
    }
  };

  const handleRegisterRedirect = () => {
  
    navigate('/cadastro');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);  
  };

  return (
    <LoginBoxContainer>
      <Form onSubmit={handleLogin}>
        <Title>Bem-vindo à nossa comunidade</Title>

        <InputContainer>
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputContainer>

        <InputContainer>
          <Input
            type={showPassword ? "text" : "password"}  
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <ShowPasswordButton type="button" onClick={togglePasswordVisibility}>
            {showPassword ? "Ocultar" : "Mostrar"}
          </ShowPasswordButton>
        </InputContainer>

        <ForgotPasswordLink href="#" onClick={handleRegisterRedirect}>
          Esqueceu a senha?
        </ForgotPasswordLink>

        <SubmitButton type="submit">Entrar</SubmitButton>

        <JoinContainer>
          <p>
            Novo no site?{' '}
            <JoinLink href="#" onClick={handleRegisterRedirect}>
              Cadastre-se
            </JoinLink>
          </p>
        </JoinContainer>
      </Form>
    </LoginBoxContainer>
  );
}

export default LoginBox;
