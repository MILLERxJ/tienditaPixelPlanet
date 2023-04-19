import Swal from 'sweetalert2'
import { useState, useEffect } from "react"
import { registrarProductoEnBD } from "../services/agregarProductos"

export function Administrador() {
    const[nombre, setNombre] = useState("")
    const[foto, setFoto] = useState("")
    const[descripcion, setDescripcion] = useState("")
    const[cantidad, setCantidad] = useState("")
    const[peso, setPeso] = useState("")
    const[volumen, setVolumen] = useState("")
    const[precio, setPrecio] = useState("")
    const[clasificacion, setClasificacion] = useState("")
    const[marca, setMarca] = useState("")
    const[presentacion, setPresentacion] = useState("")
    const[descuento, setDescuento] = useState("")
    const[fechaingreso, setFechaIngreso] = useState("")
    const[fechavencimiento, setFechaVencimiento] = useState("")
    const[proveedor, setProveedor] = useState("")

    function procesarFormulario(evento){
        evento.preventDefault()
        let datosProducto={
            "nombre": nombre,
            "cantidad":cantidad,
            "foto": foto,
            "descripcion":descripcion,
            "peso":peso,
            "volumen":volumen,
            "precioUnitario":precio,
            "clasificacion":clasificacion,
            "marca":marca,
            "presentacion":presentacion,
            "aplicaDescuento":descuento,
            "fechaIngreso":fechaingreso,
            "fechaVencimiento":fechavencimiento,
            "proveedor":proveedor
        }
        console.log(datosProducto)
        registrarProductoEnBD(datosProducto)
        .then(function(respuesta){
            Swal.fire(
                'Registro con exito',
                'Escribenos para ganarte el carro',
                'Con exito'
              )
        }) 
        .catch(function(error){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Tuviste algun inconveniente',
              })
        })
    }
    
    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div class="container">
                <div class="row">
                <div class="col-8">
                    <img src="https://firebasestorage.googleapis.com/v0/b/tiendadejuancho-a1ef3.appspot.com/o/fotico.jpg?alt=media&token=ba5e0311-9f58-4db2-8b8a-c4be7adf108d" alt="foto" class="img-fluid" />
                </div>
                <div class="col-4 text-center">
                    <h2>Registro de mercancia</h2>
                    <form onSubmit={procesarFormulario}>
                        <div class="row">
                            <div class="col-5">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-type"/></span>
                                    <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Nombre" 
                                    id="nombre"
                                    onChange={(evento)=>{
                                        setNombre(evento.target.value)
                                    }}
                                    />
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-file-earmark-image" /></span>
                                    <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Foto" 
                                    id="foto"
                                    onChange={(evento)=>{
                                        setFoto(evento.target.value)
                                    }}
                                    />
                                </div>
                            </div>
                            <div class="col-10">
                                <div class="form-floating mb-3">
                                    <input 
                                    type="text" 
                                    class="form-control" 
                                    id="descripcion" 
                                    placeholder="Descripcion|   "
                                    onChange={(evento)=>{
                                        setDescripcion(evento.target.value)
                                    }}
                                    />
                                    <label for="floatingInput">Descripción</label>
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-123" /></span>
                                    <input 
                                    type="number" 
                                    class="form-control" 
                                    placeholder="Cantidad" 
                                    id="cantidad"
                                    onChange={(evento)=>{
                                        setCantidad(evento.target.value)
                                    }}
                                    />
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-123"/></span>
                                    <input 
                                    type="number" 
                                    class="form-control" 
                                    placeholder="Peso" 
                                    id="peso"
                                    onChange={(evento)=>{
                                        setPeso(evento.target.value)
                                    }}
                                    />
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-123"/></span>
                                    <input 
                                    type="number" 
                                    class="form-control" 
                                    placeholder="Volumen" 
                                    id="volumen"
                                    onChange={(evento)=>{
                                        setVolumen(evento.target.value)
                                    }}
                                    />
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-tag-fill"/></span>
                                    <input 
                                    type="number" 
                                    class="form-control" 
                                    placeholder="Precio" 
                                    id="precio"
                                    onChange={(evento)=>{
                                        setPrecio(evento.target.value)
                                    }}
                                    />
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-card-list"/></span>
                                    <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Clasificación" 
                                    id="clasificacion"
                                    onChange={(evento)=>{
                                        setClasificacion(evento.target.value)
                                    }}
                                    />
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-bookmark" /></span>
                                    <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Marca" 
                                    id="marca"
                                    onChange={(evento)=>{
                                        setMarca(evento.target.value)
                                    }}
                                    />
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-file-ppt" /></span>
                                    <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Presentación" 
                                    id="presentacion"
                                    onChange={(evento)=>{
                                        setPresentacion(evento.target.value)
                                    }}
                                    />
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-percent"/></span>
                                    <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Descuento" 
                                    id="descuento"
                                    onChange={(evento)=>{
                                        setDescuento(evento.target.value)
                                    }}
                                    />
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-calendar-date" /></span>
                                    <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="FechaIn" 
                                    id="fechaingreso"
                                    onChange={(evento)=>{
                                        setFechaIngreso(evento.target.value)
                                    }}
                                    />
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-calendar-date" /></span>
                                    <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="FechaVen" 
                                    id="fechavencimiento"
                                    onChange={(evento)=>{
                                        setFechaVencimiento(evento.target.value)
                                    }}
                                    />
                                </div>
                            </div>
                            <div class="col-10">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-shop"></i></span>
                                    <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Proveedor" 
                                    id="proveedor"
                                    onChange={(evento)=>{
                                        setProveedor(evento.target.value)
                                    }}
                                    />
                                </div>
                            </div>
                            <div>
                            <button type="submit" class="btn btn-outline-success w-100">Success</button>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </>
    )
}