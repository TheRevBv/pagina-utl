import logo from "@assets/img/logo/logoUtlHorizontal.png";
import logoWhite from "@assets/img/logo/logoUtlHorizontalWhite.png";

const footer_data = {
  description: {
    id: 1,
    logo: logo,
    logoWhite: logoWhite,
    teaser:
      "Comprometidos con la excelencia educativa y la innovación tecnológica. Conéctate con nosotros y forma parte de nuestra comunidad educativa.",
    socialTitle: "Social",
    newsTitle: "Join Our Newsletter",
    newsBtn: "Subscribe now",
    social_icons: [
      {
        id: 1,
        icon: "fa-brands fa-facebook-f",
        url: "https://www.facebook.com/UTLmex",
        name: "Facebook",
      },
      {
        id: 2,
        icon: "fa-brands fa-twitter",
        url: "https://twitter.com/UTLmex",
        name: "Twitter",
      },
      {
        id: 3,
        icon: "fa-brands fa-youtube",
        url: "https://www.youtube.com/@utlmex7825",
        name: "Youtube",
      },
    ],
  },
  quick_links: {
    id: 2,
    title: "Enlaces Directos",
    menus: [
      {
        id: 1,
        menu: "Biblioteca Digital",
        path: "http://www.bibliotecaecest.mx",
      },
      {
        id: 2,
        menu: "Aula Virtual",
        path: "http://aulaut.utleon.edu.mx",
      },
    ],
  },
  program_links: {
    id: 3,
    title: "Nuestros Avisos de Privacidad",
    programs: [
      {
        id: 1,
        menu: "Aviso de Privacidad Simplificado",
        path: "https://www.utleon.edu.mx/resource/documentos/AVISO%20PRIVACIDAD%20SIMPLIFICADO-23.pdf",
      },
      {
        id: 2,
        menu: "Aviso de Privacidad Integral",
        path: "https://www.utleon.edu.mx/resource/documentos/AVISO%20PRIVACIDAD%20INTEGRAL%2023.pdf",
      },
    ],
  },

  customer_services: {
    id: 3,
    title: "Programs",
    services: [
      {
        id: 1,
        menu: "Recently Viewed",
        path: "/programs",
      },
      {
        id: 2,
        menu: "New Products",
        path: "/shop",
      },
      {
        id: 3,
        menu: "Shipping & Returns",
        path: "/contact",
      },
      {
        id: 4,
        menu: "Senior Kg",
        path: "/programs",
      },
      {
        id: 5,
        menu: "Become a Seller",
        path: "/programs",
      },
    ],
  },
  contact_info: {
    id: 4,
    title: "Contactanos",
    infos: [
      {
        id: 1,
        icon: "fa-light fa-location-dot",
        url: "https://www.google.com/maps/place/Universidad+Tecnológica+de+León/@21.0636171,-101.5816488,15z/data=!4m14!1m7!3m6!1s0x842b963652f40f0d:0xa7d88da0ad8eff8a!2sUniversidad+Tecnológica+de+León!8m2!3d21.0636171!4d-101.5816488!16s%2Fg%2F11bwdqj7w2!3m5!1s0x842b963652f40f0d:0xa7d88da0ad8eff8a!8m2!3d21.0636171!4d-101.5816488!16s%2Fg%2F11bwdqj7w2?entry=ttu",
        title: "Blvd. Universidad Tecnológica #225 Col. San Carlos",
      },
      {
        id: 2,
        icon: "fa-light fa-phone",
        url: "tel:(477) 7 10 00 20",
        title: "(477) 7 10 00 20",
      },
      {
        id: 3,
        icon: "fa-light fa-envelope",
        url: "mailto:support@utleon.edu.mx",
        title: "Support@utleon.edu.mx",
      },
    ],
  },
};

export default footer_data;
