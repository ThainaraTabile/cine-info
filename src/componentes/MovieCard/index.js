import React from "react";
import styles from './MovieCard.module.css'
import { Link } from "react-router-dom";
import { urlImag } from "../../api/config-api";
import { FaStar } from 'react-icons/fa'

const MovieCard = ({ filme, mostrarLink = true }) => {
    return (
        <section className={styles.container}>
            <img src={urlImag + filme.poster_path} alt={filme.title} className={styles.imagem} />
            <div className={styles.titulo}>
                <h2>{filme.title}</h2>
                <span className={styles.span}>
                    <FaStar /> {filme.vote_average}
                </span>
            </div>
            <span className={styles.detalhes}>
                {mostrarLink && <Link to={`/filme/${filme.id}`}>detalhes</Link>}
            </span>

        </section>
    )
}
export default MovieCard;
