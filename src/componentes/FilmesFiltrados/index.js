// import Card from "../Card";
// import { obterListaDeFilmes } from '../../api/config-api';
// import React, { useEffect, useState } from 'react';

// const FilmesFiltrados = ({ generoSelecionado }) => {
//     const [filmes, setFilmes] = useState([]);

//     useEffect(() => {
//         const buscarFilmes = async () => {
//             try {
//                 const filmesData = await obterListaDeFilmes();
//                 setFilmes(filmesData);
//             } catch (error) {
//                 console.error('Erro ao obter filmes!', error);
//             }
//         };
//         buscarFilmes();
//     }, []);

//     const filmesFiltrados =
//         generoSelecionado && generoSelecionado !== 'todos'
//             ? filmes.filter((filme) => filme.genre === generoSelecionado)
//             : filmes;

//     return <Card filmes={filmesFiltrados} />;
// };

// export default FilmesFiltrados;


import Card from "../Card";
import { obterFilmes } from '../../api/config-api';
import React, { useEffect, useState } from 'react';

const FilmesFiltrados = ({ genero, titulo }) => {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const buscarFilmes = async () => {
            try {
                const filtro = { genero: genero, titulo: titulo };
                console.log(filtro);
                const filmesData = await obterFilmes(filtro);
                setFilmes(filmesData);
                console.log(filmesData)
            } catch (error) {
                console.error('Erro ao obter filmes!', error);
            }
        };
        buscarFilmes();
    }, [genero, titulo]);

    return <Card filmes={filmes} />;
};

export default FilmesFiltrados;





