import React from 'react';
import './Index.css'

const PagesIndex = () => {
    return (
        <div className='PagesIndex__Corpo'>
            <h1 className='PagesIndex__h1'>Busca de processos</h1>
            <div className='PagesIndex__pesquisa'>
                <input placeholder='Pesquise por uma informação do processo' className='PagesIndex__Input' />
                <a className='PagesIndex__lupa'>🔎</a>
            </div>
            <h2 className='PagesIndex__h2'>
                Você pode criar um novo processo <a
                    className='PagesIndex__link'
                >
                    clicando aqui
                </a>
            </h2>
        </div>
    );
}

export default PagesIndex;