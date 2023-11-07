import React from 'react';
import Image from "next/image";
import shape from "@assets/img/shape/wave-section-break.png";

const features = [
    {
        id: 1,
        title: 'Mision',
        teaser: 'Somos una universidad reconocida por su calidad internacional, sus aportaciones al desarrollo de la tecnología y al bienestar de la sociedad.',
        iconStyle: 'icon-1',
        icon: 'fa-solid fa-bullseye',
    },
    {
        id: 2,
        title: 'Vision',
        teaser: 'Formar ciudadanos/as del mundo con educación tecnológica de calidad a través de la docencia, la investigación aplicada, la difusión del conocimiento y la vinculación, que contribuyan a la innovación y al desarrollo sustentable.',
        iconStyle: 'icon-2',
        icon: 'fa-solid fa-eye',
    },
    {
        id: 3,
        title: 'Valores',
        teaser: 'Dignidad, responsabilidad, solidaridad, compromiso, responsabilidad social.',
        iconStyle: 'icon-3',
        icon: 'fa-solid fa-seedling',
    },
    {
        id: 4,
        title: 'Filosofia institucional',
        teaser: 'Es el valor intrínseco de las personas, así como de los objetos y situaciones en cuanto contribuyen a la realización personal. Tomar decisiones propias y expresar ideales aceptando las diferencias con el resto de las personas        ',
        iconStyle: 'icon-4',
        icon: 'fa-solid fa-scale-balanced',
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
                            <h2 className="bd-section-title mb-0">Somos Comunidad UTL</h2>
                            <p>Somos una institución tecnológica con sentido humano<br /> Orgullosamente UTL!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bd-feature-wrapper wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                    <div className="row">
                        <div className="col-12">
                            <ul className="feature">
                                {features.map((item) => (
                                    <li className="feature-item" key={item.id}>
                                        <div className="bd-feature">
                                            <div className="bd-feature-content">
                                                <div className={`bd-feature-icon ${item.iconStyle}`}>
                                                    <i className={item.icon}></i>
                                                </div>
                                                <h4 className="bd-feature-title">{item.title}</h4>
                                                <p>{item.teaser}</p>
                                            </div>
                                        </div>
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