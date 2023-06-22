import React from 'react';
import styles from './Rodape.module.css';

export default function Rodape() {
    return (
        <footer data-testid='footer' className={styles.footer}>
            <img src='./imagens/img-rodape.png' alt='Saco de pipoca' className={styles.imgFooter} />
        </footer>
    );
};
