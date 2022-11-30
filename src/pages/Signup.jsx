import React, { Fragment, useState, useEffect } from "react";
import {Link} from 'react-router-dom';

function Signup() {

  const [users, setUsers] = useState({

      name: "",
      email: "",
      password: ""

  })

  const handleInputChange = (event) => {

    //console.log(event.target.value)
    setUsers({
      ...users,
      [event.target.name] : event.target.value

    })
  }

  const SendData = (event) =>{
    event.preventDefault();
    console.log(users.name)
    console.log(users.email)
    console.log(users.password)

    if (users.name === "" || users.email === "" || users.password === ""){
      console.log("Faltan datos, estan vacios")
    }else{
      //useEffect(()=>{
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(users)
        };
        fetch ("http://localhost:3000/api/task", requestOptions)
          .then(res => res.json())
          .then(res => console.log(res))
        }  
      //})    
    }

  return (
    <Fragment>
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="row w-100 m-0">
          <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
            <div className="card col-lg-4 mx-auto">
              <div className="card-body px-5 py-5">
                <h3 className="card-title text-left mb-3">Registro</h3>
                <form onSubmit={SendData}>
                  <div className="form-group">
                    <label>Nombre Completo</label>
                    <input onChange={handleInputChange} name="name" type="text" className="form-control p_input"></input>
                  </div>
                  <div className="form-group">
                    <label>Correo</label>
                    <input onChange={handleInputChange} name="email" type="email" className="form-control p_input"></input>
                  </div>
                  <div className="form-group">
                    <label>Contraseña</label>
                    <input onChange={handleInputChange} name="password" type="password" className="form-control p_input"></input>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-block enter-btn">Registrarse</button>
                  </div>
                  <p className="sign-up text-center">¿Ya tienes cuenta?<Link to="/" className=""> Iniciar sesión</Link></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  )
}

export default Signup