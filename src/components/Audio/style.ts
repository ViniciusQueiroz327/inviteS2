import styled from 'styled-components';

export const Buttons = styled.button `
    background-color: #d433c4;
    border: none;
    width: 100px;
    padding: .5rem;
    margin: .3rem .5rem;
    font-weight: 700;
    font-size: .7rem;
    border-radius: 10px;
    box-shadow: inset 1px 1px 4px 0 #ffffff, inset -1px -1px 4px 0 #000000a4, 1px 1px 4px 0 #000000a4;

    &:hover {
        background-color: #c229b2;
        cursor: pointer;
    }
`