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
    // const exibirResultado = (titulo) => {
    //     const mensagem = `Esse é o resultado para: ${titulo}`;
    //     setMensagemResultado(mensagem);
    // };

    // const exibirMsgNenhumResultado = (titulo) => {
    //     const mensagem = `Ops, não encontramos nenhum filme com o título ${titulo}.`;
    //     setMensagemResultado(mensagem);
    // };
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
