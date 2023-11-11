import React from "react";
import Image from "next/image";
import promotion from "@assets/img/promotion/1.png";
import line from "@assets/img/shape/tripple-line.png";
import Link from "next/link";
import CountUpContent from "@components/common/counter";
import VideoModal from "@components/common/modals/modal-video";
import useModal from "@hooks/use-modal";

const fact_items = [
  {
    id: 1,
    count: "28",
    title: "Años de",
    subTitle: "experiencia",
    text: "+",
  },
  {
    id: 2,
    count: "5",
    title: "Estudiantes",
    subTitle: "cada año",
    text: "K+",
  },
  {
    id: 3,
    count: "18",
    title: "Reconocimientos",
    subTitle: "Ganados",
    text: "+",
  },
];

const HomePromotion = ({ promoImg, promo_space }) => {
  const { isVideoOpen, setIsVideoOpen } = useModal();

  return (
    <>
      <section
        className={`bd-promotion-area ${promo_space ? promo_space : "pb-60"}`}
        id="bd-promotion-area"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div
                className="bd-promotion-thumb-wrapper mb-60 wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay=".2s"
              >
                <div className="bd-promotion-thumb">
                  <div
                    className="bd-promotion-thumb-mask p-relative wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay=".3s"
                  >
                    <Image
                      src={promoImg ? promoImg : promotion}
                      style={{ width: "100%", height: "100%" }}
                      alt="img not found"
                    />
                    <div className="panel wow"></div>
                  </div>
                </div>
                <div className="bd-promotion-shape d-none d-lg-block">
                  <Image
                    src={line}
                    style={{ width: "100%", height: "100%" }}
                    alt="img not found"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div
                className="bd-promotion mb-60 wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <div className="bd-section-title-wrapper mb-35">
                  <h2 className="bd-section-title mb-10">Historia</h2>
                  <p>
                    {" "}
                    La Universidad Tecnológica de León inició su funcionamiento
                    el 26 de septiembre de 1995, con la inauguración de cursos
                    efectuada por el C. Vicente Fox Quesada, Gobernador
                    Constitucional del Estado de Guanajuato, ante la presencia
                    de altas personalidades del gobierno federal, estatal,
                    municipal y la comunidad universitaria. Desde el 25 de
                    septiembre de 1995 y hasta la fecha, formamos ciudadanos y
                    ciudadanas de bien, con pensamiento global y acción local,
                    con innovación, profundos valores humanos y universales y
                    sobre todo, brindando educación tecnológica y de calidad,
                    orientada a la industria 4.0 y la mente-factura”.
                  </p>
                </div>
                {!promo_space && (
                  <div className="bd-promotion-counter-wrapper mb-40">
                    {fact_items.map((item) => (
                      <div className="bd-promotion-counter" key={item.id}>
                        <CountUpContent
                          number={item.count}
                          add_style={false}
                          text={item.text}
                        />
                        <div className="bd-promotion-counter-text">
                          <span>{item.title}</span>
                          <span>{item.subTitle}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <div className="bd-promotion-list mb-50">
                  <ul>
                    <li>SOMOS COMUNIDAD UTL</li>
                    <li>
                      Somos una institución tecnológica con sentido humano
                    </li>
                  </ul>
                </div>
                <div className="bd-promotion-btn-wrapper flex-wrap">
                  <div className="bd-promotion-btn">
                    <Link href="/soy-aspirante" className="bd-btn">
                      <span className="bd-btn-inner">
                        <span className="bd-btn-normal">Programas</span>
                        <span className="bd-btn-hover">Programas</span>
                      </span>
                    </Link>
                  </div>
                  <div className="bd-promotion-btn-2 bd-pulse-btn btn-2">
                    <button
                      type="button"
                      className="popup-video"
                      onClick={() => setIsVideoOpen(true)}
                    >
                      <i className="flaticon-play-button"></i> Video de
                      presentación UTL
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* video modal start */}
      <VideoModal
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"SkyEK0HctdI"}
      />
      {/* video modal end */}
    </>
  );
};

export default HomePromotion;
