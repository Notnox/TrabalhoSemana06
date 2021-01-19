import React, { Fragment } from 'react';
import ComponentsCard from '../../Components/Card/Card';
import ComponentsUtilsPesquisa from '../../Components/utils/Pesquisa/Pesquisa';
import './Busca.css'

const PagesBusca = () => {
    return (
        <Fragment>
            <header className='PagesBusca__corpo'>
                <span className='PagesBusca__span'>Busca de processos</span>
                <ComponentsUtilsPesquisa />
                <button className='PagesBusca__button'>NOVO</button>
            </header>
            <section>
                <ComponentsCard />
                <ComponentsCard />
                <ComponentsCard />
                <ComponentsCard />
                <ComponentsCard />
                <ComponentsCard />
            </section>
        </Fragment>
    );
}

export default PagesBusca;