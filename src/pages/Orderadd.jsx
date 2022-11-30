import React, { Fragment,useState} from "react";
import { Link } from 'react-router-dom';

function Orderadd() {

    const [packages, setpackages] = useState({
        
        date:  "",
        state: "",
        width: "",
        length: "",
        height: "",
        pAddress: "",
        pCity: "",
        sAddress: "",
        sCity: "",
        namePerson: "",
        nit: "",
        code: ""
        //weightType:,
        //weight:
  
    })
  
    const handleInputChange = (event) => {
  
      //console.log(event.target.value)
      setpackages({
        ...packages,
        [event.target.name] : event.target.value
  
      })
    }
  
    const SendData = (event) =>{
      event.preventDefault();
      //console.log(users.name)
      //console.log(users.email)
      //console.log(users.password)
  
      if (packages.date === "" || packages.height === "" || packages.length === "" || packages.namePerson === "" || packages.nit === "" || packages.pAddress === ""
      || packages.pCity === "" || packages.sAddress === "" || packages.sCity === "" || packages.state === "" || packages.width === ""){
        console.log("Faltan datos, estan vacios")
      }else{
        //useEffect(()=>{
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(packages)
          };
          fetch ("http://localhost:3000/api/package", requestOptions)
            .then(res => res.json())
            .then(res => console.log(res))
          }  
        //})    
      }
  
    return (
        <Fragment>
            <div className="content-wrapper">
                <div className="page-header">
                    <h3 className="page-title"> Gestión de Paquetes </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/orders" className=""> &#60; Volver atrás </Link></li>
                            <li className="breadcrumb-item"><Link to="/" className="text-warning"> Cerrar sesión </Link></li>
                        </ol>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-12 grid-margin">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Registro de órdenes</h4>
                                <form className="form-sample" onSubmit={SendData}>
                                    <p className="card-description"> Información y estado de la orden </p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Fecha - Hora</label>
                                                <div className="col-sm-9">
                                                    <input onChange={handleInputChange} name="date" type="datetime-local" className="form-control"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label">Ancho</label>
                                                <div className="col-sm-8">
                                                    <input onChange={handleInputChange} name="width" type="number" className="form-control"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label">Largo</label>
                                                <div className="col-sm-8">
                                                    <input onChange={handleInputChange} name="length" type="number" className="form-control"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label">Alto</label>
                                                <div className="col-sm-8">
                                                    <input onChange={handleInputChange} name="height" type="number" className="form-control"></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Estado</label>
                                                <div className="col-sm-9">
                                                    <select onChange={handleInputChange} name="state" className="form-control">
                                                        <option>Guardado</option>
                                                        <option>Cumplido</option>
                                                        <option>Cancelado</option>
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
                                                    <input onChange={handleInputChange} name="pAddress" type="text" className="form-control"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Ciudad recogida</label>
                                                <div className="col-sm-9">
                                                    <input onChange={handleInputChange} name="pCity" type="text" className="form-control"></input>
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
                                                    <input onChange={handleInputChange} name="namePerson" type="text" className="form-control"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Cédula/NIT destinatario</label>
                                                <div className="col-sm-9">
                                                    <input onChange={handleInputChange} name="nit" type="number" className="form-control"></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Dirección entrega</label>
                                                <div className="col-sm-9">
                                                    <input onChange={handleInputChange} name="sAddress" type="text" className="form-control"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Ciudad entrega</label>
                                                <div className="col-sm-9">
                                                    <input onChange={handleInputChange} name="sCity" type="text" className="form-control"></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <div className="row">
                                 <div className="col-md-3">
                                        <button type="submit" class="btn btn-outline-success btn-lg btn-block">
                                        <i className="mdi mdi-content-save "></i> Guardar </button>
                                    </div>
                                </div>
                                </form>
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

export default Orderadd;