import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import ComponentsCard from '../../Components/Card/Card';
import ComponentsUtilsPesquisa from '../../Components/utils/Pesquisa/Pesquisa';
import './Busca.css';

const PagesBusca = () => {
    const history = useHistory();

    const Cadastro = () => {
        history.push('/cadastro')
    };

    return (
        <Fragment>
            <header className='PagesBusca__corpo'>
                <span className='PagesBusca__span'>Busca de processos</span>
                <ComponentsUtilsPesquisa />
                <button className='PagesBusca__button' onClick={Cadastro}>NOVO</button>
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