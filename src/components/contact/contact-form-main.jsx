import ContactForm from "@components/forms/contact-form";
import React from "react";

const ContactFormMain = () => {
  return (
    <section className="bd-contact-area pb-60">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 mb-60">
            <div
              className="bd-contact-form wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <h3 className="bd-contact-form-title mb-25">
                Contactanos para más información
              </h3>
              <ContactForm />
            </div>
          </div>
          <div className="col-xl-6 mb-60">
            <div
              className="bd-contact-map wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.2262963322664!2d-101.58422372396556!3d21.063622086578814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b963652f40f0d%3A0xa7d88da0ad8eff8a!2sUniversidad%20Tecnol%C3%B3gica%20de%20Le%C3%B3n!5e0!3m2!1ses-419!2smx!4v1698353318253!5m2!1ses-419!2smx"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormMain;
