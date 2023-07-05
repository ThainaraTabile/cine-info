import React from 'react';
import Select from 'react-select';
import styles from './ListaSuspensa.module.css';

const options = [
    { value: 'positivos', label: 'com mais votos positivos' },
    { value: 'negativos', label: 'com mais votos negativos' },
    { value: 'aZ', label: 'ordenar por título: A-Z' },
    { value: 'zA', label: 'ordenar por título: Z-A' },
];

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: 'var(--dourado)',
        borderColor: 'var(--dourado)',
        cursor: 'pointer',
        outline: 'none',
        borderStyle: 'none'
    }),
    option: (provided) => ({
        ...provided,
        backgroundColor: 'var(--dourado)',
        color: 'var(--fonte-destaque)',
    }),
    placeholder: (provided) => ({
        ...provided,
        color: 'var(--fonte-destaque)',
    }),

};

function ListaSuspensa(props) {
    return (
        <div className={styles.container}>
            <Select
                placeholder='Ordenar os filmes'
                options={options}
                styles={customStyles}
                className={styles.select}
                onChange={(selectedOption) => props.onChange(selectedOption)}
            />
        </div>
    );
}

export default ListaSuspensa;
