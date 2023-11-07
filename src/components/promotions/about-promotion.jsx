import React from 'react';
import Image from "next/image";
import promotion from "@assets/img/promotion/estructura.jpg";
import line from "@assets/img/shape/tripple-line.png";

const AboutPromotion = () => {
    return (
        <section className="bd-promotion-area-2 pt-120 pb-60 fix">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="bd-promotion bd-promotion-2 mb-60 wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s">
                            <div className="bd-section-title-wrapper mb-35">
                                <h2 className="bd-section-title mb-10">Consejo Directivo</h2>
                                <span className="mb-10 d-inline-block">Es el máximo órgano de gobierno de la universidad y en conjunto con la Rectoría, son los responsables de su dirección y administración.</span>
                                <p>El Consejo Directivo está integrado de la siguiente manera:

I.- Tres representantes del Gobierno del Estado de Guanajuato, que serán nombrados por el Gobernador y lo presidirá quien él designe;

II.- Tres representantes del Gobierno Federal, designados por el Secretario de Educación Pública;

III.- Un representante del Gobierno Municipal designado por el H. Ayuntamiento, donde se ubique la universidad;

IV.- Dos representantes del Sector Productivo, a invitación del Ejecutivo Estatal.</p>
                            </div>
                            <div className="bd-promotion-list-2">
                                <ul>
                                    <li>
                                        <div className="bd-promotion-icon">
                                            <i className="flaticon-exclusive theme-bg-2"></i>
                                        </div>
                                        <span>Intitucion reconocida</span>
                                    </li>
                                    <li>
                                        <div className="bd-promotion-icon">
                                            <i className="flaticon-whiteboard theme-bg"></i>
                                        </div>
                                        <span>Programas actualizados</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="bd-promotion-thumb-wrapper mb-60 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                            <div className="bd-promotion-thumb">
                                <div className="">
                                    <Image src={promotion} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                    <div className="panel-2 wow"></div>
                                </div>
                            </div>
                            <div className="bd-promotion-shape d-none d-lg-block">
                                <Image src={line} style={{ width: "100%", height: "100%" }} alt="img not found" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPromotion;