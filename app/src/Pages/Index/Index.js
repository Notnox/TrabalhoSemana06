import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios'
import './Index.css';
import ComponentsCard from '../../Components/Card/Card';

const PagesIndex = () => {

    const [exibirIndex, setExibirIndex] = useState(true)
    const [processos, setProcessos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/processos?_embed=interessados')
            .then((response) => {
                setProcessos(response.data)
            });
    }, [])

    return (
        <Fragment>
            {exibirIndex &&
                <div className='PagesIndex__Corpo'>
                    <h1 className='PagesIndex__h1'>Busca de processos</h1>
                    <div className='PagesIndex__pesquisa'>
                        <input
                            placeholder='Pesquise por uma informação do processo'
                            className='PagesIndex__Input'
                        />
                        <a
                            className='PagesIndex__lupa'
                            onClick={() => { setExibirIndex(false) }}
                        >🔎</a>
                    </div>
                    <h2 className='PagesIndex__h2'>
                        Você pode criar um novo processo <a href='/cadastro'
                            className='PagesIndex__link'
                        >
                            clicando aqui
                        </a>
                    </h2>
                </div>
            }
            {!exibirIndex &&
                <div>
                    <header className='PagesIndex__Busca__corpo'>
                        <span
                            className='PagesIndex__Busca__span'
                            onClick={() => { setExibirIndex(true) }}
                        >
                            Busca de processos</span>
                        <div className='PagesIndex__pesquisa'>
                            <input
                                placeholder='Pesquise por uma informação do processo'
                                className='PagesIndex__Input'
                            />
                            <a
                                className='PagesIndex__lupa'
                            >🔎</a>
                        </div>
                        <button className='PagesIndex__Busca__button'>NOVO</button>
                    </header>
                    <section className='PagesIndex__Busca__section'>
                        {processos.map((processo) => (
                            <ComponentsCard processo={processo} />
                        ))}
                    </section>
                </div>
            }
        </Fragment>
    );
}

export default PagesIndex;