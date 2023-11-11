import "swiper/css/bundle";
import Image from "next/image";
import Link from "next/link";
import { Scrollbar, A11y, Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import line_1 from "@assets/img/shape/white-curved-line.png";
import line_2 from "@assets/img/shape/curved-line-2.png";

const CarrouselTwo = ({ data, title, subTitle }) => {
  return (
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
            <div className="bd-hero-2">
              <div
                className="bd-hero-bg"
                style={{ backgroundImage: `url(${item.bg.src})` }}
              ></div>
              <div className="bd-breadcrumb-wrapper mb-60">
                <div className="container">
                  <div className="bd-breadcrumb-shape d-none d-sm-block">
                    <div className="bd-breadcrumb-shape-1">
                      <Image
                        src={line_2}
                        style={{ width: "100%", height: "100%" }}
                        alt="img not found"
                      />
                    </div>
                    <div className="bd-breadcrumb-shape-2">
                      <Image
                        src={line_1}
                        style={{ width: "100%", height: "100%" }}
                        alt="img not found"
                      />
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-xl-10">
                      <div className="bd-breadcrumb d-flex align-items-center justify-content-center">
                        <div className="bd-breadcrumb-content text-center">
                          <h1 className="bd-breadcrumb-title">{title}</h1>
                          <div className="bd-breadcrumb-list">
                            <span>
                              <Link href="/">
                                <i className="flaticon-hut"></i>UTL
                              </Link>
                            </span>
                            <span>{subTitle}</span>
                          </div>
                          <h3
                            className="bd-breadcrumb-teaser animate__animated"
                            data-animation="fadeInUp"
                            data-delay=".2s"
                          >
                            {item.title}
                          </h3>
                          <span
                            className="animate__animated"
                            data-animation="fadeInUp"
                            data-delay=".3s"
                          >
                            {item.subTitle}
                          </span>
                          {/* <h1
                            className="bd-breadcrumb-title animate__animated"
                            data-animation="fadeInUp"
                            data-delay=".2s"
                          >
                            {item.title}
                          </h1>
                          <div className="bd-breadcrumb-list">
                            <span>
                              <Link href="/">
                                <i className="flaticon-hut"></i>UTL
                              </Link>
                            </span>
                            <span
                              className="animate__animated"
                              data-animation="fadeInUp"
                              data-delay=".3s"
                            >
                              {item.subTitle}
                            </span>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bd-wave-wrapper bd-wave-wrapper-3">
                <div className="bd-wave bd-wave-3"></div>
                <div className="bd-wave bd-wave-3"></div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CarrouselTwo;
