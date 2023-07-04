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

export const obterFilmes = async ({ titulo, genero }) => {
    const filtro = new URLSearchParams();
    if (titulo) {
        filtro.append('title', titulo);
    }

    if (genero) {
        filtro.append('genre', genero);
    }

    console.log(filtro)
    const url = `${urlApi}/movies${filtro.size > 0 ? `?${filtro.toString()}` : ''}`
    const response = await fetch(url, {
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
