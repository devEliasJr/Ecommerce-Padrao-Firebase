import { useAuthentication } from "../../hooks/useAuthentication";
import { useEffect, useState } from "react";
import "./Login.css";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, error: authError, loading } = useAuthentication();

  console.log(email)
  console.log(password)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const user = {
      email,
      password,
    };

    const res = await login(user)
    console.log(res)
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className="container">
      <h2>Realize o login para começar</h2>
      <p>Não tem uma conta? Crie agora clicando aqui.</p>
      <form onSubmit={handleSubmit}>
        <label>
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
        <label>
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
        {!loading && <button type="submit">Entrar</button>}
        {loading && (
          <button type="submit" disabled>
            Aguarde...
          </button>
        )}
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
