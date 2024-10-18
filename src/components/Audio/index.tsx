import React, { useEffect, useRef, useState } from 'react';
import { Buttons } from './style'

const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const initialVolume = 0.05;

  const handlePlayMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.error('Erro ao reproduzir a música:', error);
      });
    }
  };

  const handlePauseMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = initialVolume;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <div style={{ backgroundColor: "#e66cd9" }}>
      <audio ref={audioRef} loop preload="auto">
        <source src="/audio/treasure.mp3" type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
      <div>
        <Buttons onClick={handlePlayMusic} disabled={isPlaying}>
          Tocar Música
        </Buttons>
        <Buttons onClick={handlePauseMusic} disabled={!isPlaying}>
          Parar Música
        </Buttons>
      </div>
    </div>
  );
};

export { BackgroundMusic };
