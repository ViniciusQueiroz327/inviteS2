import styled from 'styled-components';

export const ButtonContainer = styled.button `
    background-color: #d433c4;
    border: none;
    width: 200px;
    padding: .5rem;
    font-weight: 700;
    font-size: 1.5rem;
    font-family: "Krona One", sans-serif;
    border-radius: 15px;
    box-shadow: inset 1px 1px 4px 0 #ffffff, inset -1px -1px 4px 0 #000000a4, 1px 1px 4px 0 #000000a4;

    &:hover {
        background-color: #c229b2;
        cursor: pointer;
    }
`