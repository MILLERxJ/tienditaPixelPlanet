import { Route, Routes, Link } from "react-router-dom"
import { Home } from "../Home/Home"
import { Administrador } from "../Administrador/Administrador"
import { Menu } from "../Menu/Menu"

export function Router(){
    return(
        <>
        <header>
            <Menu></Menu>
        </header>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/administrar" element={<Administrador />} />
        </Routes>
        </>
    )
}