import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Menus from "./menus";
// import logo from "@assets/img/logo/logoUTL.png";
import logo from "@assets/img/logo/logoCorto.png";
import useSticky from "@hooks/use-sticky";
import TopbarOne from "./component/topbar/topbarOne";
import SearchPopup from "./component/search-popup";
import OffCanvasMain from "@components/common/off-canvas";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { sticky } = useSticky();
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  return (
    <>
      <header>
        <div className="bd-header">
          <TopbarOne />

          <div
            id="header-sticky"
            className={`bd-header-bottom ${sticky ? "header-sticky" : ""}`}
          >
            <div className="container">
              <div className="mega-menu-wrapper p-relative">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="bd-header-logo">
                    <Link href="/">
                      <Image
                        src={logo}
                        style={{ width: "40%", height: "auto" }}
                        alt="img not found"
                      />
                    </Link>
                  </div>
                  <div className="bd-main-menu d-none d-lg-flex align-items-center">
                    <nav id="mobile-menu">
                      <Menus />
                    </nav>
                    <div className="bd-search-btn-wrapper">
                      <button
                        className="bd-search-open-btn"
                        type="button"
                        onClick={() => setIsSearchOpen(true)}
                      >
                        <i className="flaticon-search"></i>
                      </button>
                    </div>
                  </div>
                  <div className="bd-header-bottom-right d-flex justify-content-end align-items-center">
                    <div className="bd-header-meta-item d-none bd-header-menu-meta d-xxl-flex align-items-center">
                      <div className="bd-header-meta-icon">
                        <i className="flaticon-phone-call"></i>
                      </div>
                      <div className="bd-header-meta-text">
                        <p>
                          <a href="tel:9072003462">907-200-3462</a>
                        </p>
                      </div>
                    </div>
                    {/* <div className="bd-header-btn d-none d-xl-block">
                      <Link href="/contact" className="bd-btn">
                        <span className="bd-btn-inner">
                          <span className="bd-btn-normal">Herramientas</span>
                          <span className="bd-btn-hover">Herramientas</span>
                        </span>
                      </Link>
                    </div> */}
                    <div className="header-hamburger">
                      <button
                        type="button"
                        className="hamburger-btn offcanvas-open-btn"
                        onClick={() => setIsOffCanvasOpen(true)}
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* search modal start */}
      <SearchPopup
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />
      {/* search modal end */}
      {/* full canvas area start */}
      <OffCanvasMain
        isOffCanvasOpen={isOffCanvasOpen}
        setIsOffCanvasOpen={setIsOffCanvasOpen}
      />
      {/* full canvas area end */}{" "}
    </>
  );
};

export default Header;
