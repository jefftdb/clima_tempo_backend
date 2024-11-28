import React, { useState } from 'react'

export const Previsao = ({adicionar, addcidade}) => {
    const [input, setinput] = useState('')
    const [addnovo, setaddnovo] = useState('')

    const clickadicionar = () => {
        adicionar(input)
    };

    const clickcidade = () => {
        addcidade(addnovo)
    }

    return (
        <div>
            <input value={input} onChange={(e) => setinput(e.target.value)} type="text" />
            <button onClick={clickadicionar}>enviar</button>
            <div>
                <input value={addnovo} onChange={(e) => setaddnovo(e.target.value)} type="text" />
                <button onClick={clickcidade}>enviar</button>
            </div>
        </div>
    )
}
