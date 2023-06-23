import { obterListaDeFilmes } from '../../api/config-api';
import styles from './Card.module.css';
import React, { useEffect, useState } from "react";
import { FaStar } from 'react-icons/fa'
// import { urlBase, chaveApi } from "../../api/config-api";
// import MovieCard from "../MovieCard";

// const Card = () => {
//     const [filmes, setFilmes] = useState([]);

//     const buscarFilmes = async (url) => {
//         const res = await fetch(url);
//         const data = await res.json();
//         setFilmes(data.results);
//     }
//     useEffect(() => {
//         const filmesUrl = `${urlBase}/top_rated?${chaveApi}`
//         buscarFilmes(filmesUrl)
//     }, []);

//     return (
//         <section className={styles.container}>
//             <div className={styles.colunas}>

//                 {filmes.length > 0 && filmes.map((filme) => <div className={styles.teste}><MovieCard key={filme.id} filme={filme} /> </div>)}
//             </div>
//         </section>
//     )
// };

// export default Card;



const Card = ({ generoSelecionado }) => {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const buscarFilmes = async () => {
            try {
                const filmesData = await obterListaDeFilmes();
                setFilmes(filmesData);
            } catch (error) {
                console.error('Erro ao obter filmes!');
            }
        };
        buscarFilmes();
    }, []);

    const filmesFiltrados =
        generoSelecionado && generoSelecionado !== 'todos'
            ? filmes.filter((filme) => filme.genre === generoSelecionado)
            : filmes;

    return (
        <section className={styles.container}>
            <div className={styles.colunas}>
                {filmesFiltrados.map((filme) => (
                    <div className={styles.cardsFilme} key={filme.title}>
                        <img src={filme.image} alt={filme.title} className={styles.imagem} />
                        <div className={styles.titulo}>
                            <h2>{filme.title}</h2>
                        </div>
                        <div className={styles.descricao}>
                            <p>{filme.description}</p>
                            <p>Genêro: {filme.genre}</p>
                        </div>
                        <div className={styles.info}>
                            <span>
                                <FaStar /> {filme.rating}
                            </span>
                            <span>Duração:{filme.duration}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Card;
