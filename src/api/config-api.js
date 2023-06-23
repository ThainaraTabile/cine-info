// const urlApi = 'https://api-filmes-rose.vercel.app';

// export const obterListaDeFilmes = async () => {
//     const response = await fetch(`${urlApi}/movies`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     });

//     return response.json();
// }


const urlApi = process.env.REACT_APP_API_URL;

export const obterListaDeFilmes = async () => {
    const response = await fetch(`${urlApi}/movies`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    return response.json();
}
