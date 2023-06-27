import styles from './Menu.module.css';

const Menu = ({ aoSelecionarGenero }) => {
    const clickSelecionaGenero = (genero) => {
        aoSelecionarGenero(genero);
    };

    return (
        <section className={styles.menu}>
            <div className={styles.coluna}>
                <span onClick={() => clickSelecionaGenero('Animação')}>Animação</span>
                <span onClick={() => clickSelecionaGenero('Comédia')}>Comédia</span>
            </div>
            <div className={styles.coluna}>
                <span onClick={() => clickSelecionaGenero('Drama')}>Drama</span>
                <span onClick={() => clickSelecionaGenero('Ficção Científica')}>Ficção Científica</span>
            </div>
            <div className={styles.coluna}>
                <span onClick={() => clickSelecionaGenero('')}>Todos</span>
            </div>
        </section>
    );
};

export default Menu;