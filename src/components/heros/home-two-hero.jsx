// import Image from "next/image";
// import Link from "next/link";
// import { Scrollbar, A11y, Autoplay, EffectFade, Navigation } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css/bundle";
import shape from "@assets/img/shape/curved-line-2.png";
import bg_1 from "@assets/img/hero/img-Alumnos.jpg";
import bg_2 from "@assets/img/hero/utl-Patio2.png";
import bg_3 from "@assets/img/hero/img-Programa.jpeg";
import Carrousel from "@components/slider/carrousel";

const hero_data = [
  {
    id: 1,
    shape: shape,
    bg: bg_1,
    subTitle: "Variedad de carreras y programas académicos",
    title: "Encuentra tu vocación",
    btn: "Admisiones abiertas",
  },
  {
    id: 2,
    shape: shape,
    bg: bg_2,
    subTitle: "Instalaciones de primer nivel y profesores de calidad",
    title: "Excelentes instalaciones",
    btn: "Ver más",
  },
  {
    id: 3,
    shape: shape,
    bg: bg_3,
    subTitle:
      "Programas de intercambio y oportunidades de crecimiento en varios paises",
    title: "Oportunidades para tu futuro",
    btn: "Ver más",
  },
];

const HomeTwoHero = () => {
  return (
    <section className="bd-hero-area-2 p-relative">
      <div className="bd-hero-social-wrapper is-white">
        <div className="bd-hero-social">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-facebook-f"></i>facebook
          </a>
        </div>
        <div className="bd-hero-social">
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-twitter"></i>twitter
          </a>
        </div>
        <div className="bd-hero-social">
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-youtube"></i>youtube
          </a>
        </div>
      </div>
      <div className="bd-hero-navigation mb-15 d-none d-md-flex">
        <button className="bd-hero-prev">
          <i className="fa-regular fa-angle-left"></i>
        </button>
        <button className="bd-hero-next">
          <i className="fa-regular fa-angle-right"></i>
        </button>
      </div>
      <div className="bd-hero-slider bd-hero-active">
        <Carrousel data={hero_data} />
      </div>
    </section>
  );
};

export default HomeTwoHero;
