import Cabecalho from '../../componentes/Cabecalho';
import Menu from '../../componentes/Menu';
import Pesquisar from '../../componentes/Pesquisar';
import Rodape from '../../componentes/Rodape';
import FilmesFiltrados from '../../componentes/FilmesFiltrados';
import React, { useState } from 'react';

function Inicio() {
  const [generoSelecionado, setGeneroSelecionado] = useState(null);
  const [tituloSelecionado, setTituloSelecionado] = useState(null);
  const [exibirFilmes, setExibirFilmes] = useState(false);

  const handleSelecionarGenero = (genero) => {
    // console.log('genero selecionado ' + genero)
    setGeneroSelecionado(genero);
    setTituloSelecionado('');
    setExibirFilmes(true);
  };

  const handleBuscarPorTitulo = (titulo) => {
    // console.log('titulo selecionado ' + titulo)
    setTituloSelecionado(titulo);
    setExibirFilmes(true);
  }

  return (
    <>
      <Cabecalho />
      <Menu aoSelecionarGenero={handleSelecionarGenero} />
      <Pesquisar aoBuscarPorTitulo={handleBuscarPorTitulo} />
      {exibirFilmes && <FilmesFiltrados genero={generoSelecionado} titulo={tituloSelecionado} />}
      <Rodape />
    </>
  );
}

export default Inicio;


