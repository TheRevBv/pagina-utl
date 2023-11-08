import React from 'react';
import Image from "next/image";
import shape from "@assets/img/shape/wave-section-break.png";

const features = [
    {
        id: 1,
        title: 'Resultados de medicion de clima laboral',
        link: "https://www.utleon.edu.mx/resource/documentos/WEB%20DHYO/Resultados%20GTO%20clima2021.pdf",
        iconStyle: 'icon-1',
        icon: 'fa-solid fa-bullseye',
    },
    {
        id: 2,
        title: 'Resultados de clima laboral enfoque de Igualdad Laboral y No Discriminación',
        link: 'https://www.utleon.edu.mx/resource/documentos/WEB%20DHYO/Clima%20Laboral%20con%20enfoque%20de%20Igualdad%20y%20No%20Discriminaci%C3%B3n.pdf',
        iconStyle: 'icon-2',
        icon: 'fa-solid fa-eye',
    },
    {
        id: 3,
        title: 'Resultados de evaluación de riesgos Psicosociales',
        link: 'https://www.utleon.edu.mx/resource/documentos/WEB%20DHYO/INFORME%20DE%20RIESGOS%20PSICOSOCIALES%202020%20ok.pdf',
        iconStyle: 'icon-3',
        icon: 'fa-solid fa-seedling',
    }
]

const HomeThreeFeature = ({wave}) => {
    return (
        <div className="bd-feature-area p-relative theme-bg pt-120 pb-120">
            {wave &&
                <div className="bd-feature-bottom-shape">
                    <Image src={shape} style={{ width: "100%", height: "100%" }} alt="img not found" />
                </div>
            }
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <div className="bd-section-title-wrapper is-white text-center mb-55 wow fadeInUp" data-wow-duration="1s"
                            data-wow-delay=".3s">
                            <h2 className="bd-section-title mb-0">Actividades</h2>
                        </div>
                    </div>
                </div>
                <div className="bd-feature-wrapper wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                    <div className="row">
                        <div className="col-12">
                            <ul className="feature" style={{display: "flex", alignItems: "center", flexDirection: "row"}}>
                                {features.map((item) => (
                                    <li style={{width: "100%"}} key={item.id}>
                                        <a href={item.link}>
                                        <div className="bd-feature">
                                            <div className="bd-feature-content">
                                                <div className={`bd-feature-icon ${item.iconStyle}`}>
                                                    <i className={item.icon}></i>
                                                </div>
                                                <h4 className="bd-feature-title">{item.title}</h4>
                                            </div>
                                        </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeThreeFeature;