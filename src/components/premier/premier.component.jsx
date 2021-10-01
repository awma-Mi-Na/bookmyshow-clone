import React from "react";
// import Slider from "react-slick";

// poster component
// import { Poster } from "../poster/poster.component";

// import settings for carousel
// import premierCarouselSettings from "../../config/posterCarousel.config";

// import images
// import premierImages from "../../config/posters.config";

// // poster slider component
// import PremierSlider from "../PosterSlider/PosterSlider.component";

const Premier = () => {
  return (
    <>
      <div className="hidden md:flex">
        <img
          src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
          alt="premier"
          className="w-full h-full"
        />
      </div>

      {/* <PremierSlider
          images={premierImages}
          title="Premieres"
          subTitle="Brand new releases every Friday."
        ></PremierSlider> */}

      {/* <div className="flex flex-col items-start text-white">
          <h3 className="text-xl font-bold">Premieres</h3>
          <p className="text-sm font-bold">Brand new releases every Friday</p>
        </div>
        <Slider {...premierCarouselSettings}>
          {premierImages.map((image) => (
            <Poster {...image} isDark />
          ))}
        </Slider> */}
    </>
  );
};

export default Premier;
