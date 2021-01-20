import React from 'react';
import ComponentsUtilsPesquisa from '../../Components/utils/Pesquisa/Pesquisa';
import './Index.css';


const PagesIndex = () => {
    return (
        <div className='PagesIndex__Corpo'>
            <h1 className='PagesIndex__h1'>Busca de processos</h1>
            <ComponentsUtilsPesquisa />
            <h2 className='PagesIndex__h2'>
                Você pode criar um novo processo <a href='/cadastro'
                    className='PagesIndex__link'
                >
                    clicando aqui
                </a>
            </h2>
        </div>
    );
}

export default PagesIndex;