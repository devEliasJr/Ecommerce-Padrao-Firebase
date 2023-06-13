import { useEffect, useState } from "react";
import "../Login/Login.css";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError ("")

    const user = {
      displayName,
      email,
      password
    }

    if (password !== confirmpassword) {
      setError("As senhas precisam ser iguais!")
      return
    }

    console.log(user)
  };

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
            onChange={(e) => {setDisplayName(e.target.value)}}
          />
        </label>
        <label>
          <input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            placeholder="Defina a sua Senha"
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
          />
        </label>
        <label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirme a sua Senha"
            value={confirmpassword}
            onChange={(e) => {setConfirmpassword(e.target.value)}}
          />
        </label>
        <button type="submit">Criar Conta</button>
        {error && <p>{error}</p> }
      </form>
    </div>
  );
};

export default Register;
