//Hooks
import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuthValue } from "../../context/AuthContext"


import "../Login/Login.css";
import { useEffect, useState } from "react";
import { RiErrorWarningFill } from "react-icons/ri";

import "../Register/Register.css";
import "./MyProfile.css"

const MyProfile = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  //Context
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

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
      <h2 className="title-page">Painel do Usuario</h2>
      <p>Nesta pagina você pode alterar seus dados e/ou encerrar a secção</p>
      <div className="contaier-img-name">
        <img
          src="https://fakeimg.pl/600x400?text=User+Image"
          alt="Foto de perfil"
        />
        <span>Olá {user.displayName}, seja bem vindo(a)!</span>
        <button onClick={logout} className="btn-submit">Sair</button>
      </div>
      <form className="form-container" onSubmit={handleSubmit}>
        <span>Dados pessoais</span>
        <label className="label-form">
          <input
            type="text"
            name="displayName"
            placeholder="Nome Completo"
            value={displayName}
            onChange={(e) => {
              setDisplayName(e.target.value);
            }}
          />
        </label>
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
        <label className="label-form">
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
        <div className="container-btns">
          {!loading && (
            <button className="btn-submit" type="submit">
              Alterar
            </button>
          )}
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

export default MyProfile;
