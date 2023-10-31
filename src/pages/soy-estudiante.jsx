import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
// import ProgramPageMain from "@components/programs/program-page-main";
// import SoyAspirantePageMain from "@components/soy-aspirante/soy-aspirante-page-main";
import AboutTestimonial from "@components/testimonials/about-testimonial";
// import ProgramPromotion from "@components/promotions/program-promotion";
import HeaderFour from "@layout/headers/headerFour";

const SoyEstudiantesPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Soy Estudiante"} />
      <HeaderFour />
      <Breadcrumb title="Soy Estudiante" subTitle="Soy Estudiante" />
      {/* <SoyAspirantePageMain /> */}
      {/* <ProgramPageMain /> */}
      <AboutTestimonial />
      {/* <ProgramPromotion /> */}
      <HomeNewsletter />
      <Footer />
    </Wrapper>
  );
};

export default SoyEstudiantesPage;
