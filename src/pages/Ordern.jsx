import React, { Fragment, useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Ordern({lists}) {

    const handleInputChange = id =>{
        const [edit, setedit] = useState([]);
            
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(edit)
          };

        fetch ("http://localhost:3000/api/package/"+ id, requestOptions)
        .then(res => res.json())
        .then(res => setlists(res))       
    }

    return (
        <Fragment>
            <div className="content-wrapper">
                <div className="page-header">
                    <h3 className="page-title"> Gestión de Paquetes </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/orders" className="">  &#60; Volver atrás </Link></li>
                            <li className="breadcrumb-item"><Link to="/" className="text-warning"> Cerrar sesión </Link></li>
                        </ol>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-12 grid-margin">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Actualización de órden</h4>
                                <form className="form-sample" >
                                    <p className="card-description"> Información y estado de la orden </p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Fecha - Hora</label>
                                                <div className="col-sm-9">
                                                    <input type="datetime-local" className="form-control"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label">Ancho</label>
                                                <div className="col-sm-8">
                                                    <input type="number" className="form-control" ></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label">Largo</label>
                                                <div className="col-sm-8">
                                                    <input type="number" className="form-control" ></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label">Alto</label>
                                                <div className="col-sm-8">
                                                    <input type="number" className="form-control" ></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Estado</label>
                                                <div className="col-sm-9">
                                                    <select className="form-control">
                                                        <option>Guardado</option>
                                                        <option>Cumplido</option>
                                                        <option selected>Cancelado</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="card-description"> Información de recogida </p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Dirección recogida</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" ></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Ciudad recogida</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" ></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="card-description"> Información de destino </p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Nombre destinatario</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" ></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Cédula/NIT destinatario</label>
                                                <div className="col-sm-9">
                                                    <input type="number" className="form-control" ></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Dirección entrega</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" ></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Ciudad entrega</label>
                                                <div className="col-sm-9">
                                                    <input type="text" className="form-control" ></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="row">
                                    <div className="col-md-3">
                                        <button type="button" class="btn btn-outline-warning btn-lg btn-block">
                                            <i className="mdi mdi-content-save "></i> Guardar </button>
                                    </div>
                                    <div className="col-md-3">
                                        <button type="button" class="btn btn-outline-danger btn-lg btn-block">
                                            <i className="mdi mdi-delete"></i> Eliminar </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <div className="d-sm-flex justify-content-center justify-content-sm-between">
                    <span className="text-muted d-block text-cener text-sm-left d-sm-inline-block">Copyright © InstaYa 2022</span>
                    <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"> Free <a href="#" target="_blank">Bootstrap admin templates</a> from Bootstrap</span>
                </div>
            </footer>
        </Fragment>
    );
}

export default Ordern;