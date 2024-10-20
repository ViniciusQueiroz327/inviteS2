import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        overflow-x: hidden;
        font-family: "Krona One", sans-serif;
        background-color: #e66cd9;
    }
`