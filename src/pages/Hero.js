import React from "react";

import HeroImg from "assets/images/img-hero.jpg";
import FrameHeroImg from "assets/images/frame-hero.png";
import ic_cities from "assets/images/icons/ic_cities.svg";
import ic_traveler from "assets/images/icons/ic_traveler.svg";
import ic_treasure from "assets/images/icons/ic_treasure.svg";

import Button from "components/Button";
import formatNumbering from "utils/formatNumbering";

const Hero = props => {
  const showMostPicked = () => {
    window.scrollTo({
      top: 30,
      behavior: "smooth",
    });
  };

  return (
    <section className="container pt-5">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 530 }}>
          <h1 className="font-weight-bold text-gray-900 mb-3 line-height-1">
            Forget Busy Work <br />
            Start Next Vacation
          </h1>
          <p
            className="font-weight-light text-gray-500 w-75 mb-4"
            style={{ lineHeight: "27px" }}
          >
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            isPrimary
            hasShadow
            onClick={showMostPicked()}
            className="btn px-5"
          >
            Show Me Now
          </Button>
          <div class="row" style={{ marginTop: 80 }}>
            <div class="col-auto" style={{ marginRight: 35 }}>
              <img
                src={ic_traveler}
                alt={`${props.data.travelers} travelers`}
                width="32"
                height="32"
              />
              <h6 class="text-gray-900 mt-2">
                {formatNumbering(props.data.travelers)}{" "}
                <span class="font-weight-light text-gray-500">travelers</span>
              </h6>
            </div>
            <div class="col-auto" style={{ marginRight: 35 }}>
              <img
                src={ic_treasure}
                alt={`${props.data.treasures} treasures`}
                width="32"
                height="32"
              />
              <h6 class="text-gray-900 mt-2">
                {formatNumbering(props.data.treasures)}{" "}
                <span class="font-weight-light text-gray-500">treasures</span>
              </h6>
            </div>
            <div class="col-auto">
              <img
                src={ic_cities}
                alt={`${props.data.cities} cities`}
                width="32"
                height="32"
              />
              <h6 class="text-gray-900 mt-2">
                {formatNumbering(props.data.cities)}{" "}
                <span class="font-weight-light text-gray-500">cities</span>
              </h6>
            </div>
          </div>
        </div>
        <div class="col-6 pl-5">
          <div style={{ width: 520, height: 410 }}>
            <img
              src={HeroImg}
              alt="beautiful villa"
              className="img-fluid position-absolute"
              style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
            />
            <img
              src={FrameHeroImg}
              alt="beautiful villa frame"
              className="img-fluid position-absolute"
              style={{ margin: "0 -15px -15px 0" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
