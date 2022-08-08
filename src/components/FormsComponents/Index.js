import styled from "styled-components";

export const Form = styled.form`
    width: 80%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
`;

export const Input = styled.input`
    width: 80%;
    height: 5%;
    padding: 18px 15px;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    border-radius: 5px;
    border: none;
    ::placeholder{
        color: #000000;
    }
`;

export const Button = styled.button`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background: ${props => props.buttonColor};
    border-radius: 5px;
    border: none;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    margin-top: 0.8em;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    margin-top: 1em;
`;