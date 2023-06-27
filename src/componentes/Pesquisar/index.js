import styles from './Pesquisar.module.css';
import { BiSearchAlt2 } from 'react-icons/bi'
import { useState } from 'react';
import { filtrarPorTitulo } from '../../api/config-api';
import { FaStar } from 'react-icons/fa';

// function Pesquisar() {

//     const [tituloInput, setTituloInput] = useState([]);
//     const [filmesFiltrados, setFilmesFiltrados] = useState([]);

//     const aoEnviar = (e) => {
//         e.preventDefault();
//         if (!tituloInput) return
//         setTituloInput('');
//     }

//     const capitalizeTexto = (texto) => {
//         //divide o texto em palavras usando o espaço como separador
//         const palavras = texto.split(' ');
//         // itera sobre cada palavra, aplicando a formatação "capitalize"
//         const palavrasFormatadas = palavras.map((palavra) => {
//             return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
//         });
//         return palavrasFormatadas.join(' ');
//     };


//     const handleChange = (e) => {
//         const textoFormatado = capitalizeTexto(e.target.value);
//         setTituloInput(textoFormatado);
//     };


//     useEffect(() => {
//         const buscarFilmesPorTitulo = async () => {
//             try {
//                 const filmesData = await filtrarPorTitulo(tituloInput);
//                 setFilmesFiltrados(filmesData);
//             } catch (error) {
//                 console.error('Erro ao obter filmes!');
//             }
//         };
//         buscarFilmesPorTitulo();
//     }, [tituloInput]);


//     return (
//         <div className={styles.pesquisar}>
//             <form onSubmit={aoEnviar}>
//                 <input
//                     className={styles.input}
//                     placeholder='Pesquisar pelo nome'
//                     onChange={handleChange}
//                     value={tituloInput}

//                 />
//                 <button type='submit' className={styles.btnIcon}>
//                     <span className={styles.icon}>
//                         <BiSearchAlt2 size={30} />
//                     </span>
//                 </button>
//             </form>
//             <div>
//                 {filmesFiltrados.map((filme) => (
//                     <div className={styles.cardsFilme} key={filme.title}>
//                         <img src={filme.image} alt={filme.title} className={styles.imagem} />
//                         <div className={styles.titulo}>
//                             <h2>{filme.title}</h2>
//                         </div>
//                         <div className={styles.descricao}>
//                             <p>{filme.description}</p>
//                             <p>Gênero: {filme.genre}</p>
//                         </div>
//                         <div className={styles.info}>
//                             <span>
//                                 <FaStar /> {filme.rating}
//                             </span>
//                             <span>Duração:{filme.duration}</span>
//                         </div>
//                     </div>
//                 ))}

//             </div>
//         </div>
//     )
// }

// export default Pesquisar;


function Pesquisar() {
    const [tituloInput, setTituloInput] = useState('');
    const [filmesFiltrados, setFilmesFiltrados] = useState([]);
    const [mensagemResultado, setMensagemResultado] = useState('');

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

    const exibirResultado = (titulo) => {
        const mensagem = `Esse é o resultado para: ${titulo}`;
        setMensagemResultado(mensagem);
    };

    const exibirMensagemNenhumResultado = (titulo) => {
        const mensagem = `Ops, não encontramos nenhum filme com o título ${titulo}.`;
        setMensagemResultado(mensagem);
    };

    const buscarFilmesPorTitulo = async () => {
        try {
            const filmesData = await filtrarPorTitulo(tituloInput);
            if (filmesData.length > 0) {
                setFilmesFiltrados(filmesData);
                exibirResultado(tituloInput);
            } else {
                setFilmesFiltrados([]);
                exibirMensagemNenhumResultado(tituloInput);
            }
        } catch (error) {
            console.error('Erro ao obter filmes!');
        }
    };

    const aoEnviar = (e) => {
        e.preventDefault();
        if (!tituloInput) return;
        buscarFilmesPorTitulo();
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
            <div className={styles.resultadoPesquisa}>
                {mensagemResultado && <h2 className={styles.msgResultado}>{mensagemResultado}</h2>}
                {filmesFiltrados.map((filme) => (
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
                                <FaStar /> {filme.rating}
                            </span>
                            <span>Duração:{filme.duration}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>

    );
}

export default Pesquisar;

