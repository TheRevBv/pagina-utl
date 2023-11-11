import { Wrapper } from "@layout/index";
import Footer from "@layout/footers/footer";
import HeaderFour from "@layout/headers/headerFour";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import Rectora from "@components/rectora/rectora";
import SEO from "@components/seo";
import rectora_data from "@data/rectora-data";
import slider_data from "@data/sliders-data";

const MensajesRectoraPage = () => {
  const { aspirante } = slider_data;
  console.log(rectora_data);
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
      <Rectora rectora_data={rectora_data[0]} />
      <Footer />
    </Wrapper>
  );
};

export default MensajesRectoraPage;
