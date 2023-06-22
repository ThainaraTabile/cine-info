import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio";
import Filmes from "./pages/Filmes";
import FilmesFiltrados from "./pages/FilmesFiltrados";
function AppRotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path="filme/:id" element={<Filmes />} />
                <Route path="search" element={<FilmesFiltrados />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRotas;