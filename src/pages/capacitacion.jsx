import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import NewsPageMain from "@components/blogs/news-page-main";
import HeaderFour from "@layout/headers/headerFour";
import ProgramPromotion from "@components/promotions/program-promotion";
import imgRectora from "@assets/img/utl/imgRectora.jpg";

const capacitacion = () => {
  return (
    <Wrapper>
    <SEO pageTitle={'Capacitacion'} />
    <HeaderFour />
    <Breadcrumb title="Soy Administrativo" subTitle="Capacitacion" />
    {/* <NewsPageMain /> */}
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
    <div style={{width: "80%", height: "auto", alignItems: "center"}}>
    <h2 style={{ marginTop: "50px"}}>Capacitacion</h2>
    <table className="table table-bordered table-hover table-striped" style={{marginTop: "2rem"}}>
        <thead className="thead-dark">
          <tr>
            <th>Nombre del Evento de Capacitacion</th>
            <th>Objetivo del Evento</th>
            <th>Orientacion de Evento</th>
            <th>Tipo de Programa</th>
            <th>Justificacion</th>
            <th>Fecha</th>
          </tr>
        </thead>
    <tbody>
    <tr>
    <td>ABC de la accesibilidad web</td>
    <td>Identifica la estructura básica de la accesibilidad web, partiendo de la necesidad de elaborar un diseño universal que permita a las personas con discapacidad el acceso a la información en condiciones de igualdad y sin discriminación.</td>
    <td>Desarrollo de habilidades</td>
    <td>Interno</td>
    <td>Acreditar a las personas servidoras públicas en temas que impactan en su desarrollo profesional y personal</td>
    <td>Febrero - Noviembre 2022</td>
  </tr>
  <tr>
    <td>Administración de proyectos</td>
    <td>Conoce e identifica cada una de las etapas de la metodología PMI® para aplicar las mejores prácticas internacionales en la administración eficiente de proyectos.</td>
    <td>Desarrollo de habilidades</td>
    <td>Interno</td>
    <td>Acreditar a las personas servidoras públicas en temas que impactan en su desarrollo profesional y personal</td>
    <td>Febrero - Noviembre 2022</td>
  </tr>
  <tr>
    <td>Claves para la atención pública sin discriminación</td>
    <td>Identifica estrategias que permiten a las servidoras públicas y a los servidores públicos encaminar su actuar hacia un trato libre de discriminación en el contexto mexicano.</td>
    <td>Desarrollo de habilidades</td>
    <td>Interno</td>
    <td>Acreditar a las personas servidoras públicas en temas que impactan en su desarrollo profesional y personal</td>
    <td>Febrero - Noviembre 2022</td>
  </tr>
  <tr>
    <td>Cómo gestionar tu tiempo de forma fácil y sencilla</td>
    <td>Desarrolla habilidades para la dirección y administración del tiempo aplicando técnicas y herramientas para su gestión con el objetivo de cumplir las metas establecidas y mejorar la eficiencia en el trabajo.</td>
    <td>Desarrollo de habilidades</td>
    <td>Interno</td>
    <td>Acreditar a las personas servidoras públicas en temas que impactan en su desarrollo profesional y personal</td>
    <td>Febrero - Noviembre 2022</td>
  </tr>
    </tbody>
    </table>

   <table className="table table-bordered table-hover table-striped" style={{marginTop: "2rem"}}>
        <thead className="thead-dark">
          <tr>
            <th>Nombre del Evento de Capacitacion</th>
            <th>Objetivo del Evento</th>
            <th>Orientacion de Evento</th>
            <th>Tipo de Programa</th>
            <th>Justificacion</th>
            <th>Fecha</th>
          </tr>
        </thead>
    <tbody>
    <tr>
    <td>Comunicación asertiva</td>
    <td>Conoce e identifica las principales características de la comunicación asertiva y aplica diversas técnicas para que sea clara y empática con el objetivo de gestionar las emociones y hacer un uso consciente del lenguaje.</td>
    <td>Desarrollo de habilidades</td>
    <td>Interno</td>
    <td>Acreditar a las personas servidoras públicas en temas que impactan en su desarrollo profesional y personal</td>
    <td>Abril - Noviembre 2022</td>
  </tr>
  <tr>
    <td>Construyendo una visión de gobierno</td>
    <td>Identifica la filosofía institucional del Poder Ejecutivo del Estado de Guanajuato 2018-2024 a través del reconocimiento de las directrices estratégicas y normativas para establecer su relación con las funciones que desarrolla como persona servidora pública.</td>
    <td>Desarrollo de habilidades</td>
    <td>Interno</td>
    <td>Acreditar a las personas servidoras públicas en temas que impactan en su desarrollo profesional y personal</td>
    <td>___</td>
  </tr>
  <tr>
    <td>Control interno</td>
    <td>Conoce e implementa las bases del control interno; además identifica, evalúa y diseña acciones con base en los Lineamientos Generales de Control Interno para la Administración Pública del Estado de Guanajuato con el fin de mantener controles efectivos que generen una seguridad razonable para el logro de sus objetivos y metas, así como para fortalecer el control interno en el estado.</td>
    <td>Desarrollo de habilidades</td>
    <td>Interno</td>
    <td>Acreditar a las personas servidoras públicas en temas que impactan en su desarrollo profesional y personal</td>
    <td>Febrero - Noviembre 2022</td>
  </tr>
  <tr>
    <td>Creatividad e innovación en las organizaciones</td>
    <td>Conoce los fundamentos de la innovación e identifica las características de un proyecto innovador, así como las herramientas, modelos y tendencias actuales para la gestión de la innovación en las organizaciones.</td>
    <td>Desarrollo de habilidades</td>
    <td>Interno</td>
    <td>Acreditar a las personas servidoras públicas en temas que impactan en su desarrollo profesional y personal</td>
    <td>Febrero - Noviembre 2022</td>
  </tr>
  </tbody>
    </table>


    <table className="table table-bordered table-hover table-striped" style={{marginTop: "2rem"}}>
        <thead className="thead-dark">
          <tr>
            <th>Nombre del Evento de Capacitacion</th>
            <th>Objetivo del Evento</th>
            <th>Orientacion de Evento</th>
            <th>Tipo de Programa</th>
            <th>Justificacion</th>
            <th>Fecha</th>
          </tr>
        </thead>
    <tbody>
    <tr>
    <td>Cultura del autocuidado | Parte 1. Cuidando la salud física</td>
    <td>Adquiere, identifica y aplica los conocimientos relacionados a los estilos de vida saludable a través de la revisión de materiales relacionados con el cuidado de la salud, con base a lineamientos y sugerencias emitidas por organismos nacionales e internacionales en el rubro de la salud, para así evitar el desarrollo de enfermedades crónico degenerativas.</td>
    <td>Desarrollo de habilidades</td>
    <td>Interno</td>
    <td>Acreditar a las y los servidores públicos en las Capacidades Profesionales Generales y de Visión de Gobierno</td>
    <td>Febrero - Noviembre 2022</td>
  </tr>
  <tr>
    <td>Cultura del autocuidado | Parte 2. Manejando el estrés laboral</td>
    <td>Identifica las causas, síntomas y consecuencias del estrés laboral para determinar las mejores opciones que le permitan su canalización adecuada, y determina las acciones a seguir para desarrollar una cultura del autocuidado en el entorno laboral.</td>
    <td>Desarrollo de habilidades</td>
    <td>Interno</td>
    <td>Acreditar a las personas servidoras públicas en temas que impactan en su desarrollo profesional y personal</td>
    <td>Febrero - Noviembre 2022</td>
  </tr>
  <tr>
    <td>Discriminación a personas que viven con VIH o SIDA</td>
    <td>Reconocer los aspectos básicos del derecho a la no discriminación de las personas que viven con VIH o SIDA, desde un enfoque de derechos humanos que permita la construcción de una cultura de igualdad e inclusión de dicha población.</td>
    <td>Desarrollo de habilidades</td>
    <td>Interno</td>
    <td>Acreditar a las personas servidoras públicas en temas que impactan en su desarrollo profesional y personal</td>
    <td>Febrero - Noviembre 2022</td>
  </tr>
  </tbody>
  </table>

  <table className="table table-bordered table-hover table-striped" style={{marginTop: "2rem"}}>
        <thead className="thead-dark">
          <tr>
            <th>Nombre del Evento de Capacitacion</th>
            <th>Objetivo del Evento</th>
            <th>Orientacion de Evento</th>
            <th>Tipo de Programa</th>
            <th>Justificacion</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          <tr>
    <td>El ABC para la igualdad laboral y no discriminación</td>
    <td>Contribuye a la construcción de una cultura de respeto a los derechos fundamentales y de igualdad de oportunidades a todas las personas a partir de una comprensión general del significado, alcances y obligaciones del Estado asociados al derecho de igualdad y no discriminación. Dota a las y los participantes de los conocimientos necesarios y la sensibilización suficientes para prevenir y erradicar conductas discriminatorias.</td>
    <td>Desarrollo de habilidades</td>
    <td>Interno</td>
    <td>Acreditar a las personas servidoras públicas en temas que impactan en su desarrollo profesional y personal</td>
    <td>Febrero - Noviembre 2022</td>
  </tr>
  <tr>
    <td>El derecho a la información: una responsabilidad del Estado</td>
    <td>Conocer el rol asignado como persona servidora pública al servicio del Gobierno del Estado de Guanajuato, así como identificar tanto los respectivos derechos como obligaciones, prohibiciones y prestaciones vigentes al momento de su ingreso. Con ello, se busca incentivar el actuar y motivación de las personas miembros del proyecto de Gobierno en beneficio de la ciudadanía guanajuatense.</td>
    <td>Desarrollo de habilidades</td>
    <td>Interno</td>
    <td>Acreditar a las personas servidoras públicas en temas que impactan en su desarrollo profesional y personal</td>
    <td>Febrero - Noviembre 2022</td>
  </tr>
  <tr>
    <td>Excel avanzado | Parte 1 Funciones, herramientas y técnicas avanzadas</td>
    <td>Aplica funciones, herramientas y técnicas avanzadas de la hoja de cálculo Excel (versión 2016 en adelante) con la finalidad de resolver de manera óptima tareas propias de los procesos y funciones del área laboral en el menor tiempo posible.</td>
    <td>Desarrollo de habilidades</td>
    <td>Interno</td>
    <td>Acreditar a las personas servidoras públicas en temas que impactan en su desarrollo profesional y personal</td>
    <td>Febrero - Noviembre 2022</td>
  </tr>
  <tr>
    <td>Excel básico | Parte 1. Conceptos, tablas, comandos y funciones básicas</td>
    <td>Conoce, identifica y aplica los principales conceptos, comandos y funciones básicas de Excel (versión 2016 en adelante) con la finalidad de asentar los conocimientos fundamentales de forma sólida que le permitan iniciarse en el uso de esta hoja de cálculo.</td>
    <td>Desarrollo de habilidades</td>
    <td>Interno</td>
    <td>Acreditar a las personas servidoras públicas en temas que impactan en su desarrollo profesional y personal</td>
    <td>Febrero - Noviembre 2022</td>
  </tr>
  <tr>
    <td>Finanzas personales</td>
    <td>Conoce, distingue y aplica las principales herramientas de las finanzas personales mediante el análisis y gestión de su entorno financiero a fin de tener una mejor organización que incentive la cultura de ahorro e inversión y que le permita medir el riesgo y lograr resultados positivos desde el punto de vista financiero en su núcleo familiar.</td>
    <td>Desarrollo de habilidades</td>
    <td>Interno</td>
    <td>Acreditar a las personas servidoras públicas en temas que impactan en su desarrollo profesional y personal</td>
    <td>Febrero - Noviembre 2022</td>
  </tr>
  <tr>
    <td>Guía rápida para el uso de lenguaje incluyente, accesible y no sexista</td>
    <td>Identifica las características que debe contener el lenguaje para que sea no sexista, incluyente y accesible a través de herramientas que le permitan utilizarlo en su vida laboral y cotidiana, con base en una perspectiva de derechos humanos y de género para promover una cultura de igualdad y no discriminación.</td>
    <td>Desarrollo de habilidades</td>
    <td>Interno</td>
    <td>Acreditar a las personas servidoras públicas en temas que impactan en su desarrollo profesional y personal</td>
    <td>Febrero - Noviembre 2022</td>
  </tr>
  <tr>
    <td>Inclusión y discapacidad</td>
    <td>Sensibiliza a las y los participantes sobre las consecuencias de las prácticas discriminatorias para las personas con discapacidad y para nuestra sociedad. Genera una corriente de cambio por una cultura de igualdad, inclusión y no discriminación hacia las personas con discapacidad.</td>
    <td>Desarrollo de habilidades</td>
    <td>Interno</td>
    <td>Acreditar a las personas servidoras públicas en temas que impactan en su desarrollo profesional y personal</td>
    <td>Febrero - Noviembre 2022</td>
  </tr>
  <tr>
    <td>Inducción al Gobierno del Estado</td>
    <td>Conocer el rol asignado como persona servidora pública al servicio del Gobierno del Estado de Guanajuato, así como identificar tanto los respectivos derechos como obligaciones, prohibiciones y prestaciones vigentes al momento de su ingreso. Con ello, se busca incentivar el actuar y motivación de las personas miembros del proyecto de Gobierno en beneficio de la ciudadanía guanajuatense.</td>
    <td>Desarrollo de habilidades</td>
    <td>Interno</td>
    <td>Acreditar a las personas servidoras públicas en temas que impactan en su desarrollo profesional y personal</td>
    <td>Febrero - Noviembre 2022</td>
  </tr>
  <tr>
    <td>Introducción a los instrumentos de control y consulta archivística</td>
    <td>Identifica los elementos que componen el Cuadro General de Clasificación Archivística y la guía de archivo documental, para su aplicación en la materia.</td>
    <td>Desarrollo de habilidades</td>
    <td>Interno</td>
    <td>Acreditar a las personas servidoras públicas en temas que impactan en su desarrollo profesional y personal</td>
    <td>Febrero - Noviembre 2022</td>
  </tr>
  <tr>
    <td>Las medidas para la igualdad en el marco de la Ley Federal para Prevenir y Eliminar la Discriminación</td>
    <td>Comprender la importancia de las medidas para la igualdad que derivan de la Ley Federal para Prevenir la Discriminación, las cuales constituyen el fundamento normativo de las políticas públicas con perspectiva de no discriminación, con la finalidad de reconocer la importancia de disminuir las brechas de la desigualdad.</td>
    <td>Desarrollo de habilidades</td>
    <td>Interno</td>
    <td>Acreditar a las personas servidoras públicas en temas que impactan en su desarrollo profesional y personal</td>
    <td>Febrero - Noviembre 2022</td>
  </tr>
  <tr>
    <td>Liderazgo y coaching las claves para el éxito directivo. Parte 1 Modelos competencias y herramientas</td>
    <td>Define e identifica los modelos, competencias y herramientas de liderazgo y coaching por medio de un enfoque hacia métodos de trabajo participativos, de comunicación, motivación y visión institucional para integrar equipos de trabajo productivos y orientados a la calidad.</td>
    <td>Desarrollo de habilidades</td>
    <td>Interno</td>
    <td>Acreditar a las personas servidoras públicas en temas que impactan en su desarrollo profesional y personal</td>
    <td>Febrero - Noviembre 2022</td>
  </tr>
  <tr>
    <td>Liderazgo y coaching: las claves para el éxito directivo | Parte 2. Aplicación de modelos, competencias y herramientas</td>
    <td>Aplica los modelos, competencias y herramientas de liderazgo y coaching por medio de un enfoque hacia métodos de trabajo participativos, de comunicación, motivación y visión institucional, mediante el análisis y resolución de casos para integrar equipos de trabajo productivos y orientados a resultados.</td>
    <td>Desarrollo de habilidades</td>
    <td>Interno</td>
    <td>Acreditar a las personas servidoras públicas en temas que impactan en su desarrollo profesional y personal</td>
    <td>Febrero - Noviembre 2022</td>
  </tr>
  <tr>
    <td>Liderazgo y coaching: las claves para el éxito directivo | Parte 3. Haciendo feedback</td>
    <td>Conoce y diferencia las principales características del feedback como una herramienta de comunicación efectiva del liderazgo cuyo objetivo es mejorar el rendimiento y mantener a las personas colaboradoras alineadas con la misión de la organización para, posteriormente, aplicarlo con un enfoque basado en el coaching.</td>
    <td>Desarrollo de habilidades</td>
    <td>Interno</td>
    <td>Acreditar a las personas servidoras públicas en temas que impactan en su desarrollo profesional y personal</td>
    <td>Febrero - Noviembre 2022</td>
  </tr>
  <tr>
    <td>Manejo de Tecnología 1</td>
    <td>Al finalizar el curso, la persona participante poseerá los conocimientos base que le permitan hacer uso de la computadora, interactuar con el escritorio de Windows, realizar búsquedas en internet y desarrollar habilidades para la realización de correos y documentos electrónicos.</td>
    <td>Desarrollo de habilidades</td>
    <td>Interno</td>
    <td>Acreditar a las personas servidoras públicas en temas que impactan en su desarrollo profesional y personal</td>
    <td>Febrero - Noviembre 2022</td>
  </tr>
  <tr>
    <td>Manejo de Tecnología 2</td>
    <td>Las y los servidores públicos adquieren las habilidades y los conocimientos necesarios y con ello operar aplicaciones ofimáticas de Microsoft Office creando documentos de texto, hojas de cálculo y presentaciones electrónicas para comunicar, analizar, procesar y enriquecer la información que se genera.</td>
    <td>Desarrollo de habilidades</td>
    <td>Interno</td>
    <td>Acreditar a las personas servidoras públicas en temas que impactan en su desarrollo profesional y personal</td>
    <td>Febrero - Noviembre 2022</td>
  </tr>
  <tr>
    <td>Políticas públicas con perspectiva de derechos humanos</td>
    <td>Identifica los conceptos básicos del enfoque de derechos humanos en las políticas públicas, con el objeto de incorporarlos al diseño de políticas, programas y proyectos, para cumplir los mandatos constitucionales y las obligaciones internacionales en la materia, que fortalezcan y consoliden el estado constitucional de derecho.</td>
    <td>Desarrollo de habilidades</td>
    <td>Interno</td>
    <td>Acreditar a las personas servidoras públicas en temas que impactan en su desarrollo profesional y personal</td>
    <td>Febrero - Noviembre 2022</td>
  </tr>
  <tr>
    <td>Racionalidad ética</td>
    <td>Conoce e identifica los componentes del Código de Ética del Poder Ejecutivo de Estado de Guanajuato a través del marco legal vigente para regir su actuación como persona servidora pública.</td>
    <td>Desarrollo de habilidades</td>
    <td>Interno</td>
    <td>Acreditar a las personas servidoras públicas en temas que impactan en su desarrollo profesional y personal</td>
    <td>Febrero - Noviembre 2022</td>
  </tr>
  <tr>
    <td>Tolerancia y diversidad de creencias</td>
    <td>Reconocer la importancia de respetar la diversidad religiosa en México, identificando las consecuencias de la discriminación y la vulneración al ejercicio de los derechos humanos por motivos religiosos, para contribuir a la construcción de relaciones humanas que convivan con diferentes credos, prácticas y espiritualidades basadas en el respeto mutuo, tolerancia e igualdad de oportunidades.</td>
    <td>Desarrollo de habilidades</td>
    <td>Interno</td>
    <td>Acreditar a las personas servidoras públicas en temas que impactan en su desarrollo profesional y personal</td>
    <td>Febrero - Noviembre 2022</td>
  </tr>
  <tr>
    <td>Tres pasos para lograr un entorno laboral favorable</td>
    <td>Identifica los riesgos psicosociales a través del estudio de los elementos que conforman un entorno laboral favorable con base en la norma oficial mexicana NOM-035-STPS-2018 para definir mecanismos de prevención en el centro de trabajo.</td>
    <td>Desarrollo de habilidades</td>
    <td>Interno</td>
    <td>Acreditar a las personas servidoras públicas en temas que impactan en su desarrollo profesional y personal</td>
    <td>Febrero - Noviembre 2022</td>
  </tr>
  </tbody>
  </table>

  <table className="table table-bordered table-hover table-striped" style={{marginTop: "2rem"}}>
        <thead className="thead-dark">
          <tr>
            <th>Nombre del Evento de Capacitacion</th>
            <th>Objetivo del Evento</th>
            <th>Orientacion de Evento</th>
            <th>Tipo de Programa</th>
            <th>Justificacion</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
        <tr>
    <td>3 claves para evitar los accidentes de tránsito</td>
    <td>Conoce, comprende y aplica la educación, seguridad y cultura vial, así como el reglamento y la normativa vigente en movilidad con el objetivo de hacer un mejor uso de la vía pública y los medios de transporte para disminuir el índice de accidentes de tránsito que involucren a las personas servidoras públicas.</td>
    <td>Desarrollo de habilidades</td>
    <td>Interno</td>
    <td>Acreditar a las personas servidoras públicas en temas que impactan en su desarrollo profesional y personal</td>
    <td>Abril - Noviembre 2022</td> 
  </tr>
  </tbody>
  </table>



    </div> 
    </div>
  </Wrapper>
  )
}

export default capacitacion