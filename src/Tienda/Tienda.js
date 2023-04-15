import { Link } from "react-router-dom"
import './Tienda.css'
import '../AmpliarInfo/AmpliarInfo'
import { AmpliarInfo } from "../AmpliarInfo/AmpliarInfo"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
import { consultarProductos } from "../services/buscarProductos"

export function Tienda() {

    const[productostienda, setProductos] = useState("")
    const[estadocarga, setEstadoCarga] = useState(true)

    function cambiarFoto(evento) {
        evento.preventDefault()
        evento.target.classList.remove("sombra")
    }
    function cambiarFoto2(evento) {
        evento.preventDefault()
        evento.target.classList.add("sombra")
    }
    let navegador = useNavigate()
    function pasarInformacion(producto){
        navegador('/compras', {
            state: {producto}
        })
    }

    useEffect(function(){
        consultarProductos()
        .then(function(respuesta){
            setEstadoCarga(false)
            setProductos(respuesta)
        })
    },[])

    if(estadocarga == true){
        return(
            <>
            <h1>ESTAMOS CARGANDO...</h1>
            </>
        )
    }else{
        return (
            <>
                <div class="row row-cols-1 row-cols-md-4 g-3 my-5 p-5">
                    {
                        productostienda.map(function (producto) {
                            return (
                                <div class="col zoom" onClick={function(){pasarInformacion(producto)}}>
                                    <div class="card shadow h-100 border-5 border-primary rounded">
                                        <img 
                                        src={producto.foto} 
                                        alt="foto" 
                                        class="img-fluid sombra" 
                                        onMouseOver={cambiarFoto} 
                                        onMouseLeave={cambiarFoto2} 
                                        />
                                        <h2 class="text-center fw-bold text-black">{producto.nombre}</h2>
                                        <h4 class="text-justify p-2 text-black">{producto.descripcion}</h4>
                                        <h4 class="text-success text-center">{producto.precio}$ COP</h4>
                                        <Link to={producto.link} class="text-center btn btn-primary m-3 rounded-5" target="_blank">Leer mas</Link>
                                        <Link to={producto.link} class="text-center btn btn-primary m-3 rounded-5" target="_blank">Comprar</Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }

    /*
    let productos = [
        {
            nombre: "DARK SOULS I",
            precio: "$120000",
            descripcion: "Es un RPG de acción, que se caracteriza por una atmósfera oscura y una dificultad muy por encima de los estándares actuales, el primero de una gran saga de FROM SOFTWARE.",
            foto: "https://firebasestorage.googleapis.com/v0/b/tiendadejuancho-a1ef3.appspot.com/o/producto1.jpg?alt=media&token=6a1e2137-0e70-41a7-93a8-79e3325c78ca",
            link: "/compras "
        },
        {
            nombre: "DARK SOULS II",
            precio: "$130000",
            descripcion: "Es un videojuego de rol de acción que tiene lugar en un mundo abierto, es la segunda entrega de una gran de FROM SOFTWARE.",
            foto: "https://firebasestorage.googleapis.com/v0/b/tiendadejuancho-a1ef3.appspot.com/o/producto2.jpg?alt=media&token=e26c6063-a7fd-44cb-b736-e5282c225eb3",
            link: "https://darksouls.fandom.com/es/wiki/Dark_Souls_II"
        },
        {
            nombre: "DARK SOULS III",
            precio: "$140000",
            descripcion: "Fue un éxito tanto de crítica como de ventas, con la crítica nombrando a este como un digno y adecuado final para la saga.",
            foto: "https://firebasestorage.googleapis.com/v0/b/tiendadejuancho-a1ef3.appspot.com/o/producto3.jpg?alt=media&token=ad718e3b-2072-4f56-b7b8-192839a68621",
            link: "https://es.bandainamcoent.eu/dark-souls/dark-souls-iii"
        },
        {
            nombre: "NIOH",
            precio: "$100000",
            descripcion: "Es un juego de rol y de RPG que es similar a la dificultad y a la trama de la saga de DARK SOULS.",
            foto: "https://firebasestorage.googleapis.com/v0/b/tiendadejuancho-a1ef3.appspot.com/o/producto4.jpg?alt=media&token=7553233e-fa92-41b5-a540-0a3bac3c7b15",
            link: "https://en.wikipedia.org/wiki/Nioh"
        },
        {
            nombre: "SUBNAUTICA",
            precio: "$80000",
            descripcion: "Es un juego de aventura submarina ambientado en un planeta oceánico alienígena.",
            foto: "https://firebasestorage.googleapis.com/v0/b/tiendadejuancho-a1ef3.appspot.com/o/producto5.jpg?alt=media&token=9ede76d8-b0a1-4882-9033-d1d12e07fd07",
            link: "https://vandal.elespanol.com/juegos/pc/subnautica/23072#p-13"
        },
        {
            nombre: "SUBNAUTICA BELOW ZERO",
            precio: "$50000",
            descripcion: "Es un completemento del juego base Subnautica, es como una extensión, pero es un juego totalmente individual que se maneja en un ambiente distinto como es la nieve.",
            foto: "https://firebasestorage.googleapis.com/v0/b/tiendadejuancho-a1ef3.appspot.com/o/producto6.jpg?alt=media&token=39ad01c9-0fb3-4f5d-8202-24d0faac4e8d",
            link: "https://unknownworlds.com/subnautica/subnautica-below-zero/"
        },
        {
            nombre: "FARCRY 5",
            precio: "$110000",
            descripcion: "Es un videojuego de acción y disparos en primera persona con una jugabilidad de tipo mundo abierto.",
            foto: "https://firebasestorage.googleapis.com/v0/b/tiendadejuancho-a1ef3.appspot.com/o/producto7.jpg?alt=media&token=821c6e37-86bc-4eae-8d98-c986bb472c59",
            link: "https://vandal.elespanol.com/juegos/ps4/far-cry-5/48289#p-73"
        },
        {
            nombre: "FARCRY 4",
            precio: "$100000",
            descripcion: "Es un videojuego de acción-aventura en primera persona. Los jugadores asumen el control de Ajay Ghale, un muchacho de origen kyrati que viaja a Kyrat para esparcir las cenizas de su madre.",
            foto: "https://firebasestorage.googleapis.com/v0/b/tiendadejuancho-a1ef3.appspot.com/o/producto8.jpg?alt=media&token=5a05e68c-c92b-46b2-b6bb-311f42350300",
            link: "https://vandal.elespanol.com/juegos/ps4/far-cry-4/24452#p-73"
        },
        {
            nombre: "GOD OF WAR RAGNAROK",
            precio: "$200000",
            descripcion: "Es un videojuego de acción y aventuras desarrollado por Santa Monica Studio y publicado por Sony Interactive Entertainment (SIE).",
            foto: "https://firebasestorage.googleapis.com/v0/b/tiendadejuancho-a1ef3.appspot.com/o/producto9.jpg?alt=media&token=caae42c8-f478-486c-9816-5cac74993f2e",
            link: "https://vandal.elespanol.com/juegos/ps5/god-of-war-ragnarok/90451#p-89"
        },
        {
            nombre: "LIFE IS STRANGE",
            precio: "$50000",
            descripcion: "Es una aventura gráfica jugada a partir de una perspectiva en tercera persona. La mecánica del tiempo de rebobinado permite al jugador rehacer.",
            foto: "https://firebasestorage.googleapis.com/v0/b/tiendadejuancho-a1ef3.appspot.com/o/producto10.jpg?alt=media&token=3b9adce1-14df-419b-a7b8-b21caab79716",
            link: "https://vandal.elespanol.com/sagas/life-is-strange"
        },
    ]*/
}