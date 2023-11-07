import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
// import ProgramPageMain from "@components/programs/program-page-main";
import SoyAspirantePageMain from "@components/soy-aspirante/soy-aspirante-page-main";
import AboutTestimonial from "@components/testimonials/about-testimonial";
import ProgramPromotion from "@components/promotions/program-promotion";
import HeaderFour from "@layout/headers/headerFour";
import sliders_data from "@data/sliders-data";

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
      <SoyAspirantePageMain />
      {/* <ProgramPageMain /> */}
      <AboutTestimonial />
      <ProgramPromotion />
      <HomeNewsletter />
      <Footer />
    </Wrapper>
  );
};

export default SoyAspirantePage;
