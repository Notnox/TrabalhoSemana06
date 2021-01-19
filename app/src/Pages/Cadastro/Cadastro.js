import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ComponentsUtilsInputbox from '../../Components/utils/Inputbox/Inputbox';
import ComponentsUtilsTextAreabox from '../../Components/utils/TextAreabox/TextAreabox';
import './Cadastro.css'

const PagesCadastro = () => {   

    const { id } = useParams();
    const history = useHistory();

    const Fechar = () => {
        history.push('/')
    };

    return (
        <div className='PagesCadastro__div__body'>
            <div className='PagesCadastro__div__corpo'>
                <section>
                    <h1 className='PagesCadastro__h1'>Cadastro de processo</h1>
                    <ComponentsUtilsInputbox
                        texto='Assunto'
                        tipo='text'
                        desc='Informe o assunto do processo'
                    />
                    <div className='PagesCadastro__div__interessados'>
                        <h2 className='PagesCadastro__h2'>Interessados</h2>
                        <span>Roberto Carlos</span>
                        <span>Roberto Carlos</span>
                        <span>Roberto Carlos</span>
                    </div>
                    <div className='PagesCadastro__div__adicionar'>
                        <ComponentsUtilsInputbox
                            texto='Novo interessado'
                            tipo='text'
                            desc='Informe o nome do interessado'
                        />
                        <button className='PagesCadastro__button__adicionar'>ADICIONAR</button>
                    </div>
                    <ComponentsUtilsTextAreabox
                        texto='Descrição'
                    />
                </section>
                <aside>
                    <button className='PagesCadastro__button__sair' onClick={Fechar}>x</button>
                    <button className='PagesCadastro__button__salvar'>SALVAR</button>
                </aside>
            </div>
        </div>
    );
}

export default PagesCadastro;