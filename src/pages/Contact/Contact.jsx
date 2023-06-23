import React from "react";
import "./Contact.sass";
import { RiErrorWarningFill } from "react-icons/ri";

const Contact = () => {
  return (
    <div className="container">
      <h2 className="title-page">Realizar Login</h2>
      <form className="form-container">
        <input type="text" />
        <div className="buttons">
          <button className="btn">Enviar</button>
          <button className="btn" style={{padding: "10px 20px"}}>Enviar</button>
          <button className="btn register">Enviar</button>
        </div>
        <div className="messages">
          <span className="error-icon">{<RiErrorWarningFill />}</span>
          <span>Erro</span>
        </div>
        <div className="messages error">
          <span className="error-icon">{<RiErrorWarningFill />}</span>
          <span>Erro</span>
        </div>
        <div className="messages warning">
          <span className="error-icon">{<RiErrorWarningFill />}</span>
          <span>Erro</span>
        </div>
      </form>
    </div>
  );
};

export default Contact;
