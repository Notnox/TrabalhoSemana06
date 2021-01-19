import React, { Fragment } from 'react';

const PagesIndex = () => {
    return (
        <Fragment>
            <h1>Busca de processos</h1>
            <div>
                <input placeholder='Pesquise por uma informação do processo' />🔎
            </div>
            <h2>
                Você pode criar um novo processo 
                <a>clicando aqui</a>
            </h2>
        </Fragment>
    );
}

export default PagesIndex;