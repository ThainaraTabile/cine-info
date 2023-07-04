import styles from './Card.module.css';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const Card = ({ filmes }) => {
    return (
        <section className={styles.container}>
            <div className={styles.colunas}>
                {filmes.map((filme) => (
                    <div className={styles.cardsFilme} key={filme.title}>
                        <img src={filme.image} alt={filme.title} className={styles.imagem} />
                        <div className={styles.titulo}>
                            <h2>{filme.title}</h2>
                        </div>
                        <div className={styles.descricao}>
                            <p>{filme.description}</p>
                            <p>Gênero: {filme.genre}</p>
                        </div>
                        <div className={styles.info}>
                            <span>
                                <FaStar color="var(--dourado)" /> {filme.rating}
                            </span>
                            <span>Duração: {filme.duration}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Card;
