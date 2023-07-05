import Card from "../Card";
import styles from './FilmesFiltrados.module.css';
import { obterFilmes } from '../../api/config-api';
import React, { useEffect, useState } from 'react';
import ListaSuspensa from "../ListaSuspensa";

const FilmesFiltrados = ({ genero, titulo }) => {
    const [filmes, setFilmes] = useState([]);
    const [mensagemResultado, setMensagemResultado] = useState('');
    const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);


    const handleOpcaoSelecionada = (opcao) => {
        setOpcaoSelecionada(opcao);

        if (opcao.value === 'positivos') {
            const filmesOrdenados = [...filmes].sort((a, b) => b.rating - a.rating);
            setFilmes(filmesOrdenados);
        };
        if (opcao.value === 'negativos') {
            const filmesOrdenados = [...filmes].sort((a, b) => a.rating - b.rating);
            setFilmes(filmesOrdenados);
        };
        if (opcao.value === 'aZ') {
            const filmesOrdenados = [...filmes].sort((a, b) => a.title.localeCompare(b.title));
            setFilmes(filmesOrdenados);
        };
        if (opcao.value === 'zA') {
            const filmesOrdenados = [...filmes].sort((a, b) => b.title.localeCompare(a.title));
            setFilmes(filmesOrdenados);
        }



    };


    useEffect(() => {
        const buscarFilmes = async () => {
            const exibirResultado = (titulo) => {
                const mensagem = `Esse é o resultado para: ${titulo}.`;
                setMensagemResultado(mensagem);
                if (genero === '') {
                    setMensagemResultado('')
                }
            };

            const exibirMsgNenhumResultado = (titulo) => {
                const mensagem = `Ops, não encontramos nenhum filme com o título ${titulo}.`;
                setMensagemResultado(mensagem);
            };
            try {
                const filtro = { genero: genero, titulo: titulo };
                console.log(filtro);
                const filmesData = await obterFilmes(filtro);
                setFilmes(filmesData);
                console.log(filmesData)
                if (filmesData.length > 0) {
                    exibirResultado(titulo || genero)
                }
                else {
                    exibirMsgNenhumResultado(titulo);
                }

            } catch (error) {
                console.error('Erro ao obter filmes!', error);
            }
        };
        buscarFilmes();
    }, [genero, titulo, mensagemResultado]);

    return (
        <div className={styles.resultadoPesquisa}>
            {mensagemResultado && <h2 className={styles.msgResultado}>{mensagemResultado}</h2>}
            <ListaSuspensa
                value={opcaoSelecionada}
                onChange={handleOpcaoSelecionada} />
            <Card filmes={filmes} />

        </div>
    )
};

export default FilmesFiltrados;





