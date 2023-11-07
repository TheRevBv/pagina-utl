import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import NewsSidebarPage from "@components/blogs/news-sidebar-page";
import HeaderFour from "@layout/headers/headerFour";
import ProgramPromotion from "@components/promotions/program-promotion";
import promotion from "@assets/img/promotion/emprendimiento.jpg";
// import ProgramDetailsArea from '@components/programs/program-details-page/program-details-area';
// import { useEffect, useState } from 'react';
// import program_data from "@data/program-data";


export default function NewsSidebar() {
  let dataContacto=[
    {
        
      id:1,
      nombre:"Lcda. Araceli Hernández Pérez",
      correo:"ciem@utleon.edu.mx"

    },
    {
      id:2,
      nombre:"Lcdo. Jonathan Hernández Ávila",
      correo:"jhavila@utleon.edu.mx"
    }
  ]
  // let id=7;
  //     const [program, setProgram] = useState({});

  //   useEffect(() => {
  //       if (!id) (<h1>Loading...</h1>)
  //       else (setProgram(program_data.find(item => item.id == id)))
  //       return () => {
  //       };
  //   }, [id]);
  return (
    <Wrapper>
      <SEO pageTitle={'Emprendimiento'} />
      <HeaderFour />
      <Breadcrumb title="Emprendimiento" subTitle="Emprendimiento" />
      <ProgramPromotion title={"Emprendimiento"} subtitle={"Incubación de proyectos"} desc={"¿Sueñas con tener tu propia empresa?Acércate a nosotros.¡Te ayudamos a desarrollar tu idea de negocio!Planea, desarrolla y estructura tu modelo de negocio para asegurar el éxito de tu emprendimiento.El Centro Incubador de Empresas (CIEM) de la UTL es la entidad encargada de fomentar una cultura de emprendimiento e innovación para la creación de nuevas empresas a través de la incubación de negocios, ideas y proyectos, generados entre la comunidad universitaria y la sociedad en general.Somos una Incubadora reconocida e integrada a la Red de Incubadoras del Subsistema de Universidades Tecnológicas (RISUT) y que forma parte de la Red Estatal de Incubadoras de Guanajuato. "}
      img={promotion} icon1={"CIEM"} icon2={"RISUT"} 
      desc2={"Consigue lanzar tu empresa al mercado asesorado por mentores especialistas. Fondos Guanajuato tiene financiamientos para tí, consulta las reglas de operaciónVer reglasIdeaGto y el Valle de la Mentefactura tienen programas del impulso que llevan tus ideas, proyectos y negocios al siguiente nivel, consulta las reglas de operaciónVer reglas"}
      iconImg1={"fa fa-building theme-bg"} iconImg2={"fa fa-users theme-bg"}
      />
      {/* <ProgramDetailsArea item={program}/> */}
      <HomeNewsletter title={"Contactanos"} subTitle={"Centro Incubador de Empresas (CIEM)"} dataContacto={dataContacto} telefono={"477 710 00 20 Ext. 421, 424 y 428"}/>
      {/* <HomeNewsletter /> */}
      <Footer/>
    </Wrapper>
  )
}