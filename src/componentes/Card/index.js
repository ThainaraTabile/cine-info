import styles from './Card.module.css';
import React, { useEffect, useState } from "react";
import { urlBase, chaveApi } from "../../api/config-api";
import MovieCard from "../MovieCard";

const Card = () => {
    const [filmes, setFilmes] = useState([]);

    const buscarFilmes = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setFilmes(data.results);
    }
    useEffect(() => {
        const filmesUrl = `${urlBase}/top_rated?${chaveApi}`
        buscarFilmes(filmesUrl)
    }, []);

    return (
        <section className={styles.container}>
            <div className={styles.colunas}>

                {filmes.length > 0 && filmes.map((filme) => <div className={styles.teste}><MovieCard key={filme.id} filme={filme} /> </div>)}
            </div>
        </section>
    )
};

export default Card;
