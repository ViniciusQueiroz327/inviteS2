import React, { useState } from 'react';
import { MainWrapper, Main } from './style';

const Accepted: React.FC = () => {
  const [date, setDate] = useState<string>('');
  const [place, setPlace] = useState<string>('');
  const [comments, setComments] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `Dia: ${date} Local: ${place} Detalhes: ${comments || 'Sem observações adicionais.'}`;

    const whatsAppNumber = '5511960910276';
    const whatsAppLink = `https://wa.me/${whatsAppNumber}?text=${formattedMessage}`;

    window.open(whatsAppLink, '_blank');

    setDate('');
    setPlace('');
    setComments('');
  };

  return (
    <MainWrapper>
      <Main>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="date">Dia:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="place">Escolha um local:</label>
            <select
              id="place"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              required
            >
              <option value="">Selecione...</option>
              <option value="opcao1">Casa</option>
              <option value="opcao2">Cinema</option>
              <option value="opcao3">Parque</option>
              <option value="opcao4">Restaurante</option>
            </select>
          </div>
          <div>
            <label htmlFor="comments">Forneça mais detalhes, caso necessário:</label>
            <textarea
              id="comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              rows={4}
            />
          </div>
          <div style={{ textAlign: 'center' }}>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </Main>
    </MainWrapper>
  );
};

export { Accepted };
