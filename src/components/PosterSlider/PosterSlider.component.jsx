import Slider from "react-slick";

// poster component
import { Poster } from "../poster/poster.component";

// config for carousel
import CarouselSettings from "../../config/posterCarousel.config";

const PosterSlider = (props) => {
  return (
    <>
      <div className="flex flex-col items-start text-white">
        <h3
          className={`text-2xl font-bold ${
            props.isDark ? "text-white" : "text-gray-700"
          } `}
        >
          {props.title}
        </h3>
        <p
          className={`text-sm font-bold ${
            props.isDark ? "text-white" : "text-gray-700"
          } `}
        >
          {props.subTitle}
        </p>
      </div>
      <Slider {...CarouselSettings}>
        {props.images.map((image) => (
          <Poster {...image} isDark={props.isDark} />
        ))}
      </Slider>
    </>
  );
};

export default PosterSlider;
