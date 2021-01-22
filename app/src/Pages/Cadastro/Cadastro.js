import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import ComponentsUtilsInputbox from '../../Components/utils/Inputbox/Inputbox';
import ComponentsUtilsTextAreabox from '../../Components/utils/TextAreabox/TextAreabox';
import './Cadastro.css';

const num = Math.floor(Math.random() * (9999 - 1000) + 1000);
const dia = new Date().getDate();
const mes = new Date().getMonth();
const ano = new Date().getFullYear();
const dataAtual = `${dia}/${mes + 1}/${ano}`

const initialProcesso = {
    numero: `SOFT ${num}/${ano}`,
    assunto: '',
    descricao: '',
    data: dataAtual
};

const initialInteressados = {
    nome: '',
    processoId: 0
};

const PagesCadastro = () => {

    /* const { id } = useParams(); */
    const history = useHistory();
    const [processo, setProcesso] = useState(initialProcesso);
    const [interessados, setInteressados] = useState([]);
    const [processosAPI, setProcessosAPI] = useState([])
    const [interessado, setInteressado] = useState(initialInteressados);
    
    useEffect(() => {
        axios.get('http://localhost:5000/processos?_embed=interessados')
            .then((response) => {
                setProcessosAPI(response.data)
            });
    }, [])   

    useEffect(() => {
        setInteressado({ ...interessado, processoId: processosAPI.length + 1 });
        initialInteressados.processoId = processosAPI.length + 1 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [processosAPI])   

    const Fechar = () => {
        history.push('/');
    }

    const onChangeProcesso = (ev) => {
        const { name, value } = ev.target;

        setProcesso({ ...processo, [name]: value });
    }

    const onChangeInteressado = (ev) => {
        const { name, value } = ev.target;

        setInteressado({ ...interessado, [name]: value });
        
    }

    const adicionarInteressado = () => {
        if (interessado.nome.length === 0) { return alert('Informe um interessado') };

        setInteressados([...interessados, interessado]);
        setInteressado(initialInteressados);
    }

    const onSubmit = (ev) => {
        ev.preventDefault();    
        if (processo.assunto.length === 0) { return alert('Informe um assunto') };
        if (processo.descricao.length === 0) { return alert('Informe uma descrição') };

        interessados.map((item) => {
            return axios.post('http://localhost:5000/interessados', item)
        });

        axios.post('http://localhost:5000/processos', processo)
            .then(() => {
                history.push('/');
            });
    }

    return (
        <div className='PagesCadastro__div__body'>
            <div className='PagesCadastro__div__corpo'>
                <section>
                    <h1 className='PagesCadastro__h1'>Cadastro de processo</h1>
                    <ComponentsUtilsInputbox
                        texto='Assunto'
                        tipo='text'
                        name='assunto'
                        desc='Informe o assunto do processo'
                        value={processo.assunto}
                        onChange={onChangeProcesso}
                    />
                    <div className='PagesCadastro__div__interessados'>
                        <h2 className='PagesCadastro__h2'>Interessados</h2>
                        {interessados.map((item) => {
                            return <span key={item.nome}>{item.nome}</span>
                        })}
                    </div>
                    <div className='PagesCadastro__div__adicionar'>
                        <ComponentsUtilsInputbox
                            texto='Novo interessado'
                            tipo='text'
                            name='nome'
                            desc='Informe o nome do interessado'
                            value={interessado.nome}
                            onChange={onChangeInteressado}
                        />
                        <button className='PagesCadastro__button__adicionar' onSubmit={null} onClick={adicionarInteressado}>ADICIONAR</button>
                    </div>
                    <ComponentsUtilsTextAreabox
                        texto='Descrição'
                        name='descricao'
                        onChange={onChangeProcesso}
                    />
                </section>
                <aside>
                    <button className='PagesCadastro__button__sair' onClick={Fechar}>x</button>
                    <form onSubmit={onSubmit}>
                        <button className='PagesCadastro__button__salvar' onSubmit={onSubmit}>SALVAR</button>
                    </form>
                </aside>
            </div>
        </div>
    );
}

export default PagesCadastro;