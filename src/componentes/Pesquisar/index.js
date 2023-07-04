import styles from './Pesquisar.module.css';
import { BiSearchAlt2 } from 'react-icons/bi'
import { useState } from 'react';

function Pesquisar({ aoBuscarPorTitulo }) {
    const [tituloInput, setTituloInput] = useState('');
    const capitalizeTexto = (texto) => {
        const palavras = texto.split(' ');
        const palavrasFormatadas = palavras.map((palavra) => {
            return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
        });
        return palavrasFormatadas.join(' ');
    };

    const handleChange = (e) => {
        const textoFormatado = capitalizeTexto(e.target.value);
        setTituloInput(textoFormatado);
    };
    const aoEnviar = (e) => {
        e.preventDefault();
        aoBuscarPorTitulo(tituloInput);
        setTituloInput('');
    };

    return (
        <>
            <div className={styles.pesquisar}>
                <form onSubmit={aoEnviar}>
                    <input
                        className={styles.input}
                        placeholder='Pesquisar pelo nome'
                        onChange={handleChange}
                        value={tituloInput}
                    />
                    <button type='submit' className={styles.btnIcon}>
                        <span className={styles.icon}>
                            <BiSearchAlt2 size={30} />
                        </span>
                    </button>
                </form>
            </div>

        </>

    );
}

export default Pesquisar;




// import styles from './Pesquisar.module.css';
// import { BiSearchAlt2 } from 'react-icons/bi'
// import { useState } from 'react';
// import { filtrarPorTitulo } from '../../api/config-api';

// import FilmesFiltrados from '../FilmesFiltrados';

// function Pesquisar({ filmes }) {
//     const [tituloInput, setTituloInput] = useState('');
//     const [filmesFiltrados, setFilmesFiltrados] = useState([]);
//     const [mensagemResultado, setMensagemResultado] = useState('');

//     const capitalizeTexto = (texto) => {
//         const palavras = texto.split(' ');
//         const palavrasFormatadas = palavras.map((palavra) => {
//             return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
//         });
//         return palavrasFormatadas.join(' ');
//     };

//     const handleChange = (e) => {
//         const textoFormatado = capitalizeTexto(e.target.value);
//         setTituloInput(textoFormatado);
//     };

//     const exibirResultado = (titulo) => {
//         const mensagem = `Esse é o resultado para: ${titulo}`;
//         setMensagemResultado(mensagem);
//     };

//     const exibirMensagemNenhumResultado = (titulo) => {
//         const mensagem = `Ops, não encontramos nenhum filme com o título ${titulo}.`;
//         setMensagemResultado(mensagem);
//     };

//     const buscarFilmesPorTitulo = async () => {
//         try {
//             const filmesData = await filtrarPorTitulo(tituloInput);
//             if (filmesData.length > 0) {
//                 setFilmesFiltrados(filmesData);
//                 exibirResultado(tituloInput);
//             } else {
//                 setFilmesFiltrados([]);
//                 exibirMensagemNenhumResultado(tituloInput);
//             }
//         } catch (error) {
//             console.error('Erro ao obter filmes!');
//         }
//     };

//     const aoEnviar = (e) => {
//         e.preventDefault();
//         if (!tituloInput) return;
//         buscarFilmesPorTitulo();
//         setTituloInput('');
//     };

//     return (
//         <>
//             <div className={styles.pesquisar}>
//                 <form onSubmit={aoEnviar}>
//                     <input
//                         className={styles.input}
//                         placeholder='Pesquisar pelo título'
//                         onChange={handleChange}
//                         value={tituloInput}
//                     />
//                     <button type='submit' className={styles.btnIcon}>
//                         <span className={styles.icon}>
//                             <BiSearchAlt2 size={30} />
//                         </span>
//                     </button>
//                 </form>
//             </div>
//             <div className={styles.resultadoPesquisa}>
//                 {mensagemResultado && <h2 className={styles.msgResultado}>{mensagemResultado}</h2>}
//                 {filmes.map((filme) =>
//                     <FilmesFiltrados key={filme.title} filme={filmesFiltrados} />
//                 )}

//             </div>
//         </>

//     );
// }

// export default Pesquisar;
