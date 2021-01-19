import React from 'react';
import './Pesquisa.css'

const ComponentsUtilsPesquisa = () => {
    return (
        <div className='PagesIndex__pesquisa'>
            <input placeholder='Pesquise por uma informação do processo' className='PagesIndex__Input' />
            <a className='PagesIndex__lupa' href='/processos'>🔎</a>
        </div>
    );
}

export default ComponentsUtilsPesquisa;