import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import WishlistMain from "@components/wishlist/wishlist-main";
import HeaderFour from "@layout/headers/headerFour";


export default function Wishlist() {
  return (
    <Wrapper>
      <SEO pageTitle={'Wishlist'} />
      <HeaderFour />
      <Breadcrumb title="Wishlist" subTitle="Wishlist" />
      <WishlistMain />
      <HomeNewsletter />
      <Footer/>
    </Wrapper>
  )
}