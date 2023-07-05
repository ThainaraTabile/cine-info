# Cine Info

Este projeto consiste em uma interface web construída com [React](https://github.com/facebook/create-react-app) que exibe uma lista de filmes, incluindo informações relevantes, como gênero, sinopse e avaliação. Os usuários têm a capacidade de buscar filmes por gênero ou pesquisar pelo título.

<div align="center">
<img align="center" width="500" alt="Captura de Tela 2023-07-05 às 13 18 43" src="https://github.com/ThainaraTabile/cine-info/assets/122550758/1a13fffc-93f0-4bef-9069-4a257d16994b">
</div>

## Funcionalidades

-`Exibição de lista de filmes`: a interface apresenta uma lista de filmes disponíveis, juntamente com informações como título, gênero, sinopse e avaliação.
<div align="center">
<img width="500" alt="Captura de Tela 2023-07-05 às 13 21 19" src="https://github.com/ThainaraTabile/cine-info/assets/122550758/83a6a2a2-77d1-4697-89c6-eb858a73b369">
</div>
<br><br>

-`Pesquisa por gênero`: os usuários podem buscar filmes filtrando por gênero. Ao selecionar um gênero específico, a lista de filmes é atualizada para exibir apenas os filmes correspondentes.
<div align="center">
<img width="500" alt="Captura de Tela 2023-07-05 às 13 21 58" src="https://github.com/ThainaraTabile/cine-info/assets/122550758/9ca070ce-bfbe-4f65-9ac3-5c2f3bcbc48b">
</div>
<br><br>

-`Pesquisa por título`: os usuários têm a opção de pesquisar filmes digitando o título desejado na barra de pesquisa. A lista de filmes é atualizada automaticamente para mostrar apenas os filmes cujos títulos correspondem à pesquisa realizada.

<div align="center">
</div>
<br><br>

-`Ordenar avaliações e títulos`: interface oferece ao usuário a possibilidade de ordenar as avaliações de forma crescente ou decrescente, permitindo uma visualização personalizada dos filmes mais avaliações positivas ou negativas, de acordo com a preferência do usuário. Além disso, é possível ordenar os títulos dos filmes em ordem alfabética, seja de A a Z ou de Z a A.
<div align="center">
<img width="500" alt="Captura de Tela 2023-07-05 às 13 24 50" src="https://github.com/ThainaraTabile/cine-info/assets/122550758/d5390536-146c-4820-8c69-000dcbdbd59d">
</div>

## Considerações Técnicas
- A aplicação foi desenvolvida utilizando React, seguindo os princípios de desenvolvimento orientado a objetos e modularidade.
<br><br>
- A aplicação foi estruturada em componentes reutilizáveis para facilitar a manutenção e o desenvolvimento futuro.
<br><br>
- Para que ocorra o recebimento e processamento dos dados enviados pelo usuário, a interface se integra com a [API](https://github.com/ThainaraTabile/api-filmes).
  <br><br>
- Visando garantir a portabilidade e a segurança da aplicação, foi implementada uma variável de ambiente para facilitar a configuração e personalização do ambiente de execução.
  <br><br>
- É importante destacar que, nesta aplicação, o foco principal de aprendizado e desenvolvimento foi o React, e não a implementação de um layout completamente responsivo. Portanto, embora o CSS tenha sido utilizado para estilizar a interface, não foram aplicadas técnicas avançadas de responsividade.

## Base de Dados e API Personalizadas

Neste projeto, considerando o prazo para entrega e o objetivo principal de aprendizado em React, optei por não utilizar a API disponibilizada originalmente. Isso se deu pelo fato de que a API não oferecia recursos que me permitisse realizar filtragem por gênero de filmes, além de nem todos os filmes possuírem imagens associadas.

Diante dessas limitações, em colaboração com [@patriciadania](https://github.com/patriciadania) fizemos alterações na base de dados utilizada pela [API](https://github.com/ThainaraTabile/api-filmes), de forma a adequá-la às necessidades do projeto. Isso envolveu a inclusão de títulos de filmes, sinopse, avaliações, tempo de duração e gênero, o que permitiu a implementação de funcionalidades de filtragem por gênero, possibilitando aos usuários uma experiência mais completa e personalizada.

Embora essa abordagem possa não representar a construção de uma API completa, foi uma solução viável para atender aos requisitos do projeto dentro das restrições de tempo e do foco principal em React. Essas modificações na base de dados permitiram que eu explorasse e aprimorasse minhas habilidades em desenvolvimento de interfaces utilizando React, criando uma aplicação mais dinâmica e funcional para os usuários.




