import styled from "styled-components";

export const Title = styled.h2`
    font-size: 2.5em;
    color: white;
    position: absolute;
    top: 1em;
    font-family: 'Titillium Web', sans-serif;
`;

export const ObsTextArea = styled.textarea`
    min-width: 80%;
    min-height: 10%;
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

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(45deg, #00549F 0%, #082B61 35%, #DD284F 100%);
    flex-direction: column;
    text-align: center;
    padding-top: 4em;
    padding-bottom: 4em;
`;