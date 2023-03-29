import { Route, Routes } from "react-router-dom"
import { Home } from "../Home/Home"
import { Administrador } from "../Administrador/Administrador"
import { Menu } from "../Menu/Menu"
import { Tienda } from "../Tienda/Tienda"

export function Router(){
    return(
        <>
        <header>
            <Menu></Menu>
        </header>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/administrar" element={<Administrador />} />
            <Route path="/productos" element={<Tienda/>}/>
        </Routes>
        </>
    )
}