import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Images } from "../../assets/images";

const Banner = () => {
  return (
    <section className="page_slider text-center">
      <img src={Images.Baner123} alt="img" className="img-responsive" />
      <div
        className="container-fluid"
        style={{ backgroundColor: "#07322D", opacity: "0.8" }}
      >
        <div className="row">
          <div className="col-md-12  col-xs-12">
            <div className="ds cover-image text-left">
              <div className="container px-xl-120 .s-py-md-30">
                <div className="row">
                  <div className="col-md-12 col-xs-12">
                    <div className="intro_layers_wrapper px-xl-50">
                      <div className="intro_layers">
                        <ScrollAnimation
                          animateIn="fadeIn"
                          initiallyVisible={true}
                          duration={2}
                        >
                          <div className="intro_layer" style={{ width: "50%" }}>
                            <h2
                              className="text-capitalize intro_featured_word color-main-title"
                              style={{ fontSize: "40px" }}
                            >
                              Lozenges
                            </h2>
                            <p
                              className="intro_after_featured_word text-sm-left"
                              style={{ color: "white" }}
                            >
                              Our Lozenges are scientifically crafted to provide
                              effective relief and care, addressing diverse
                              health concerns with precision and trust.
                            </p>
                          </div>
                        </ScrollAnimation>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
