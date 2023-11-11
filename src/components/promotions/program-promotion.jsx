import React from "react";
import Image from "next/image";
import line from "@assets/img/shape/tripple-line.png";

const ProgramPromotion = ({
  title,
  subtitle,
  desc,
  img,
  icon1,
  icon2,
  link1,
  link2,
  desc2,
  iconImg1,
  iconImg2,
}) => {
  return (
    <section className="bd-promotion-area pt-120 pb-60 fix">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div
              className="bd-promotion bd-promotion-2 mb-60 wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <div className="bd-section-title-wrapper mb-35">
                <h2 className="bd-section-title mb-10">{title}</h2>

                <span className="mb-10 d-inline-block">{subtitle}</span>
                <p>
                  {desc}
                  {link1 ? (
                    <a href={link1} className="link">
                      AQUÍ
                    </a>
                  ) : null}
                  {link2 ? (
                    <>
                      <br />
                      <a href={link2} className="link">
                        Ir A Sito
                      </a>
                    </>
                  ) : null}
                </p>
              </div>
              <div className="bd-promotion-list-2">
                <ul>
                  <li>
                    <div className="bd-promotion-icon">
                      <i className={iconImg1}></i>
                    </div>
                    <span>{icon2}</span>
                  </li>
                  <li>
                    <div className="bd-promotion-icon">
                      <i className={iconImg2}></i>
                    </div>
                    <span>{icon1}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div
              className="bd-promotion-thumb-wrapper mb-60 wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <div className="bd-promotion-thumb">
                <div className="bd-promotion-thumb-mask p-relative">
                  <Image
                    src={img}
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
          <p>{desc2}</p>
        </div>
      </div>
    </section>
  );
};

export default ProgramPromotion;
