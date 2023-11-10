import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import HeaderFour from "@layout/headers/headerFour";
import imgMedicion from "@assets/img/utl/resultadosMedicion.jpeg";
import HomeThreeFeatureMedicion from "@components/features/home-three-features-Medicion";
import Image from 'next/image'

const resultadosMedicion = () => {
  return (
    <Wrapper>
    <SEO pageTitle={'Difusión e Imagen Institucional'} />
    <HeaderFour />
    <Breadcrumb title="Imagen Institucional" subTitle="Imagen Institucional" />
    <h3 style={{textAlign: "center", marginTop: "50px"}}>Difusión e Imagen Institucional</h3>
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
    <Image src={imgMedicion} alt="Difusion e Imagen Institucional" style={{width: "60%", height: "auto", alignItems: "center", marginBlockEnd: "3rem"}}/>
    <HomeThreeFeatureMedicion/>
    </div>
    
    
    <Footer/>
  </Wrapper>
  )
}

export default resultadosMedicion