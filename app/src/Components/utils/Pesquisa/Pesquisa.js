import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Pesquisa.css'

const ComponentsUtilsPesquisa = () => {

    const history = useHistory();
    const [pesquisa, setPesquisa] = useState('')

    const onChange = (ev) => {
        setPesquisa(ev.target.value)
    }

    const onClick = () => {
        if (pesquisa.length === 0) {
            return alert('É necessário informar um valor na barra de pesquisa.')
        }

        history.push('/processos')
    }

    return (
        <div className='PagesIndex__pesquisa'>
            <input
                placeholder='Pesquise por uma informação do processo'
                className='PagesIndex__Input'
                onChange={onChange}
            />
            <a
                className='PagesIndex__lupa'
                onClick={onClick}
            >🔎</a>
        </div>
    );
}

export default ComponentsUtilsPesquisa;