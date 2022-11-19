import React, { Fragment } from "react";
import { Link } from 'react-router-dom';

function Orders() {

    return (
        <Fragment>
            <div className="content-wrapper">
                <div className="page-header">
                    <h3 className="page-title"> Gestión de Paquetes </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/orderadd" className="text-success"> Crear nueva orden </Link></li>
                            <li className="breadcrumb-item"><Link to="/" className="text-warning"> Cerrar sesión </Link></li>
                        </ol>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-lg-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Listado de órdenes</h4>
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Fecha</th>
                                                <th>Ciudad Destino</th>
                                                <th>Dirección Entrega</th>
                                                <th>Estado</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><Link to="/1" classNameName=""> 1 </Link></td>
                                                <td>03/11/2022</td>
                                                <td>Villavicencio</td>
                                                <td>CALLE 8 # 24-21 INT 1 APTO 203</td>
                                                <td><label className="badge badge-danger">Cancelado</label></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>08/11/2022</td>
                                                <td>Bogotá</td>
                                                <td>CARRERA 7 # 165-23 BLOQUE 3 APTO 1503</td>
                                                <td><label className="badge badge-warning">Guardado</label></td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>11/11/2022</td>
                                                <td>Cartagena</td>
                                                <td>CARRERA 23 # 12-01 PISO 1</td>
                                                <td><label className="badge badge-warning">Guardado</label></td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>17/11/2022</td>
                                                <td>Barranquilla</td>
                                                <td>DIAGONAL 45 # 32-78 PISO 2</td>
                                                <td><label className="badge badge-success">Cumplido</label></td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>18/11/2022</td>
                                                <td>Medellín</td>
                                                <td>CALLE 45 # 35-12 INT 3 APTO 401</td>
                                                <td><label className="badge badge-success">Cumplido</label></td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>19/11/2022</td>
                                                <td>Armenia</td>
                                                <td>CALLE 54 # 23-14 APTO 301</td>
                                                <td><label className="badge badge-danger">Cancelado</label></td>
                                            </tr>
                                        </tbody>
                                    </table>
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

export default Orders;