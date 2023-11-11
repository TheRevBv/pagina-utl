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
            img: "/assets/img/utl/imgRectora.jpg",
            btn: "Ver más",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    megaMenu: true,
    pages: true,
    title: "Soy Estudiante",
    link: "/soy-estudiante",
    mega_menus: [
      {
        title: "Tramites escolares",
        link: "#",
        submenus: [
          {
            title: "Solicitud de constancias",
            link: "/solicitud-constancias",
            count: "02",
            // age: "4-5 Yrs",
          },
          {
            title: "Trámite de credencial",
            link: "/tramite-credencial",
            count: "03",
            // age: "3-4 Yrs",
          },
          {
            title: "Trámite Estudiantil IMSS",
            link: "/tramite-estudiantil-imss",
            count: "04",
            // age: "2-3 Yrs",
          },
          {
            title: "Becas",
            link: "/becas",
            count: "05",
          },
          {
            title: "Pago de examen de regularización",
            link: "/pago-examen-regularizacion",
            count: "06",
          },
          {
            title: "Reinscripción",
            link: "/reinscripcion",
            count: "07",
          },
          {
            title: "Reingreso",
            link: "/reingreso",
            count: "08",
          },
          {
            title: "Tramite de baja",
            link: "/baja",
            count: "09",
          },
          {
            title: "Titulación",
            link: "/titulacion",
            count: "10",
          },
        ],
      },
      {
        title: "Servicios integrales para el alumnado",
        link: "#",
        submenus: [
          {
            title: "Actividades culturales y deportivas",
            link: "/actividades-culturales-deportivas",
            count: "05",
            // age: "3-4 Yrs",
          },
          {
            title: "Programa institucional de tutorías PIT",
            link: "/programa-institucional-tutorias-pit",
            count: "06",
            // age: "4-5 Yrs",
          },
          {
            title: "Servicio de atención psicológica SAP",
            link: "/servicio-atencion-psicologica-sap",
            count: "07",
          },
          {
            title: "Emprendimiento",
            link: "/emprendimiento",
            count: "08",
          },
          {
            title: "Centro de información",
            link: "/centro-informacion",
            count: "09",
          },
          {
            title: "Centro de idiomas",
            link: "/centro-idiomas",
            count: "10",
          },
          {
            title: "Salud integral",
            link: "/salud-integral",
            count: "11",
          },
          {
            title: "Laboratorios especializados",
            link: "/laboratorios-especializados",
            count: "12",
          },
          {
            title: "Altas de internet",
            link: "/altas-internet",
            count: "13",
          },
          {
            title: "Centros de cómputo",
            link: "/centros-computo",
            count: "14",
          },
          {
            title: "Aula Virtual",
            link: "/aula-virtual",
            count: "15",
          },
          {
            title: "Estadías ",
            link: "/estadias",
            count: "16",
          },
          {
            title: "Estadías Especiales e Internacionales",
            link: "/estadias-especiales-internacionales",
            count: "17",
          },
          {
            title: "Investigación Estudiantil",
            link: "/investigacion-estudiantil",
            count: "18",
          },
        ],
      },
      {
        // Agrega acento a organos colegiados
        title: "Organos Colegiados",
        link: "#",
        submenus: [
          {
            title: "Comisión de Salud",
            link: "/comision-salud",
            count: "05",
            // age: "3-4 Yrs",
          },
          {
            title: "Cultura de Paz",
            link: "/cultura-paz",
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
            title: "Mensaje de la rectora",
            link: "/mensajes-rectora",
            img: "/assets/img/utl/imgRectora.jpg",
            btn: "Ver más",
          },
        ],
      },
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
      {
        title: "¿Quieres laborar en la utl?",
        link: "https://sito.utleon.edu.mx/jsp/reclutamiento/muestra_convocatoria_general.jsp",
      },
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
          {
            title: "Correo Institucional",
            link: "https://www.office.com/?auth=2",
          },
          {
            title: "Calendario Escolar",
            link: "https://www.utleon.edu.mx/resource/img/CALENDARIO%20LE%C3%93N.jpg",
          },
          {
            title: "Difusion e Imagen Intitucional",
            link: "/imagenInstitucional",
          },
          {
            title: "Mesa de Ayuda DSI",
            link: "http://zammad.utleon.edu.mx/#login",
          },
        ],
      },
      {
        title: "Desarrollo Humano y Organizacional",
        link: "#",
        submenus: [
          {
            title: "Reclutamiento y Seleccion",
            link: "https://sito.utleon.edu.mx/jsp/reclutamiento/muestra_convocatoria_general.jsp",
          },
          { title: "Capacitacion", link: "/capacitacion" },
          { title: "Entrega-Recepcion", link: "/entregaRecepcion" },
          { title: "Resultados de Medicion", link: "/resultadosMedicion" },
        ],
      },
      {
        title: "Organos Colegiados",
        link: "#",
        submenus: [
          {
            title: "Ética y Prevencion de Conflictos de Interes",
            link: "/EticayPrevencionConflicto",
          },
          {
            title: "Comite de Igualdad Laboral y no Discriminacion",
            link: "/comiteIgualdad",
          },
          {
            title:
              "Sub-Comite de Atenciaon a Presuntos Caso de Violencia, Acoso y Hostigamiento",
            link: "/atencionCasos",
          },
        ],
      },
      {
        title: "Transparencia",
        link: "#",
        submenus: [
          { title: "Finanzas", link: "#" },
          { title: "Contraloria Social", link: "#" },
          {
            title: "Obligaciones de Transparencia",
            link: "https://transparencia.guanajuato.gob.mx/transparencia/informacion_publica_pordependencia.php?dependencia=52",
          },
        ],
      },
      {
        title: "Protocolo de Seguridad",
        link: "#",
        submenus: [
          { title: "Protocolo de Seguridad", link: "/protocoloSeguridad" },
          {
            title: "Protocolo de Emergencia",
            link: "https://www.utleon.edu.mx/public_html/seguridad-institucional/protocolo-de-emergencia/img_protocolo_de_emergencia.jpg",
          },
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
