import styled from 'styled-components';

export const MainWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const Main = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30vw;
    max-width: 600px;
    height: 80vh;
    padding: 2rem;
    background-color: #d433c4;
    box-shadow: inset 1px 1px 4px 0 #ffa6f6, inset -1px -1px 4px 0 #000000, 1px 1px 4px 0 #000000a4;
    border-radius: 15px;

    form {
        width: 100%;
        height: 100%;
        flex-direction: column;
        align-items: stretch;
    }

    label {
        margin: 0.5rem 0;
        font-weight: bold;
    }

    input, select, textarea {
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-bottom: 2rem;
        width: 100%;
        font-size: 1rem;
    }

    button {
        padding: 0.5rem 1rem;
        background-color: #18bf15;
        color: black;
        border: none;
        box-shadow: inset 1px 1px 6px 0 #54ff52, inset -1px -1px 6px 0 #000000a4, 1px 1px 6px 0 #000000a4;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
        transition: background-color 0.3s;

        &:hover {
            background-color: #0f9c0c;
        }
    }
`;