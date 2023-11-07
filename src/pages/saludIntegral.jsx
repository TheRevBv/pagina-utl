import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import NewsPageMain from "@components/blogs/news-page-main";
import HeaderFour from "@layout/headers/headerFour";
import ProgramPromotion from "@components/promotions/program-promotion";
import HomeThreeFeatureSalud from "@components/features/home-three-features-salud";
import imgSalud from "@assets/img/utl/imgSaludIntegral.jpg";

export default function saludIntegral ()  {
  return (
    <Wrapper>
      <SEO pageTitle={'Salud Integral'} />
      <HeaderFour />
      <Breadcrumb title="Soy Administrativo" subTitle="Salud Integral" />
      {/* <NewsPageMain /> */}
      <ProgramPromotion title={"Salud Integral"} subtitle={"Objetivo"} desc={ 
        "En el área de Salud integral se te brinda los servicios médicos de urgencias, curativos y preventivos. Además, se te proporciona información y orientación sobre los servicios de salud que ofrece la Universidad y otras instituciones de salud, así como la promoción de estilos de vida saludables."
      }
      img={imgSalud} icon1={"Salud"} icon2={"Diagnostico"} iconImg1={"fa-solid fa-wave-pulse theme-bg"} iconImg2={"fa-regular fa-heart-pulse theme-bg"} />
      <HomeThreeFeatureSalud/>
      <Footer/>
    </Wrapper>
  )
}
