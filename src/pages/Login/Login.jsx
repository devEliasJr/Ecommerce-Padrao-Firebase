import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <h2>Faça o Login</h2>
      <p>Não tem uma conta? Crie Já.</p>
      <form onSubmit={() => {}}>
        <label>
          <input type="text" placeholder="Login" />
        </label>
        <label>
          <input type="text" placeholder="Senha" />
        </label>
        <button type="submit">Fazer login</button>
      </form>
    </div>
  );
};

export default Login;
