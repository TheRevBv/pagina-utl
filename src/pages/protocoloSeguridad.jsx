import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import HeaderFour from "@layout/headers/headerFour";
import imgComite from "@assets/img/utl/comiteIgualdad.jpg";
import Image from 'next/image'

const protocoloSeguridad = () => {
  return (
    <Wrapper>
    <SEO pageTitle={'Protocolos de Seguridad'} />
    <HeaderFour />
    <Breadcrumb title="Protocolos de Seguridad" subTitle="Protocolos de Seguridad" />
    <h2 style={{textAlign: "center", marginTop: "50px"}}>Protocolos de Seguridad</h2>
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
    <Image src={imgComite} alt="Difusion e Imagen Institucional" style={{width: "80%", height: "auto", alignItems: "center"}}/>
    

    <div style={{marginTop: "50px", marginBottom: "50px", fontSize: "1.5rem", width: "80%"}}>

    <div style={{textAlign: "justify"}}>
    <p>Dentro de las siguientes líneas estratégicas: “Simplificación y mejora continua de procesos”, “consolidación de la infraestructura de la Universidad” y “desarrollo de la responsabilidad social universitaria”, es que tiene origen la inquietud por fortalecer la cultura de seguridad y la cultura de la protección civil para fomentar la prevención ante contingencias y/o desastres naturales que pueden causar un daño a la comunidad universitaria.</p>
    <p>Pero no es sino hasta la creación del Espacio Común de Educación Superior Tecnológica (ECEST) en el 2009, que se comienzan a realizar una serie de trabajos orientados a impulsar el mejoramiento general de los servicios educativos que brindan las instituciones de educación superior (IES) de los subsistemas de Institutos Tecnológicos, Universidades Politécnicas y Universidades Tecnológicas. En particular y, dentro de este marco, en 2010 se conformó la Comisión de Cultura, Prevención y Seguridad con objeto de atender la demanda de espacios educativos seguros y en los que se viva una cultura de prevención y seguridad. No obstante esto no sólo se consolida en el ECEST, sino también en gran medida en lo que la certificación en ISO 14001:2004 nos marca como un requisito indispensable no nada más para salvaguardar la vida de los miembros de la comunidad universitaria, sino también para saber qué hacer en caso de una emergencia ambiental.</p>
    <p>La tarea de prevenir y reducir las consecuencias de los desastres sigue descansando, en gran medida, en las instituciones especializadas. No obstante, es requisito indispensable lograr una sensibilización y cultura de seguridad institucional además de contar con un Plan Interno de Protección Civil dentro de la cual se incluyan brigadas.</p>
    <p>Las actividades que los brigadistas realizan, son tan importantes como el apoyo que deben de recibir por las autoridades del edificio que ocupan, y estos últimos, además de ser los principales responsables en la prevención de riesgos también deben promover y apoyar entre los brigadistas y la población, la cultura de Protección Civil.</p>
    <p>El saber qué hacer en caso de desastres es crucial para el resguardar nuestra vida y patrimonio, y para ofrecer seguridad a los miembros de la comunidad universitaria.</p>
    <p>El Plan Interno de Protección Civil que pretendemos implementar nos hará pasar de una estrategia reactiva a un sistema capaz de anticipar desastres y de atenuar sus consecuencias. En la medida en que conozcamos el origen, la formación, la propagación y los efectos de los agentes destructivos, estaremos mejor preparados para hacerles frente.</p>
    </div>
    <h3>Brigadas Internas</h3>
     <hr style={{border: "2px solid #000000"}}/>
       <div style={{fontSize: "1.2rem", color: "blue"}}>
         <li><a href="https://www.utleon.edu.mx/public_html/seguridad-institucional/protocolos-de-seguridad/documentos/proteccion_civil.pdf">Conoce el programa Interno de Protección Civil</a></li>
      </div>
      <br/>

      <h3>Protocolos de Seguridad</h3>
     <hr style={{border: "2px solid #000000"}}/>
       <div style={{fontSize: "1.2rem", color: "blue"}}>
         <li><a href="https://www.utleon.edu.mx/public_html/seguridad-institucional/protocolos-de-seguridad/documentos/procedimiento_de_acceso_a_vehiculos_seguridad.doc">Procedimiento de acceso a vehículos seguridad</a></li>
         <li><a href="https://www.utleon.edu.mx/public_html/seguridad-institucional/protocolos-de-seguridad/documentos/procedimiento_amenaza_de_bomba.doc">Procedimiento amenaza de bomba</a></li>
         <li><a href="https://www.utleon.edu.mx/public_html/seguridad-institucional/protocolos-de-seguridad/documentos/procedimiento_de_incendio.doc">Procedimiento de incendio</a></li>
         <li><a href="https://www.utleon.edu.mx/public_html/seguridad-institucional/protocolos-de-seguridad/documentos/procedimiento_desastres_naturales.doc">Procedimiento desastres naturales</a></li>
         <li><a href="https://www.utleon.edu.mx/public_html/seguridad-institucional/protocolos-de-seguridad/documentos/procedimiento_de_activacion_de_alarmas.doc">Procedimiento de activación de alarmas</a></li>
         <li><a href="https://www.utleon.edu.mx/public_html/seguridad-institucional/protocolos-de-seguridad/documentos/procedimiento_de_llamadas_de_extorsion.doc">Procedimiento de llamadas de extorsión</a></li>
         <li><a href="https://www.utleon.edu.mx/public_html/seguridad-institucional/protocolos-de-seguridad/documentos/procedimiento_disturbio_e_intervencion.doc">Procedimiento disturbio e intervención</a></li>
         <li><a href="https://www.utleon.edu.mx/public_html/seguridad-institucional/protocolos-de-seguridad/documentos/procedimiento_de_emergencia_uipc.doc">Procedimiento de emergencia UIPC</a></li>
         <li><a href="https://www.utleon.edu.mx/public_html/seguridad-institucional/protocolos-de-seguridad/documentos/procedimiento_de_seguridad_acceso_a_personas.doc">Procedimiento de seguridad acceso a personas</a></li>
         <li><a href="https://www.utleon.edu.mx/public_html/seguridad-institucional/protocolos-de-seguridad/documentos/procedimiento_de_llamadas_de_extorsion.doc">Procedimiento de atención a llamadas de extorsión</a></li>
      </div>
      <br/>
     

 

      </div>
      
    </div>
    
    
    
    <Footer/>
  </Wrapper>
  )
}

export default protocoloSeguridad