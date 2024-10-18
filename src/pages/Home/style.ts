import styled from 'styled-components';

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
`;

export const Main = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    padding: 5rem;

    button {
        margin: 0 10rem;
    }
`;
