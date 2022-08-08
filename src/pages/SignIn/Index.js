import jwt from "jsonwebtoken";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/Container";
import { Button, ButtonsContainer, Form, Input } from "../../components/FormsComponents/Index";
import * as api from "../../services/api";
import { Title } from "../Evaluate/Styles";

const SignIn = () => {
  const navigate = useNavigate();

  if (localStorage.getItem("token")) navigate("/");

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [buttonText, setButtonText] = useState("Entrar");
  const [userData, setUserData] = useState({
    nome: "",
    senha: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setButtonDisabled(true);
      setButtonText("Entrando...");
      const token = await api.signIn(userData);
      console.log(token);
      setButtonDisabled(false);
      setButtonText("Entrar");
      localStorage.setItem("token", token.data);
      const decodedToken = jwt.decode(token.data);
      console.table(decodedToken.avaliadorId);
      localStorage.setItem("avaliadorId", decodedToken.avaliadorId);
      localStorage.setItem("avaliador", userData.nome);
      navigate("/");
    } catch (error) {
      setButtonDisabled(false);
      setButtonText("Entrar");
      return alert("Usuário ou senha inválido(s)");
    }
  }

  const handleChange = ({ target }) => setUserData({ ...userData, [target.name]: target.value });

  return (
    <Container>
      <Title>Entrar</Title>
      <Form onSubmit={handleSubmit}>
        <Input required name="nome" onChange={(e) => handleChange(e)} type="text" placeholder="Nome" />
        <Input required name="senha" onChange={(e) => handleChange(e)} type="password" placeholder="Senha" />
        <ButtonsContainer>
          <Button disabled={buttonDisabled} onClick={() => navigate("/sign-up")} buttonColor="#DD284F">Cadastrar</Button>
          <Button disabled={buttonDisabled} type='submit' buttonColor="#00549F">{buttonText}</Button>
        </ButtonsContainer>
      </Form>
    </Container>
  );
};

export default SignIn;