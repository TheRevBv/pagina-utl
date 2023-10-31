import Image from "next/image";
import React from "react";
import loaderImg from "@assets/img/logo/logo-utl-animado-sinfondo.gif";

const Preloader = () => {
  return (
    <div id="loading">
      <div id="preloader">
        <div className="preloader-thumb-wrap">
          <div className="preloader-thumb">
            <div className="preloader-border"></div>
            <Image
              src={loaderImg}
              style={{ width: "auto", height: "auto" }}
              alt="img not found"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
