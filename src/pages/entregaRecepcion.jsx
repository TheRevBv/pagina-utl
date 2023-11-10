import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import NewsPageMain from "@components/blogs/news-page-main";
import HeaderFour from "@layout/headers/headerFour";
import ProgramPromotion from "@components/promotions/program-promotion";
import imgRecepcion from "@assets/img/utl/entregaRecepcion.jpeg";

const entregaRecepcion = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Soy Administrativo'} />
      <HeaderFour />
      <Breadcrumb title="Entrega-Recepción" subTitle="Entrega-Recepción" />
      {/* <NewsPageMain /> */}
      <ProgramPromotion title={"Entrega-Recepción"} subtitle={""} desc={
        <div>
        <p>Lo que todo servidor público debe realizar al separarse de su empleo, cargo o comisión.</p>
        <br/>
         <a href="https://www.utleon.edu.mx/entrega-recepcion#:~:text=INSTRUCTIVO%20PARA%20GENERAR%20EL%20ACTA%20DE%20ENTREGA%20RECEPCI%C3%93N" style={{color: "blue", textDecorationLine: "underline"}}>INSTRUCTIVO PARA GENERAR EL ACTA DE ENTREGA RECEPCIÓN</a>
       </div> 

      }
      img={imgRecepcion} icon1={"Recepsion"} icon2={"Entrega"} iconImg1={"fa-sharp fa-solid fa-person-carry-box theme-bg"} iconImg2={"fa-sharp fa-solid fa-bell-concierge theme-bg"} />
      <Footer/>
    </Wrapper>
  )
}

export default entregaRecepcion