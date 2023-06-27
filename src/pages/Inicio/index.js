import Cabecalho from '../../componentes/Cabecalho';
import Card from '../../componentes/Card';
import Menu from '../../componentes/Menu';
import Pesquisar from '../../componentes/Pesquisar';
import Rodape from '../../componentes/Rodape';
import React, { useState } from 'react';


function Inicio() {
  const [generoSelecionado, setGeneroSelecionado] = useState(null);
  const [exibirFilmes, setExibirFilmes] = useState(false);


  const handleSelecionarGenero = (genero) => {
    setGeneroSelecionado(genero);
    setExibirFilmes(true);
  };

  return (
    <>
      <Cabecalho />

      <Menu aoSelecionarGenero={handleSelecionarGenero} />
      <Pesquisar />
      {exibirFilmes && <Card generoSelecionado={generoSelecionado} />}
      <Rodape />
    </>
  );
}

export default Inicio;


