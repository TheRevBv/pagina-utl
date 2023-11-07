const menu_data = [
  {
    id: 1,
    hasDropdown: false,
    title: "Inicio",
    link: "/",
    submenus: [
      { title: "Zona UTL", link: "/" },
      // { title: "Home Style 2", link: "/home-2" },
      // { title: "Home Style 3", link: "/home-3" },
    ],
  },
  {
    id: 2,
    hasDropdown: false,
    title: "Sobre Nosotros",
    link: "/about",
  },
  {
    id: 3,
    title: "Soy Aspirante",
    megaMenuTwo: true,
    megaMenu: false,
    link: "/soy-aspirante",
    mega_menus_two: [
      {
        title: "Conoce la UTL",
        link: "#",
        submenus: [
          {
            title: "Quienes somos",
            link: "/quienes-somos",
            count: "02",
            // age: "4-5 Yrs",
          },
          {
            title: "Modelo educativo",
            link: "/modelo-educativo",
            count: "03",
            // age: "3-4 Yrs",
          },
          {
            title: "Conoce nuestras becas",
            link: "/conoce-nuestras-becas",
            count: "04",
            // age: "2-3 Yrs",
          },
        ],
      },
      {
        title: "Oferta educativa",
        link: "#",
        submenus: [
          {
            title: "Carreras TSU",
            link: "/tsu",
            count: "05",
            // age: "3-4 Yrs",
          },
          {
            title: "Carreras ING/LIC",
            link: "/ingenierias",
            count: "06",
            // age: "4-5 Yrs",
          },
        ],
      },
      {
        title: "¿Cómo ingreso a estudiar en la UTL?",
        link: "#",
        submenus: [
          {
            title: "Admisiones TSU",
            link: "/admisiones-tsu",
            count: "05",
            // age: "3-4 Yrs",
          },
          {
            title: "Admisiones ING/LIC",
            link: "/admisiones-ingenierias",
            count: "06",
            // age: "4-5 Yrs",
          },
        ],
      },
      {
        title: "Contáctanos",
        link: "#",
        submenus: [
          {
            title: "Solicta información",
            link: "/solicita-informacion",
            count: "05",
            // age: "3-4 Yrs",
          },
          {
            title: "Oficina Virtual Escolares",
            link: "/oficina-virtual-escolares",
            count: "05",
            // age: "3-4 Yrs",
          },
          {
            title: "Buzón institucional",
            link: "/buzon-institucional",
            count: "05",
            // age: "3-4 Yrs",
          },
        ],
      },
      {
        title: "Nuestra rectora",
        link: "#",
        submenus: [
          {
            programImg: true,
            title: "Nuestra rectora",
            link: "/mensajes-rectora",
            img: "/assets/img/logo/mega-menu-1.png",
            btn: "Ver más",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    hasDropdown: true,
    title: "Soy Estudiante",
    link: "/soy-estudiante",
    submenus: [
      { title: "Shop Main", link: "/shop" },
      { title: "Shop Details", link: "/shop-details" },
      { title: "Wishlist", link: "/wishlist" },
      { title: "Cart", link: "/cart" },
      { title: "Checkout", link: "/checkout" },
    ],
  },
  {
    id: 5,
    title: "Soy Empresario",
    megaMenu: true,
    link: "/soy-empresario",
    pages: true,
    mega_menus: [
      {
        title: "Nuestra rectora",
        link: "#",
        submenus: [
          { title: "Mensaje de la rectora", link: "/mensaje-rectora" },
        ],
      },
      {
        title: "Conoce la UTL",
        link: "#",
        submenus: [
          { title: "Historia", link: "/historia" },
          { title: "Filosofía", link: "/filosofia" },
          { title: "Ejes estratégicos", link: "/ejes-estrategicos" },
          { title: "Equipo directivo UTL", link: "/equipo-directivo-utl" },
          { title: "Planteles", link: "/planteles" },
        ],
      },
      {
        title: "Conoce nuestros programas educativos",
        link: "#",
        submenus: [
          { title: "TSU", link: "/tsu" },
          { title: "Ingenierías", link: "/ingenierias" },
        ],
      },
      {
        title: "Vinculación Empresarial",
        link: "#",
        submenus: [
          { title: "Estadías Empresariales", link: "/estadias-empresariales" },
          { title: "Bolsa de trabajo", link: "/bolsa-de-trabajo" },
          { title: "Analisis situacional de trabajo (AST)", link: "/ast" },
          { title: "Educación dual", link: "/educacion-dual" },
        ],
      },
      {
        title: "Servicios a la industria",
        link: "#",
        submenus: [
          { title: "Capacitación", link: "/capacitacion" },
          { title: "Educación continua", link: "/educacion-continua" },
          { title: "Asesorias", link: "/asesorias" },
          { title: "Servicios Tecnológicos", link: "/servicios-tecnologicos" },
          { title: "Desarrollo de software (INNXWARE)", link: "/innxware" },
        ],
      },
      {
        title: "Contactanos",
        link: "#",
        submenus: [
          { title: "Buzón institucional", link: "/buzon-institucional" },
        ],
      },
    ],
  },
  {
    id: 6,
    hasDropdown: true,
    title: "Soy egresado",
    link: "/news",
    submenus: [
      { title: "Bolsa de trabajo", link: "/bolsa-de-trabajo" },
      { title: "Emprendimiento", link: "/news-sidebar" },
      // { title: "Educacion continua", link: "/news-classic" },
      // { title: "¿Quieres laboral en la utl?", link: "/news-details" },
      { title: "¿Quieres laborar en la utl?", link: "https://sito.utleon.edu.mx/jsp/reclutamiento/muestra_convocatoria_general.jsp" },

    ],
  },
  {
    id: 7,
    title: "Soy Administrativo",
    megaMenu: true,
    link: "/mensajeAdministrativo",
    pages: true,
    mega_menus: [
      {
        title: "Inicio",
        link: "#",
        submenus: [
          { title: "Mensaje de la rectora", link: "/mensajeAdministrativo" },
            { title: "Salud Integral", link: "/saludIntegral" },
        ],
      },
      {
        title: "Recursos para la gestión administrativa",
       link: "#",
       submenus: [
         { title: "SITO", link: "https://sito.utleon.edu.mx/" },
         { title: "SGI", link: "http://sgi.utleon.edu.mx/" },
         { title: "Correo Institucional", link: "https://www.office.com/?auth=2" },
         { title: "Calendario Escolar", link: "https://www.utleon.edu.mx/resource/img/CALENDARIO%20LE%C3%93N.jpg" },
         { title: "Difusion e Imagen Intitucional", link: "/imagenInstitucional" },
         { title: "Mesa de Ayuda DSI", link: "http://zammad.utleon.edu.mx/#login" },
       ],
      },
      {
        title: "Desarrollo Humano y Organizacional",
       link: "#",
       submenus: [
         { title: "Reclutamiento y Seleccion", link: "https://sito.utleon.edu.mx/jsp/reclutamiento/muestra_convocatoria_general.jsp" },
         { title: "Capacitacion", link: "/capacitacion" },
         { title: "Entrega-Recepcion", link: "/entrega-Recepcion" },
         { title: "Resultados de Medicion", link: "/resultados-Medicion" },
       ],
      },
      {
        title: "Organos Colegiados",
        link: "#",
        submenus: [
          { title: "Ética y Prevencion de Conflictos de Interes", link: "/EticayPrevencionConflicto" },
          { title: "Comite de Igualdad Laboral y no Discriminacion", link: "/comiteIgualdad" },
          { title: "Sub-Comite de Atenciaon a Presuntos Caso de Violencia, Acoso y Hostigamiento", link: "/atencionCasos" },
        ],
      },
      {
        title: "Transparencia",
       link: "#",
       submenus: [
         { title: "Finanzas", link: "/finanzas" },
         { title: "Contraloria Social", link: "/contraloria" },
         { title: "Obligaciones de Transparencia", link: "https://transparencia.guanajuato.gob.mx/transparencia/informacion_publica_pordependencia.php?dependencia=52" },
       ],
      },
      {
        title: "Protocolo de Seguridad",
       link: "#",
       submenus: [
         { title: "Protocolo de Seguridad", link: "/protocoloSeguridad" },
         { title: "Protocolo de Emergencia", link: "https://www.utleon.edu.mx/public_html/seguridad-institucional/protocolo-de-emergencia/img_protocolo_de_emergencia.jpg" },
       ],
      },
    ],
  },
  {
    id: 8,
    hasDropdown: false,
    title: "Contactanos",
    link: "/contact",
  },
];

export default menu_data;
