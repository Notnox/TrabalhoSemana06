import React from 'react';
import ComponentsUtilsInputbox from '../../Components/utils/Inputbox/Inputbox';
import ComponentsUtilsTextAreabox from '../../Components/utils/TextAreabox/TextAreabox';

const PagesCadastro = () => {
    return (
        <div>
            <div>
                <h1>Cadastro de processo</h1>
                <ComponentsUtilsInputbox
                    texto='Assunto'
                    tipo='text'
                    desc='Informe o assunto do processo'
                />
                <div>
                    <h2>Interessados</h2>
                    <span>Roberto Carlos</span>
                </div>
                <div>
                    <ComponentsUtilsInputbox
                        texto='Novo interessado'
                        tipo='text'
                        desc='Informe o nome do interessado'
                    />
                    <button>ADICIONAR</button>
                </div>
                <ComponentsUtilsTextAreabox 
                    texto='Descrição'
                />
            </div>
            <button>SALVAR</button>
        </div>
    );
}

export default PagesCadastro;