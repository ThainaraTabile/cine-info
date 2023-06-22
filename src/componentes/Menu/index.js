
import styles from './Menu.module.css';
import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
    return (
        <section className={styles.menu}>
            <div className={styles.coluna}>
                <span>
                    <Link to='/acao'>ação</Link>
                </span>
                <span>
                    <Link to='/comedia'>comédia</Link>
                </span>
            </div>
            <div className={styles.coluna}>
                <span>
                    <Link to='/drama'>drama</Link>
                </span>
                <span>
                    <Link to='/infantil'>infantil</Link>
                </span>
            </div>
            <div className={styles.coluna}>
                <span>
                    <Link to='/todos'>todos</Link>
                </span>

            </div>

        </section>
    );
};

export default Menu;