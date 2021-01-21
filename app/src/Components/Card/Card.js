import React from 'react';
import './Card.css'

const ComponentsCard = ({ processo }) => {
    return (
        <article className='componentsCard__article'>
            <img className='componentsCard__image' alt='projeto'/>
            <table className='componentsCard__table'>
                <tr>
                    <th>Número</th>
                    <th>Assunto</th>
                    <th>Interessado</th>
                    <th>Descrição</th>
                </tr>
                <tr>
                    <th>{processo.numero}</th>
                    <th>{processo.assunto}</th>
                    <th>
                        {processo.interessados.map((interessado) => (
                            <span>{interessado.nome}</span>
                        ))}
                    </th>
                    <th>{processo.descricao}</th>
                </tr>
            </table>
        </article>
    );
}

export default ComponentsCard;