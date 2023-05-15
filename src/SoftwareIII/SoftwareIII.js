import React from 'react'

export function Cards(props) {
    return (
        <>
            <div className='main'>
                <div className='card'>
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/tiendadejuancho-a1ef3.appspot.com/o/3-300x225.jpg?alt=media&token=e2e62ff5-6e5d-49f1-b251-03cd72a7b2ba"
                        alt="Maestria en gestión"
                    />
                    <h2>Maestría en Gestión de Tecnología de la Información</h2>
                    <p>Duracion: {props.duracion} <br></br>
                        Titulo: {props.titulo}<br></br>
                        Se ifrece en: {props.ciudad}<br></br>
                        Valor matricula: {props.valor}</p>
                    <a href=''>COMIENZA AQUÍ</a>
                </div>
            </div>
        </>
    )
}