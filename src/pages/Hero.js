import React from "react";

import HeroImg from "assets/images/img-hero.jpg";
import FrameHeroImg from "assets/images/frame-hero.png";
import ic_cities from "assets/images/icons/ic_cities.svg";
import ic_traveler from "assets/images/icons/ic_traveler.svg";
import ic_treasure from "assets/images/icons/ic_treasure.svg";

import Button from "components/Button";

const Hero = props => {
  const showMostPicked = () => {
    window.scrollTo();
  };

  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5">
          <h1 className="h2 font-weight-bold text-gray-900 mb-3 line-height-1">
            Forget Busy Work, <br />
            Start Next Vacation
          </h1>
          <p className="font-height-thin text-gray-500 w-50 mb-5">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            isPrimary
            hasShadow
            onClick={showMostPicked()}
            className="px-5"
          >
            Show Me Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
