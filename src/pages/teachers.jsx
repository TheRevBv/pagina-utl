import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import TeacherPageMain from "@components/teachers/teacher-page-main";
import HeaderFour from "@layout/headers/headerFour";


export default function Teachers() {
  return (
    <Wrapper>
      <SEO pageTitle={'Teachers'} />
      <HeaderFour />
      <Breadcrumb title="Teachers" subTitle="Teachers" />
      {/* Agregar encabezado centrado y de un maximo de 80% */}
      <div style={{textAlign: "center", maxWidth: "80%", margin: "auto"}}>
        <h2>Nuestros directivos, profesores y asesores</h2>
      </div>
      
      <TeacherPageMain />
      <HomeNewsletter />
      <Footer/>
    </Wrapper>
  )
}