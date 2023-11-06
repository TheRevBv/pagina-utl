import "swiper/css/bundle";
import Image from "next/image";
import Link from "next/link";
import { Scrollbar, A11y, Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import shape from "@assets/img/shape/curved-line-2.png";
// import bg_1 from "@assets/img/hero/img-Alumnos.jpg";
// import bg_2 from "@assets/img/hero/utl-Patio2.png";
// import bg_3 from "@assets/img/hero/img-Programa.jpeg";

const Carrousel = ({ data }) => {
  return (
    <div>
      <Swiper
        modules={[Scrollbar, A11y, Autoplay, EffectFade, Navigation]}
        effect="fade"
        spaceBetween={30}
        autoplaydisableoninteraction={"false"}
        loop={false}
        observeParents={true}
        observer={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        navigation={{
          clickable: true,
          nextEl: ".bd-hero-next",
          prevEl: ".bd-hero-prev",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
        }}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="bd-hero-inner-2">
                <div className="container">
                  <div className="bd-hero-shape-wrapper d-none d-lg-block">
                    <div className="bd-hero-shape bd-hero-shape-2">
                      <Image
                        src={item.shape}
                        style={{ width: "100%", height: "100%" }}
                        alt="img not found"
                      />
                    </div>
                    <div className="bd-hero-shape bd-hero-shape-1">
                      <Image
                        src={item.shape}
                        style={{ width: "100%", height: "100%" }}
                        alt="img not found"
                      />
                    </div>
                  </div>
                  <div className="bd-hero-2">
                    <div
                      className="bd-hero-bg"
                      style={{ backgroundImage: `url(${item.bg.src})` }}
                    ></div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="bd-hero-content-wrapper-2 d-flex align-items-center">
                          <div className="bd-hero-content bd-hero-content-2 is-white">
                            <span
                              className="animate__animated"
                              data-animation="fadeInUp"
                              data-delay=".3s"
                            >
                              {item.subTitle}
                            </span>
                            <h1
                              className="bd-hero-title animate__animated"
                              data-animation="fadeInUp"
                              data-delay=".5s"
                            >
                              {item.title}
                            </h1>
                            <div
                              className="bd-hero-btn animate__animated"
                              data-animation="fadeInUp"
                              data-delay=".7s"
                            >
                              <Link href="/programs" className="bd-btn">
                                <span className="bd-btn-inner">
                                  <span className="bd-btn-normal">
                                    {item.btn}
                                  </span>
                                  <span className="bd-btn-hover">
                                    {item.btn}
                                  </span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carrousel;
