import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/Container";
import { Button, ButtonsContainer, Form, Input } from "../../components/FormsComponents/Index";
import * as api from "../../services/api";
import { Title } from "../Evaluate/Styles";

const SignUp = () => {
    const navigate = useNavigate();

    if (localStorage.getItem("token")) navigate("/");

    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [buttonText, setButtonText] = useState("Cadastrar");
    const [userData, setUserData] = useState({
        nome: "",
        senha: "",
        confirmarSenha: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (userData.password !== userData.confirmPassword)
            return alert("As senhas não coincidem!");

        const data = {
            nome: userData.nome,
            senha: userData.senha
        }

        try {
            setButtonDisabled(true);
            setButtonText("Cadastrando...");
            await api.signUp(data);
            setButtonDisabled(false);
            setButtonText("Entrar");
            navigate("/sign-in");
        } catch (error) {
            alert("Ops! Algo inesperado aconteceu!");
            setButtonDisabled(false);
            setButtonText("Cadastrar");
        }
    }

    const handleChange = ({ target }) => {
        setUserData({ ...userData, [target.name]: target.value });
    }

    return (
        <Container>
            <Title>Cadastrar</Title>
            <Form onSubmit={handleSubmit}>
                <Input required name="nome" onChange={(e) => handleChange(e)} type="text" placeholder="Nome" />
                <Input required name="senha" onChange={(e) => handleChange(e)} type="password" placeholder="Senha" />
                <Input required name="confirmarSenha" onChange={(e) => handleChange(e)} type="password" placeholder="Repita sua senha" />
                <ButtonsContainer>
                    <Button disabled={buttonDisabled} onClick={() => navigate("/sign-in")} buttonColor="#DD284F">Entrar</Button>
                    <Button disabled={buttonDisabled} type='submit' buttonColor="#00549F">{buttonText}</Button>
                </ButtonsContainer>
            </Form>
        </Container>
    );
};

export default SignUp;