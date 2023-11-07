import React from "react";

const HomeNewsletter = ({ title, subTitle,dataContacto,telefono }) => {
  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    // console.log(dataContacto),
    <section className="bd-newsletter-area">
      <div className="container">
        <div className="bd-newsletter pt-100 pb-100 theme-bg">
          <div
            className="bd-newsletter-bg"
            style={{ backgroundImage: "url(/assets/img/bg/bg_azul.jpg)" }}
          ></div>
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="bd-newsletter-content">
                <div className="bd-section-title-wrapper text-center is-white mb-45">
                  <h2 className="bd-section-title mb-0">
                    {title}
                  </h2>
                  <p>
                    {subTitle}  
                  </p>
                </div>
                {dataContacto?(
                <div className="bd-newsletter-form">
                <form onSubmit={handleSubmit}>
                  <div className="bd-newsletter-input">
                  <div className="card">
                  <div className="card-body">
{dataContacto.map((element, index) => (
  <div key={index}>
    <p>{element.nombre} - {element.correo}</p>
  </div>
))}
<p>Tel: {telefono}</p>
</div>

</div>
                    {/* <input type="email" placeholder="Tu correo" />
                    <p>Gola</p> */}
                    {/* <button type="submit" className="bd-btn">
                      <span className="bd-btn-inner">
                        <span className="bd-btn-normal">
                          <i className="fa-sharp fa-solid fa-paper-plane"></i>
                          Suscribete ahora
                        </span>
                        <span className="bd-btn-hover">
                          <i className="fa-sharp fa-solid fa-paper-plane"></i>
                          Suscribete ahora
                        </span>
                      </span>
                    </button> */}
                  </div>
                </form>
              </div>
                ):null}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeNewsletter;
