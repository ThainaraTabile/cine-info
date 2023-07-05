// import styles from './ListaSuspensa.module.css';

// function ListaSuspensa() {
//     return (
//         <div className={styles.container}>
//             <select>
//                 <option>selecione para ordenar as avaliações</option>
//                 <option className={styles.opcao}> com mais votos positivos</option>
//                 <option>com mais votos negativos</option>
//             </select>
//         </div>
//     )
// };

// export default ListaSuspensa;

import React from 'react';
import Select from 'react-select';
import styles from './ListaSuspensa.module.css';

const options = [
    { value: 'positivos', label: 'com mais votos positivos' },
    { value: 'negativos', label: 'com mais votos negativos' },
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
    option: (provided, state) => ({
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
                placeholder='Ordenar as avaliações'
                options={options}
                styles={customStyles}
                className={styles.select}
                onChange={(selectedOption) => props.onChange(selectedOption)}
            />
        </div>
    );
}

export default ListaSuspensa;
