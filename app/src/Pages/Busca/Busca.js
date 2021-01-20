import React, { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ComponentsCard from '../../Components/Card/Card';
import ComponentsUtilsPesquisa from '../../Components/utils/Pesquisa/Pesquisa';
import './Busca.css';
import axios from 'axios';

const PagesBusca = () => {
    const history = useHistory();
    const [processos, setProcessos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/processos?_embed=interessados')
            .then((response) => {
                setProcessos(response.data)
            });
    }, [])

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
                {processos.map((processo) =>(
                    <ComponentsCard processo={processo} />
                ))}
            </section>
        </Fragment>
    );
}

export default PagesBusca;