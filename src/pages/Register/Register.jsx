import "../Login/Login.css";

const Register = () => {
  return (
    <div className="container">
      <h2>Crie a sua conta</h2>
      <p>Já tem uma conta? Faça login agora mesmo.</p>
      <form onSubmit={() => {}}>
        <label>
          <input type="text" placeholder="Insira um Login" />
        </label>
        <label>
          <input type="text" placeholder="Defina a sua Senha" />
        </label>
        <label>
          <input type="email" placeholder="Digite seu e-mail" />
        </label>
        <button type="submit">Criar Conta</button>
      </form>
    </div>
  );
};

export default Register;
