// import styles from './Pesquisar.module.css';
// import { BiSearchAlt2 } from 'react-icons/bi'
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Pesquisar() {

//     const [pesquisar, setPesquisa] = useState('');
//     const navigate = useNavigate();

//     const aoEnviar = (e) => {
//         e.preventDefault();
//         if (!pesquisar) return
//         navigate(`/search?q=${pesquisar}`);
//         setPesquisa('');
//     }

//     return (
//         <div className={styles.pesquisar}>
//             <form onSubmit={aoEnviar}>
//                 <input
//                     className={styles.input}
//                     placeholder='Pesquisar pelo nome'
//                     onChange={(e) => setPesquisa(e.target.value)}
//                     value={pesquisar}
//                 />
//                 <button type='submit' className={styles.btnIcon}>
//                     <span className={styles.icon}>
//                         <BiSearchAlt2 size={30} />
//                     </span>
//                 </button>
//             </form>
//         </div>
//     )
// }

// export default Pesquisar;


import styles from './Pesquisar.module.css';
import { BiSearchAlt2 } from 'react-icons/bi'
import { useState } from 'react';
import { obterListaDeFilmes } from '../../api/config-api';
import { useEffect } from 'react';

function Pesquisar() {

    const [pesquisar, setPesquisar] = useState('');

    const aoEnviar = (e) => {
        e.preventDefault();
        if (!pesquisar) return
        setPesquisar('');
    }

    useEffect(() => {
        const buscarFilmes = async () => {
            try {
                const filmesData = await obterListaDeFilmes();
                setPesquisar(filmesData);
            } catch (error) {
                console.error('Erro ao obter filmes!');
            }
        };
        buscarFilmes();
    }, [pesquisar]);

    return (
        <div className={styles.pesquisar}>
            <form onSubmit={aoEnviar}>
                <input
                    className={styles.input}
                    placeholder='Pesquisar pelo nome'
                    onChange={(e) => setPesquisar(e.target.value)}
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


