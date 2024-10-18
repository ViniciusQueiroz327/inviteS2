import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const PopupContainer = styled.div`
  background: #d433c4;
  padding: 20px;
  border-radius: 15px;
  box-shadow: inset 1px 1px 6px 0 #ffffff, inset -1px -1px 6px 0 #000000a4, 1px 1px 6px 0 #000000a4;
  text-align: center;

  button {
    background-color: #b020a2;
    border-radius: 15px;
    border-style: none;
    box-shadow: inset 1px 1px 4px 0 #ed7be2, inset -1px -1px 4px 0 #000000, 1px 1px 4px 0 #000000a4;
    padding: 10px;
    margin-top: 15px;
    font-size: 1rem;
    font-weight: 700;
  }
`;