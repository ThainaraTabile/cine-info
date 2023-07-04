const urlApi = process.env.REACT_APP_API_URL_BASE;

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