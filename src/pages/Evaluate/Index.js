import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from "./Styles";
import { Button, Form } from '../../components/FormsComponents/Index';
import { ObsTextArea } from './Styles';
import DropDownList from "../../components/DropDownList/DropDownList";
import * as api from "../../services/api";
import { Input } from '../../components/DropDownList/Styles';

const Evaluate = () => {
    const navigate = useNavigate();
    const ref = useRef();
    const token = localStorage.getItem("token");
    if (!token) navigate("/sign-in");

    const [formData, setFormData] = useState({
        avaliadorId: localStorage.getItem("avaliadorId"),
        candidato: 0,
        orgIdeia: 0,
        TrabEquipe: 0,
        Lideranca: 0,
        Proatividade: 0,
        Criatividade: 0,
        JogoDeCintura: 0,
        Oratoria: 0,
        Postura: 0,
        Seguranca: 0,
        Resiliencia: 0,
        Etica: 0,
        Atencao: 0,
        observacoes: 0
    });

    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [buttonText, setButtonText] = useState("Enviar");
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        api.candidates(token)
            .then(res => {
                setCandidates(res.data);
            })
            .catch(err => {
                alert("Erro ao receber a lista de candidatos");
                setCandidates(["-"]);
            })

    }, [token]);

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {...formData, observacoes: ref.current.value};

        setButtonDisabled(true);
        setButtonText("Enviando ...");

        try {
            await api.evaluate(data, token);
            alert("Avaliação enviada com sucesso!");
            setButtonDisabled(false);
            setButtonText("Enviar");
        } catch (error) {
            setButtonDisabled(false);
            setButtonText("Enviar");
            alert("Oops, algo deu errado!");
        }

    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Input name="candidato" list='candidatos' onChange={(e) => handleChange(e)} placeholder="Candidato" />
                <DropDownList inputName="orgIdeia" handleChange={(e) => handleChange(e)} placeHolderContent={"Organização de ideias"} />
                <DropDownList inputName="TrabEquipe" handleChange={(e) => handleChange(e)} placeHolderContent={"Trabalho em equipe"} />
                <DropDownList inputName="Lideranca" handleChange={(e) => handleChange(e)} placeHolderContent={"Liderança"} />
                <DropDownList inputName="Proatividade" handleChange={(e) => handleChange(e)} placeHolderContent={"Proatividade"} />
                <DropDownList inputName="Criatividade" handleChange={(e) => handleChange(e)} placeHolderContent={"Criatividade"} />
                <DropDownList inputName="JogoDeCintura" handleChange={(e) => handleChange(e)} placeHolderContent={"Jogo de cintura"} />
                <DropDownList inputName="Oratoria" handleChange={(e) => handleChange(e)} placeHolderContent={"Oratória"} />
                <DropDownList inputName="Postura" handleChange={(e) => handleChange(e)} placeHolderContent={"Postura"} />
                <DropDownList inputName="Seguranca" handleChange={(e) => handleChange(e)} placeHolderContent={"Segurança"} />
                <DropDownList inputName="Resiliencia" handleChange={(e) => handleChange(e)} placeHolderContent={"Resiliência"} />
                <DropDownList inputName="Etica" handleChange={(e) => handleChange(e)} placeHolderContent={"Ética"} />
                <DropDownList inputName="Atencao" handleChange={(e) => handleChange(e)} placeHolderContent={"Atençao"} />
                <ObsTextArea ref={ref} name='observacoes' placeholder="Observações sobre candidato"></ObsTextArea>
                <Button disabled={buttonDisabled} type='submit' buttonColor={"#DD284F"}>{buttonText}</Button>
                <datalist id="candidatos">
                    {candidates.length === 0 ? true : candidates.map(({ nome }) => <option key={nome} value={nome}></option>)}
                </datalist>
            </Form>
        </Container>
    );
}

export default Evaluate;