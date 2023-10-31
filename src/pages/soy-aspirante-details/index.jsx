import HomeNewsletter from "@components/newsletter/home-newsletter";
import SoyAspiranteDetailsArea from "@components/soy-aspirante/soy-aspirante-details-page/soy-aspirante-details-area";
// import ProgramDetailsArea from "@components/programs/program-details-page/program-details-area";
import SEO from "@components/seo";
import program_data from "@data/program-data";
import Footer from "@layout/footers/footer";
import HeaderFour from "@layout/headers/headerFour";
import { Wrapper } from "@layout/index";
import React from "react";

export default function SoyAspiranteDetails() {
  const item = program_data[0];
  return (
    <Wrapper>
      <SEO pageTitle={"Soy Aspirante Detalle"} />
      <HeaderFour />
      <SoyAspiranteDetailsArea item={item} />
      {/* <ProgramDetailsArea item={program} /> */}
      <HomeNewsletter />
      <Footer />
    </Wrapper>
  );
}
