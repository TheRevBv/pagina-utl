import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import NewsPageMain from "@components/blogs/news-page-main";
import HeaderFour from "@layout/headers/headerFour";
import ProgramPromotion from "@components/promotions/program-promotion";
import promotion from "@assets/img/promotion/bolsa_trabajo.jpg";

export default function BolsaDeTrabajo() {
    let dataContacto=[
        {
            
          id:1,
          nombre:"Diana Esmeralda Vázquez Álvarez",
          correo:"dvazquez@utleon.edu.mx"
        },
        {
          id:2,
          nombre:"Fátima Juárez Granados",
          correo:"majuarez@utleon.edu.mx"
        }
      ]
  return (
    <Wrapper>
      <SEO pageTitle={'Bolsa de Trabajo'} />
      <HeaderFour />
      <Breadcrumb title="Bolsa de Trabajo" subTitle="Bolsa de Trabajo" />
      {/* <NewsPageMain /> */}
      <ProgramPromotion title={"Seguimiento egresado"} subtitle={"Informacion de egreso"} desc={"Bolsa de Trabajo es un espacio para que tú como egresado/a puedas actualizar tus datos y consultar las vacantes que las empresas e instituciones ofrecen.La lista de vacantes activas la puedes consultar en el SITO ingresando con tu matrícula y contraseña en el módulo Bolsa de Trabajo / Vacantes / Agregar y/o consultar Vacantes.Nota: este servicio es exclusivo para personas egresadas de la Universidad Tecnológica de León, si estás interesado/a en laborar en la Institución consulta nuestras vacantes dando click "}
      img={promotion} icon1={"Vacantes"} icon2={"Reclutamiento"} link1={"https://sito.utleon.edu.mx/jsp/reclutamiento/muestra_convocatoria_general.jsp" }
      desc2={"Es necesario que la información del SITO esté actualizada para que sigas estando vigente en la Bolsa de Trabajo, de esta manera podrás visualizar las vacantes y tener acceso a ferias de empleo y reclutamientos.Para actualizar tu información es necesario ingresar al SITO en Egresados / Seguimiento de Egresados/as / Información y Encuestas de Egreso / DGA (Datos Generales del Alumnado y actualiza teléfono celular, correo electrónico, estado civil, domicilio, teléfono de casa o recados y referencias).La información que proporciones es exclusiva para el Departamento de Seguimiento de Egresados/as."}
      link2={"https://sito.utleon.edu.mx"}
      />
      <HomeNewsletter title={"Contactanos"} subTitle={"Para más información..."} dataContacto={dataContacto} telefono={"477 710 00 20 Ext. 421, 424 y 428"}/>
      <Footer/>
    </Wrapper>
  )
}