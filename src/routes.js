import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio";


function AppRotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />


            </Routes>
        </BrowserRouter>
    )
}

export default AppRotas;