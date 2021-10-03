// icons
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";

// components
import MovieHero from "../components/MovieHero/MovieHero.component";
import Cast from "../components/cast/cast.component";

// image slider
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

// images
import premierePosters from "../config/posters.config";

const Movie = () => {
  // custom slider settings for this page
  const settings = {
    infinite: true,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <MovieHero />
      <div className="my-12 container px-4 lg:ml-20 lg:w-2/3">
        {/* movie description */}
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
          <p>
            Bruce Wayne and Diana Prince try to bring the metahumans of Earth
            together after the death of Clark Kent. Meanwhile, Darkseid sends
            Steppenwolf to Earth with an army to subjugate humans.
          </p>
        </div>

        <div className="my-8">
          <hr />
        </div>

        {/* offers */}

        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable offers
          </h2>

          {/* offer cards */}

          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex item-start gap-2 bg-yellow-100 p-3 border-2 border-dashed border-yellow-400 rounded-md">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>
              <div className="flex flex-col item-start ">
                <h3 className="text-gray-700 font-bold text-xl">
                  Visa Stream Offer
                </h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all Visa cards* on BookMyShow
                  stream
                </p>
              </div>
            </div>
            <div className="flex item-start gap-2 bg-yellow-100 p-3 border-2 border-dashed border-yellow-400 rounded-md">
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col item-start ">
                <h3 className="text-gray-700 font-bold text-xl">Filmy Pass</h3>
                <p className="text-gray-600">
                  Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy
                  Pass @Rs.99
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <hr />
        </div>

        {/* cast members */}
        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-4 ">
            Cast & crew
          </h2>
          <div className="flex flex-wrap gap-4 ">
            <Cast
              image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ben-affleck-292-12-09-2017-05-12-16.jpg"
              castName="Ben Affleck"
              castRole="Batman"
            />
            <Cast
              image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg"
              castName="Henry Cavill"
              castRole="Superman"
            />
            <Cast
              image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg"
              castName="Gal Gadot"
              castRole="Wonder Woman"
            />
          </div>
        </div>

        <div className="my-8">
          <hr />
        </div>

        {/* recommendation sliders */}
        <div className="my-8">
          <div className="container mx-auto px-4">
            <PosterSlider
              config={settings}
              images={premierePosters}
              title="You might also like"
              isDark={false}
            />
          </div>
        </div>

        <div className="my-8">
          <hr />
        </div>

        {/* bms exclusive slider */}
        <div className="my-8">
          <div className="container mx-auto px-4">
            <PosterSlider
              config={settings}
              images={premierePosters}
              title="BMS XCLUSIV"
              isDark={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
