import styles from './Pesquisar.module.css';
import { BiSearchAlt2 } from 'react-icons/bi'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Pesquisar() {

    const [pesquisar, setPesquisa] = useState('');
    const navigate = useNavigate();

    const aoEnviar = (e) => {
        e.preventDefault();
        if (!pesquisar) return
        navigate(`/search?q=${pesquisar}`);
        setPesquisa('');
    }

    return (
        <div className={styles.pesquisar}>
            <form onSubmit={aoEnviar}>
                <input
                    className={styles.input}
                    placeholder='Pesquisar pelo nome'
                    onChange={(e) => setPesquisa(e.target.value)}
                    value={pesquisar}
                />
                <button type='submit' className={styles.btnIcon}>
                    <span className={styles.icon}>
                        <BiSearchAlt2 size={30} />
                    </span>
                </button>
            </form>
        </div>
    )
}

export default Pesquisar;