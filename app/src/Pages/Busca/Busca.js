import React, { Fragment } from 'react';
import ComponentsCard from '../../Components/Card/Card';
import ComponentsUtilsPesquisa from '../../Components/utils/Pesquisa/Pesquisa';

const PagesBusca = () => {
    return (
        <Fragment>
            <header>
                <span>Busca de processos</span>
                <ComponentsUtilsPesquisa />
                <button>NOVO</button>
            </header>
            <section>
                <ComponentsCard />
            </section>
        </Fragment>
    );
}

export default PagesBusca;