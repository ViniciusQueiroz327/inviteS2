import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { Main, MainWrapper } from './style';
import { useNavigate } from 'react-router-dom';
import { Popup } from '../../components/PopUp';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const [buttonPosition, setButtonPosition] = useState<{ translateX: number; translateY: number }>({ translateX: 0, translateY: 0 });
  const [clickCount, setClickCount] = useState(0);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isPopupVisibleAgain, setIsPopupVisibleAgain] = useState(false);

  const handleYesClick = () => {
    navigate('/Accepted');
  };

  const handleNoClick = () => {
    const newTranslateX = Math.random() * 60 - 30;
    const newTranslateY = Math.random() * 60 - 30;
    setButtonPosition({
      translateX: newTranslateX,
      translateY: newTranslateY,
    });

    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount === 11) {
      setIsPopupVisibleAgain(true);
    } else if (newCount === 6) {
      setIsPopupVisible(true);
    }
  };

  const handleClosePopup = () => {
    if (clickCount === 11) {
      setClickCount(0); 
    }
    setIsPopupVisible(false);
    setIsPopupVisibleAgain(false);
  };

  return (
    <MainWrapper>
      <h1>Aceita sair comigo?🤗</h1>
      <Main>
        <Button title='Sim' onClick={handleYesClick} />
        <div
          style={{
            transform: `translate(${buttonPosition.translateX}vw, ${buttonPosition.translateY}vh)`,
            transition: 'transform 0.5s ease',
            position: 'relative',
          }}
        >
          <Button title='Não' onClick={handleNoClick} />
        </div>
      </Main>
      {isPopupVisible && (
        <Popup message="Você realmente não quer sair comigo? 😢" onClose={handleClosePopup} />
      )}
      {isPopupVisibleAgain && (
        <Popup message="POR QUÊÊÊÊÊ? 😭" onClose={handleClosePopup} />
      )}
    </MainWrapper>
  );
};

export { Home };
