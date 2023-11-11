import Image from "next/image";
import Link from "next/link";
import feedback from "@assets/img/feedback/1.png";
import radient from "@assets/img/shape/radient-path.svg";
import shape from "@assets/img/shape/home-3-shape-1.png";
import line from "@assets/img/shape/tripple-line.png";

const Rectora = ({ rectora_data }) => {
  return (
    <section className="bd-feedback-area pb-60 pt-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div
              className="bd-promotion-thumb-wrapper mb-60 wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <div className="bd-promotion-thumb">
                <div className="bd-promotion-thumb-mask p-relative">
                  <Image
                    src={rectora_data.image}
                    style={{ width: "100%", height: "100%" }}
                    alt="img not found"
                  />
                  <div className="panel-2 wow"></div>
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
          <div className="col-lg-6">
            <div
              className="bd-section-title-wrapper mb-40 wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <h2 className="bd-section-title mb-5">
                {rectora_data.title}
                {/* Playful learning
                <br />
                helps children */}
              </h2>
              <p>{rectora_data.mensaje}</p>
            </div>
            <div
              className="bd-feedback theme-bg-7 mb-50 wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <div className="bd-feedback-content">
                <p className="mb-25">{rectora_data.frase}</p>
                <h5 className="bd-feedback-author">- {rectora_data.name}</h5>
              </div>
            </div>
            <div
              className="bd-feedback-btn mb-60 wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              {/* <Link href="/about" className="bd-btn">
                <span className="bd-btn-inner">
                  <span className="bd-btn-normal">About us</span>
                  <span className="bd-btn-hover">About us</span>
                </span>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rectora;
