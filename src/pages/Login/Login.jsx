import { useAuthentication } from "../../hooks/useAuthentication";
import { useEffect, useState } from "react";
import { RiErrorWarningFill } from "react-icons/ri";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const user = {
      email,
      password,
    };

    const res = await login(user);
    console.log(res);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className="container">
      <h2 className="title-page">Realizar Login</h2>
      <p>Informe corretamente as suas credenciais para começar</p>
      <form className="form-container" onSubmit={handleSubmit}>
        <label className="label-form">
          <input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label className="label-form">
          <input
            type="password"
            name="password"
            placeholder="Defina a sua Senha"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <div className="container-btns">
          {!loading && (
            <button className="btn-submit" type="submit">
              Entrar
            </button>
          )}
          {!loading && <button className="btn-register">Criar Conta</button>}
          {loading && (
            <button className="btn-submit" disabled>
              Aguarde...
            </button>
          )}
        </div>

        {error && (
          <div className="message-error error-position">
            <span className="error-icon">{<RiErrorWarningFill />}</span>
            <span>{error}</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
