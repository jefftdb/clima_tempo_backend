import React, { useState, useEffect } from 'react';
import { Tempo } from './Tempo';  // Certifique-se de que o caminho está correto

export const Clima = () => {
  const [dadosClima, setDadosClima] = useState(null);
  const [cidade, setCidade] = useState('Rio do Sul');

  useEffect(() => {
    if (!cidade) return;

    // Fazer a requisição com o filtro da cidade
    fetch(`http://127.0.0.1:8000/obter-clima/?cidade=${encodeURIComponent(cidade)}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          const registro = data[0]; // Usa o primeiro registro
          setDadosClima({
            cidade: registro.cidade,
            temperatura: {
              temp: registro.descricao_temp,
              max: registro.temp_max,
              min: registro.temp_min,
            },
          });
        } else {
          setDadosClima(null); // Sem dados para a cidade
        }
      })
      .catch((error) => console.error('Erro ao buscar os dados:', error));
  }, [cidade]);

  const handleCidadeChange = (novaCidade) => {
    setCidade(novaCidade);
  };

  return (
    <div>
      <input
        type="text"
        value={cidade}
        onChange={(e) => handleCidadeChange(e.target.value)}
        placeholder="Digite a cidade"
      />
      {dadosClima ? (
        <div>
          <h1>{dadosClima.cidade}</h1>
          <p>Clima:{dadosClima.temperatura.temp}</p>
          <p>Temperatura:{dadosClima.temperatura.max} °C</p>
          <p>Máxima: {dadosClima.temperatura.max}°C</p>
          <p>Mínima: {dadosClima.temperatura.min}°C</p>
        </div>

      ) : (
        <p>Nenhum dado encontrado para a cidade "{cidade}"</p>
      )}
    </div>



  );
};
