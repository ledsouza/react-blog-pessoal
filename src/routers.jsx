import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMin from "./paginas/SobreMin";
import Menu from "./componentes/Menu";
import Rodape from "./componentes/Rodape";
import PaginaPadrao from "./componentes/PaginaPadrao";
import Post from "./paginas/Post";

function AppRouters() {
    return (
        <BrowserRouter>
            <Menu />

            <Routes>
                <Route path="/" element={<PaginaPadrao />}>
                    <Route index element={<Inicio />} />
                    <Route path="sobremin" element={<SobreMin />} />
                    <Route path="post/:id" element={<Post />} />
                </Route>
                <Route path="*" element={<h2>Página não encontrada</h2>} />
            </Routes>

            <Rodape />
        </BrowserRouter>
    );
}

export default AppRouters;