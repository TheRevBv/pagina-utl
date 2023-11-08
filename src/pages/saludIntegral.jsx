import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import NewsPageMain from "@components/blogs/news-page-main";
import HeaderFour from "@layout/headers/headerFour";
import ProgramPromotion from "@components/promotions/program-promotion";
import HomeThreeFeatureSalud from "@components/features/home-three-features-global";
import imgSalud from "@assets/img/utl/imgSaludIntegral.jpg";

const features = [
  {
      id: 1,
      title: 'Examen Médico',
      teaser: 'Evaluación del estado de salud del alumnado de nuevo ingreso.',
      iconStyle: 'icon-1',
      icon: 'fa-sharp fa-solid fa-stethoscope',
  },
  {
      id: 2,
      title: 'Atención Médica',
      teaser: 'Urgencias y consulta básica.',
      iconStyle: 'icon-2',
      icon: 'fa-solid fa-user-doctor',
  },
  {
      id: 3,
      title: 'Atención Médica Preventiva',
      teaser: 'Campañas, pláticas y talleres de temas de salud.',
      iconStyle: 'icon-3',
      icon: 'fa-sharp fa-regular fa-display-medical',
  },
  {
      id: 4,
      title: 'Apoyo en Eventos Especiales',
      teaser: 'Torneos deportivos, jornadas, congresos entre otros',
      iconStyle: 'icon-4',
      icon: 'fa-regular fa-briefcase-medical',
  }
]

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
      <HomeThreeFeatureSalud features={features}/>
      <Footer/>
    </Wrapper>
  )
}
