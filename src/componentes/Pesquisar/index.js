import styles from './Pesquisar.module.css';
import { BiSearchAlt2 } from 'react-icons/bi'
import { useState } from 'react';
import { filtrarPorTitulo } from '../../api/config-api';
import { useEffect } from 'react';

import { FaStar } from 'react-icons/fa';

function Pesquisar() {

    const [tituloInput, setTituloInput] = useState([]);
    const [filmesFiltrados, setFilmesFiltrados] = useState([]);

    const aoEnviar = (e) => {
        e.preventDefault();
        if (!tituloInput) return
        setTituloInput('');
    }



    useEffect(() => {
        const buscarFilmesPorTitulo = async () => {
            try {
                const filmesData = await filtrarPorTitulo(tituloInput);
                setFilmesFiltrados(filmesData);
            } catch (error) {
                console.error('Erro ao obter filmes!');
            }
        };
        buscarFilmesPorTitulo();
    }, [tituloInput]);


    return (
        <div className={styles.pesquisar}>
            <form onSubmit={aoEnviar}>
                <input
                    className={styles.input}
                    placeholder='Pesquisar pelo nome'
                    onChange={(e) => setTituloInput(e.target.value)}
                    value={tituloInput}

                />
                <button type='submit' className={styles.btnIcon}>
                    <span className={styles.icon}>
                        <BiSearchAlt2 size={30} />
                    </span>
                </button>
            </form>
            <div>
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
        </div>
    )
}

export default Pesquisar;


