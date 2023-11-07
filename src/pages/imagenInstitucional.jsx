import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import NewsPageMain from "@components/blogs/news-page-main";
import HeaderFour from "@layout/headers/headerFour";
import ProgramPromotion from "@components/promotions/program-promotion";
import imgDifusion from "@assets/img/utl/bannerDifusion.png";
import Image from 'next/image'

const imagenInstitucional = () => {
  return (
    <Wrapper>
    <SEO pageTitle={'Difusión e Imagen Institucional'} />
    <HeaderFour />
    <Breadcrumb title="Imagen Institucional" subTitle="Imagen Institucional" />
    <h3 style={{textAlign: "center", marginTop: "50px"}}>Difusión e Imagen Institucional</h3>
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
    <Image src={imgDifusion} alt="Difusion e Imagen Institucional" style={{width: "80%", height: "auto", alignItems: "center"}}/>
    <div style={{marginTop: "50px", marginBottom: "50px", fontSize: "1.5rem", width: "80%"}}>
    <p> El departamento de Imagen Institucional es el encargado del diseño gráfico de conceptos, productos y campañas de difusión internas y externas que sean congruentes y apoyen al posicionamiento de la institución.</p>
       <p>Una de sus principales funciones es verificar el correcto uso del logotipo institucional, por lo cual, ponemos a su disposición el Manual de Identidad Corporativa para que se apegue a sus lineamientos.</p>
<p>Antes de producir cualquier material que incluya el logotipo institucional, deberá solicitar su validación con el Departamento de Imagen a la ext. 213 o al correo argomez@utleon.edu.mx.</p>
</div>
    </div>
    
    
    <Footer/>
  </Wrapper>
  )
}

export default imagenInstitucional