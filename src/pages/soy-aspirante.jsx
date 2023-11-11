// import ProgramPageMain from "@components/programs/program-page-main";
import { Wrapper } from "@layout/index";
import Footer from "@layout/footers/footer";
import HeaderFour from "@layout/headers/headerFour";
import AboutTestimonial from "@components/testimonials/about-testimonial";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import Carreras from "@components/oferta-educativa/carreras";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import ProgramPromotion from "@components/promotions/program-promotion";
import SEO from "@components/seo";
import SoyAspirantePageMain from "@components/soy-aspirante/soy-aspirante-page-main";
import sliders_data from "@data/sliders-data";
import tsu_data from "@data/tsu-data";

const SoyAspirantePage = () => {
  const { aspirante } = sliders_data;
  return (
    <Wrapper>
      <SEO pageTitle={"Soy Aspirante"} />
      <HeaderFour />
      <Breadcrumb
        title="Soy Aspirante"
        subTitle="Soy Aspirante"
        msgTitle={aspirante[0].title}
        msgDescripcion={aspirante[0].description}
      />
      <ProgramPromotion />
      {/* <AboutTestimonial /> */}
      {/* <SoyAspirantePageMain /> */}
      <Carreras class_data={tsu_data} />
      {/* <ProgramPageMain /> */}
      {/* <HomeNewsletter /> */}
      <Footer />
    </Wrapper>
  );
};

export default SoyAspirantePage;
