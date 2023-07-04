import Card from "../Card";
import styles from './FilmesFiltrados.module.css';
import { obterFilmes } from '../../api/config-api';
import React, { useEffect, useState } from 'react';

const FilmesFiltrados = ({ genero, titulo }) => {
    const [filmes, setFilmes] = useState([]);
    const [mensagemResultado, setMensagemResultado] = useState('');

    // const exibirResultado = (titulo) => {
    //     const mensagem = `Esse é o resultado para: ${titulo}.`;
    //     setMensagemResultado(mensagem);
    //     if (genero === '') {
    //         setMensagemResultado('')
    //     }
    // };

    // const exibirMsgNenhumResultado = (titulo) => {
    //     const mensagem = `Ops, não encontramos nenhum filme com o título ${titulo}.`;
    //     setMensagemResultado(mensagem);
    // };

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
            <Card filmes={filmes} />
        </div>
    )
};

export default FilmesFiltrados;





