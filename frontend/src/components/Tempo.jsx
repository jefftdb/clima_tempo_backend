import React from 'react';

export const Tempo = ({ add }) => {
  return (
    <div>
      <h2>Clima em {add.cidade}</h2>
      <p><strong>Temperatura mínima:</strong> {add.temperatura_min}</p>
      <p><strong>Temperatura máxima:</strong> {add.temperatura_max}</p>
      <p><strong>Clima:</strong> {add.clima}</p>
      <p><strong>Descrição:</strong> {add.descricao_temp}</p>
    </div>
  );
};