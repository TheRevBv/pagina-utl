import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import NewsPageMain from "@components/blogs/news-page-main";
import HeaderFour from "@layout/headers/headerFour";
import ProgramPromotion from "@components/promotions/program-promotion";
import promotion from "@assets/img/promotion/educ_continua.jpg";



export default function NewsSidebar() {
  let dataContacto=[
    {
      id:1,
      nombre:"José Francisco Hernández García",
      correo:"jhedz@utleon.edu.mx"
    },
    {
      id:2,
      nombre:"Luis Efrén Ramos de Anda",
      correo:"lramos@utleon.edu.mx"
    },
    {
      id:3,
      nombre:"José de Jesús Elías Balderas",
      correo:"jelias@utleon.edu.mx"
      
    }
  ]
  return (
    <Wrapper>
      <SEO pageTitle={'Soy egresado'} />
      <HeaderFour />
      <Breadcrumb title="Soy egresado" subTitle="Soy Egresado" />
      {/* <NewsPageMain /> */}
      <ProgramPromotion title={"Educacion continua"} subtitle={"Objetivo"} desc={"Ofrecer servicios de capacitación en diferentes modalidades como cursos, talleres y diplomados, desarrollados en colaboración con docentes de las diferentes direcciones académicas, dirigidos tanto a egresados(as) y demás integrantes de la Universidad, así como al público en general, con el propósito de apoyarles en su actualización profesional."}
      img={promotion} icon1={"Capacitacion"} icon2={"Cursos"} iconImg1={"fa fa-graduation-cap theme-bg"} iconImg2={"fa fa-book theme-bg"} />
      <HomeNewsletter title={"Contactanos"} subTitle={"Para más información..."} dataContacto={dataContacto} telefono={"477 710 00 20 Ext. 418, 425 y 430"} />
      <Footer/>
    </Wrapper>
  )
}