import React, { Fragment, useState } from "react";
import {Link, redirect} from 'react-router-dom';

function Login() {

  const [loginUser, setloginUser] = useState({

    email: "",
    password: ""

})

const handleInputChange = (event) => {

  //console.log(event.target.value)
  setloginUser({
    ...loginUser,
    [event.target.name] : event.target.value

  })
}

const SendData = (event) =>{
  event.preventDefault();
  console.log(loginUser.email)
  console.log(loginUser.password)

  if (loginUser.email === "" || loginUser.password === ""){
    console.log("Faltan datos, estan vacios")
  }else{
    //useEffect(()=>{
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginUser)
      };
      fetch ("http://localhost:3000/api/session",requestOptions)
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
                <h3 className="card-title text-left mb-3">Iniciar Sesión</h3>
                <form onSubmit={SendData}>
                  <div className="form-group">
                    <label>Correo *</label>
                    <input onChange={handleInputChange} name="email" type="text" className="form-control p_input"></input>
                  </div>
                  <div className="form-group">
                    <label>Contraseña *</label>
                    <input onChange={handleInputChange} name="password" type="password" className="form-control p_input"></input>
                  </div>
                  <div className="form-group d-flex align-items-center justify-content-between">
                    <div className="form-check">
                      <label className="form-check-label">
                        <input type="checkbox" className="form-check-input"></input> Recuérdame </label>
                    </div>
                    <a href="#" className="forgot-pass">Olvidé mi contraseña</a>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-block enter-btn">Ingresar</button>
                  </div>
                  <p className="sign-up">¿Aún no tienes cuenta? <Link to="/signup" className=""> Regístrate</Link></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default Login;