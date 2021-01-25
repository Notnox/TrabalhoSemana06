import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios'
import './Index.css';
import ComponentsCard from '../../Components/Card/Card';

const PagesIndex = () => {

    const [exibirIndex, setExibirIndex] = useState(true)
    const [carregando, setCarregando] = useState(true)
    const [nula, setNulo] = useState(false)
    const [pesquisa, setPesquisa] = useState('')
    const [processos, setProcessos] = useState([])

    useEffect(() => {

        const params = {};
        setCarregando(true)

        if (pesquisa) {
            params.assunto_like = pesquisa
        }

        if (!pesquisa) {
            setExibirIndex(true)
        } else {
            setExibirIndex(false)
            axios.get('http://localhost:5000/processos?_embed=interessados', { params })
            .then((response) => {
                setProcessos(response.data)
                setCarregando(false)
            });
        };
    }, [pesquisa])

    const onChange = (ev) => {
        setPesquisa(ev.target.value)
    }

    const onClick = () => {
        if (!pesquisa) { return alert('É necessário informar algum valor para pesquisa.') }
        setExibirIndex(false)
    }

    return (
        <Fragment>
            {exibirIndex &&
                <div className='PagesIndex__Corpo'>
                    <h1 className='PagesIndex__h1'>Busca de processos</h1>
                    <div className='PagesIndex__pesquisa'>
                        <input
                            placeholder='Pesquise por um assunto do processo'
                            className='PagesIndex__Input'
                            autoFocus
                            onChange={onChange}
                            value={pesquisa}
                        />
                        <button
                            className='PagesIndex__lupa'
                            onClick={onClick}
                            href="#/"
                        >🔎</button>
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
                                placeholder='Pesquise por um assunto do processo'
                                className='PagesIndex__Input'
                                autoFocus
                                onChange={onChange}
                                value={pesquisa}
                            />
                            <button
                                className='PagesIndex__lupa'
                                onClick={onClick}
                                href="#/"
                            >🔎</button>
                        </div>
                        <a href='/cadastro'>
                            <button className='PagesIndex__Busca__button'>NOVO</button>
                        </a>
                    </header>
                    {carregando && <div>Carregando...</div>}
                    {pesquisa.length > 0 &&
                        <section className='PagesIndex__Busca__section'>
                            {processos.map((processo) => (
                                <ComponentsCard processo={processo} />
                            ))}
                        </section>
                    }
                </div>
            }
        </Fragment>
    );
}

export default PagesIndex;