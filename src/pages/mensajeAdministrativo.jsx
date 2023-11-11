import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import NewsPageMain from "@components/blogs/news-page-main";
import HeaderFour from "@layout/headers/headerFour";
import ProgramPromotion from "@components/promotions/program-promotion";
import imgRectora from "@assets/img/utl/imgRectora.jpg";

export default function mensajeAdministrativo() {
  return (
    <Wrapper>
      <SEO pageTitle={'Soy Administrativo'} />
      <HeaderFour />
      <Breadcrumb title="Soy Administrativo" subTitle="Soy Administrativo" />
      {/* <NewsPageMain /> */}
      <ProgramPromotion title={"Mensaje de Nuestra Rectora"} subtitle={"Yoloxóchitl Bustamante Díez"} desc={
        <div>
        <p>Es un gusto dirigirme a ti, que formas parte de la plantilla administrativa de nuestra universidad, que desde la función que desempeñas, contribuyes a que nuestra institución brinde formación universitaria de calidad.</p>
        <br/>
        <p>Es de suma importancia tu actuar cotidiano, pues gracias a tu gestión, a la supervisión que realizas, a la vigilancia del uso adecuado y eficiente de los recursos que contamos, colaboras para que la UTL, como organización educativa, pueda cumplir objetivos y metas.</p>
        <br/>
        <p>Considérate valiosa, valioso para nuestra universidad.</p>
       </div> 

      }
      img={imgRectora} icon1={"Capacitacion"} icon2={"Cursos"} iconImg1={"fa fa-graduation-cap theme-bg"} iconImg2={"fa fa-book theme-bg"} />
      <Footer/>
    </Wrapper>
  )
}

