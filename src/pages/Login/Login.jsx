import { useAuthentication } from "../../hooks/useAuthentication";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { RiErrorWarningFill } from "react-icons/ri";


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
            <button className="btn" type="submit">
              Entrar
            </button>
          )}
          {!loading && <Link to="/register" className="btn register">Criar Conta</Link>}
          {loading && (
            <button className="btn" disabled>
              Aguarde...
            </button>
          )}
        </div>

        {error && (
          <div className="messages error">
            <span className="error-icon">{<RiErrorWarningFill />}</span>
            <span>{error}</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
