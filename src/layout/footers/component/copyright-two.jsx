import React from "react";

const CopyrightTwo = () => {
  return (
    <div className="bd-footer-copyright pb-5 pt-25">
      <div className="bd-footer-copyright-wrap d-flex justify-content-center">
        <div className="bd-footer-copyright-text is-white pb-20">
        <p>
  Derechos Reservados &copy;{new Date().getFullYear()} Universidad Tecnológica de León. Todos los derechos reservados.
</p>
        </div>
      </div>
    </div>
  );
};

export default CopyrightTwo;
