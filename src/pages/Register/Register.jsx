import { useAuthentication } from "../../hooks/useAuthentication";
import "../Login/Login.css";
import { useEffect, useState } from "react";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const user = {
      displayName,
      email,
      password,
    };

    if (password !== confirmpassword) {
      setError("As senhas precisam ser iguais!");
      return;
    }

    const res = await createUser(user);
    console.log(res);

  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className="container">
      <h2>Crie a sua conta</h2>
      <p>Já tem uma conta? Faça login agora mesmo.</p>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="displayName"
            placeholder="Nome do usuário"
            value={displayName}
            onChange={(e) => {
              setDisplayName(e.target.value);
            }}
          />
        </label>
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
        <label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirme a sua Senha"
            value={confirmpassword}
            onChange={(e) => {
              setConfirmpassword(e.target.value);
            }}
          />
        </label>
        {!loading && <button type="submit">Criar Conta</button>}
        {loading && <button type="submit" disabled>Aguarde...</button>}   
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Register;
