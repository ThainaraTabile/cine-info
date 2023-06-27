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

const urlDeBusca = 'https://api-filmes-rose.vercel.app/movies?title='
export const filtrarPorTitulo = async (tituloInput) => {
    const response = await fetch(`${urlDeBusca}${tituloInput}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    return response.json();
}
