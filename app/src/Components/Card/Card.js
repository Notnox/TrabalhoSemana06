import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'
import './Card.css'

const ComponentsCard = ({ processo }) => {

    const [exibirCard, setExibirCard] = useState(false)
    const [deleteCard, setDeleteCard] = useState(false)
    const history = useHistory()

    const onClickDelete = () => {
        const response = window.confirm(`Deseja excluir o processo ${processo.numero}?`)

        if (response) {
            axios.delete(`http://localhost:5000/processos/${processo.id}?_embed=interessados`)
                .then(() => {
                    setDeleteCard(true)
                })
        }
    }

    const onClick = () => {
        if (exibirCard) { setExibirCard(false) } else { setExibirCard(true) }
    }

    useEffect(() => {
        if (deleteCard) {
            window.location.reload();
            alert('Processo foi removido.')
        }
    }, [deleteCard])

    return (
        <div className='conjuntoCards'>
            <article className='Card__article' onClick={onClick}>
                <header>
                    {!exibirCard && <img className='Card__image' alt='' />}
                </header>
                <section className='Card__section'>
                    <label className='Card__label'>
                        <h3>Número</h3>
                        <span>{processo.numero}</span>
                    </label>
                    <label className='Card__label'>
                        <h3>Assunto</h3>
                        <span>{processo.assunto}</span>
                    </label>
                    <label className='Card__label'>
                        <h3>Interessado</h3>
                        <div className='Card__Interessados'>
                            {processo.interessados.map((interessado) => (
                                <span>{interessado.nome}</span>
                            ))}
                        </div>
                    </label>
                    {!exibirCard &&
                        <label className='Card__label'>
                            <h3>Descrição</h3>
                            <span>{processo.descricao}</span>
                        </label>}
                </section>
            </article>
            {exibirCard &&
                <div className='Card__Detalhado__Corpo'>
                    <header className='Card__Detalhado__header'>
                        <img className='Card__image' alt='' />
                        <div className='Card__Detalhado__header__geral'>
                            <div className='Card__Detalhado__header__superior'>
                                <label>
                                    <h2>Processo</h2>
                                    <span>{processo.numero}</span>
                                </label>
                                <label>
                                    <h2>Data</h2>
                                    <span>{processo.data}</span>
                                </label>
                            </div>
                            <div className='Card__Detalhado__header__inferior'>
                                <label>
                                    <h2>Assunto</h2>
                                    <span>{processo.assunto}</span>
                                </label>
                            </div>
                        </div>
                    </header>
                    <section className='Card__Detalhado__section'>
                        <div>
                            <label className='Card__Detalhado__section__label'>
                                <h2>Interessados</h2>
                                {processo.interessados.map((interessado) => (
                                    <span>{interessado.nome}</span>
                                ))}
                            </label>
                        </div>
                        <div>
                            <label className='Card__Detalhado__section__label'>
                                <h2>Descrição</h2>
                                <span>{processo.descricao}</span>
                            </label>
                        </div>
                    </section>
                    <footer className='Card__Detalhado__footer'>
                        <Link to={`/edit/${processo.id}`}>
                            <button className='Card__Detalhado__button__Editar'>EDITAR</button>
                        </Link>
                        <button className='Card__Detalhado__button__Remover' onClick={onClickDelete}>REMOVER</button>
                    </footer>
                </div>
            }
        </div>
    );
}

export default ComponentsCard;