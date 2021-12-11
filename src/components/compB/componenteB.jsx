import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../model/contact.class.js";
import "./compoB.css";

const CompoB = ({ contacto }) => {
  return (
    <div id="datos">
      <h2>Nombre: {contacto.nombre}</h2>
      <h2>Apellido: {contacto.apellido}</h2>
      <h3>e. mail: {contacto.email}</h3>
      <h5>El usuario esta: {contacto.conectado ? "ON LINE" : "OFF LINE"}</h5>
    </div>
  );
};

CompoB.propTypes = {
  contacto: PropTypes.instanceOf(Contact),
};

export default CompoB;
