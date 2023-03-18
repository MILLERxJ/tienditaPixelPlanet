import './Home.css'
import {Menu} from '../Menu/Menu'
import {AcercaDe} from '../AcercaDe/AcercaDe'
import {Servicios} from '../Servicios/Servicios'

export function Home() {
    return (
        <>
        <header>
            <Menu></Menu>
        </header>
            <section>
                <div class="banner">
                    <h1>Bienvenido...</h1>
                </div>
            </section>
            <AcercaDe></AcercaDe>
            <Servicios></Servicios>
        </>
    )
}