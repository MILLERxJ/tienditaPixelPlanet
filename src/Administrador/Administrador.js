export function Administrador() {
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
                    <form>
                        <div class="row">
                            <div class="col-5">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-type"/></span>
                                    <input type="text" class="form-control" placeholder="Nombre" />
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-file-earmark-image" /></span>
                                    <input type="text" class="form-control" placeholder="Foto" />
                                </div>
                            </div>
                            <div class="col-10">
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                                        <label for="floatingInput">Descripción</label>
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-123" /></span>
                                    <input type="number" class="form-control" placeholder="Cantidad" />
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-123"/></span>
                                    <input type="number" class="form-control" placeholder="Peso" />
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-123"/></span>
                                    <input type="number" class="form-control" placeholder="Volumen" />
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-tag-fill"/></span>
                                    <input type="number" class="form-control" placeholder="Precio" />
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-card-list"/></span>
                                    <input type="text" class="form-control" placeholder="Clasificación" />
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-bookmark" /></span>
                                    <input type="text" class="form-control" placeholder="Marca" />
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-file-ppt" /></span>
                                    <input type="text" class="form-control" placeholder="Presentación" />
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-percent"/></span>
                                    <input type="text" class="form-control" placeholder="Descuento" />
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-calendar-date" /></span>
                                    <input type="text" class="form-control" placeholder="FechaIn" />
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-calendar-date" /></span>
                                    <input type="text" class="form-control" placeholder="FechaVen" />
                                </div>
                            </div>
                            <div class="col-10">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-shop"></i></span>
                                    <input type="text" class="form-control" placeholder="Proveedor" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </>
    )
}