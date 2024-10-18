import React from 'react';
import { Overlay, PopupContainer } from './style';
import { IPopUpProps } from './type';

const Popup: React.FC<IPopUpProps> = ({ message, onClose }) => {
    return (
      <Overlay>
        <PopupContainer>
          <h2>{message}</h2>
          <button onClick={onClose}>Fechar</button>
        </PopupContainer>
      </Overlay>
    );
  };
  
  export { Popup };