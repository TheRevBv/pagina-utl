import Link from "next/link";
import React from "react";
import Image from "next/image";
import bg from "@assets/img/bg/breadcrumb-bg.jpg";
import line_1 from "@assets/img/shape/white-curved-line.png";
import line_2 from "@assets/img/shape/curved-line-2.png";
import CarrouselTwo from "@components/slider/carrousel-two";
import shape from "@assets/img/shape/curved-line-2.png";
import bg_1 from "@assets/img/hero/img-Alumnos.jpg";
import bg_2 from "@assets/img/hero/utl-Patio2.png";
import bg_3 from "@assets/img/hero/img-Programa.jpeg";

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

const Breadcrumb = ({ title, subTitle }) => {
  return (
    <>
      <section className="bd-breadcrumb-area p-relative fix theme-bg">
        <CarrouselTwo data={hero_data} />
      </section>
    </>
  );
};

export default Breadcrumb;
