const urlApi = process.env.REACT_APP_API_URL_BASE;

const urlDeBusca = process.env.REACT_APP_API_URL_TITULO;

export const obterListaDeFilmes = async () => {
    const response = await fetch(`${urlApi}/movies`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    return response.json();
}


export const filtrarPorTitulo = async (tituloInput) => {
    const response = await fetch(`${urlDeBusca}${tituloInput}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    return response.json();
}
