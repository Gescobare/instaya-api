import React, { Fragment } from "react";

function Login() {

  return (
    <Fragment>
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4">
            <h3 className="title">Iniciar sesión</h3>
            <div className="box">
              <form method="POST" action="/login">
                <div className="field">
                  <div className="control">
                    <input className="input is-large" type="correo" name="correo" placeholder="Tu correo" autoFocus=""></input>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input className="input is-large" type="contraseña" name="contraseña" placeholder="Tu contraseña"></input>
                  </div>
                </div>
                <div className="field">
                  <label className="checkbox">
                    <input type="checkbox"></input>
                    &nbsp; Recuérdame
                  </label>
                </div>
                <button className="button is-block is-info is-large is-fullwidth">Iniciar sesión</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;