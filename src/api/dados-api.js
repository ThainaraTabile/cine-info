// import { chaveAPI, urlBase } from "./config-api.js";
// import fetch from 'node-fetch';

// const dadosApi = async (tipoDeFilme, setUrl, setDadosFilme) => {
//     let novaUrl = '';
//     switch (tipoDeFilme) {
//         case "Todos":
//             novaUrl = `${urlBase}/discover/movie?sort_by=popularity.desc${chaveAPI}`;
//             break;
//         case "Ação":
//             novaUrl = `${urlBase}/discover/movie?with_genres=28${chaveAPI}`;
//             break;
//         case "Crianças":
//             novaUrl = `${urlBase}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc${chaveAPI}`;
//             break;
//         case "Drama":
//             novaUrl = `${urlBase}/discover/movie?with_genres=18${chaveAPI}`;
//             break;
//         case "Comédia":
//             novaUrl = `${urlBase}/discover/movie?with_genres=35${chaveAPI}`;
//             break;
//         default:
//             break;
//     }

//     try {
//         const resposta = await fetch(novaUrl);
//         const dados = await resposta.json();
//         setDadosFilme(dados.results);
//     } catch (erro) {
//         console.error("Erro ao buscar filmes:", erro);
//     }

//     setUrl(novaUrl);

// }

// export default dadosApi;