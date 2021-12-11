import React from "react";
import { Contact } from "../../model/contact.class";
import CompoB from "../compB/componenteB";
import "./compoA.css";

const CompoA = () => {
  const contactDef = new Contact("Jos", "Lor", "loquesea@.com", true);

  return (
    <div>
      <div id="detalle">Detalles de Contacto:</div>
      <CompoB contacto={contactDef} />
    </div>
  );
};

export default CompoA;
