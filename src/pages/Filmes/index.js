// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import MovieCard from "../../componentes/MovieCard";
// import { urlBase, chaveApi } from "../../api/config-api";

import { useEffect } from "react";

// const Filme = () => {
//     const { id } = useParams();
//     const [filme, setFilme] = useState(null);

//     const getFilme = async (url) => {
//         const res = await fetch(url);
//         const data = await res.json();
//         setFilme(data);
//     };

//     const formatCurrency = (number) => {
//         return number.toLocaleString("en-US", {
//             style: "currency",
//             currency: "USD",
//         });
//     };

//     useEffect(() => {
//         const movieUrl = `${urlBase}/${id}?${chaveApi}`;
//         getFilme(movieUrl);
//     }, [id]);

//     return (
//         <div className="movie-page">
//             {filme && (
//                 <>
//                     <MovieCard file={filme} showLink={false} />
//                     <p className="tagline">{filme.tagline}</p>
//                     <div className="info">
//                         <h3>Orçamento:</h3>
//                         <p>{formatCurrency(filme.budget)}</p>
//                     </div>
//                     <div className="info">
//                         <h3>Receita:</h3>
//                         <p>{formatCurrency(filme.revenue)}</p>
//                     </div>
//                     <div className="info">
//                         <h3>Duração:</h3>
//                         <p>{filme.runtime} minutos</p>
//                     </div>
//                     <div className="info description">
//                         <h3>Descrição:</h3>
//                         <p>{filme.overview}</p>
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };

// export default Filme;

