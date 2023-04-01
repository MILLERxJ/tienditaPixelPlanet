import './AmpliarInfo.css'

export function AmpliarInfo() {

    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <div class="container my-5">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/tiendadejuancho-a1ef3.appspot.com/o/producto1.jpg?alt=media&token=6a1e2137-0e70-41a7-93a8-79e3325c78ca"
                            class="img-fluid w-100"
                            alt="Foto" />
                    </div>
                    <div class="col-12 col-md-6 border p-3 rounded shadow">
                        <h2 class="fw-blood">Dark souls</h2>
                        <i class="bi bi-star-fill text-warning fs-1 ms-1"></i>
                        <i class="bi bi-star-fill text-warning fs-1 ms-1"></i>
                        <i class="bi bi-star-fill text-warning fs-1 ms-1"></i>
                        <i class="bi bi-star-fill text-warning fs-1 ms-1"></i>
                        <i class="bi bi-star-fill fs-1 ms-1"></i>
                        <br></br>
                        <span class="badge text-bg-warning mt-3">Mas vendido</span>
                        <br></br>
                        <br></br>
                        <h2>180.000$</h2>
                        <br></br>   
                        <span class="badge text-bg-primary mt-3">Oferton super mega especial</span>
                        <br></br>
                        <p class="text-muted mt-3">Hasta 48 cuotas</p>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/tiendadejuancho-a1ef3.appspot.com/o/american-express.png?alt=media&token=78b0a178-c7c1-40fc-a127-4c135d7f3559"
                            alt="icono"
                            class="img-fluid me-3"
                        />
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/tiendadejuancho-a1ef3.appspot.com/o/visa.png?alt=media&token=30c14ddb-79e1-42bd-9efc-ffd551dc3811"
                            alt="icono"
                            class="img-fluid me-3"
                        />
                        <br></br>
                        <i class="bi bi-truck display-1 my-5"></i>
                        <p>Entregas en Medellín y Valle del Aburrá</p>
                        <br></br>
                        <br></br>
                        <form>
                            <label class="form-labe">Cantidad: </label>
                            <input class="form-control" type="number" value="1"></input>
                            <button type="submit" class="btn btn-warning mt-2 w-100">
                            <i class="bi bi-cart"></i> Añadir
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}