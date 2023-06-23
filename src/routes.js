import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio";
import Filmes from "./pages/Filmes";

function AppRotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path="filme/:id" element={<Filmes />} />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRotas;