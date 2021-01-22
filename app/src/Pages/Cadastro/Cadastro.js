import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import Cadastro from '../../Components/Cadastro/Cadastro';

const PagesCadastro = () => {

    const { id } = useParams();
    return (
        <Fragment>
            <Cadastro id={id ? Number.parseInt(id, 10) : null}/>
        </Fragment>
    )
}

export default PagesCadastro;;