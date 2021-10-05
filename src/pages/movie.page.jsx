// icons
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";

// components
import MovieHero from "../components/MovieHero/MovieHero.component";
import Cast from "../components/cast/cast.component";

// image slider
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

// images
// import premierePosters from "../config/posters.config";

// movie context
import { MovieContext } from "../context/movie.context";
import { useParams } from "react-router";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";

const Movie = () => {
  const { id } = useParams();
  const { movie } = useContext(MovieContext);
  const [cast, setCast] = useState([]);
  const [recommendMovies, setRecommendMovies] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  // request for casts and crews
  useEffect(() => {
    const reqCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    reqCast();
  }, [id]);

  // req for recommended movies
  useEffect(() => {
    const reqRecommendMovies = async () => {
      const getRecommendMovies = await axios.get(
        `/movie/${id}/recommendations`
      );
      setRecommendMovies(getRecommendMovies.data.results);
    };
    reqRecommendMovies();
  }, [id]);

  // req for similar movies
  useEffect(() => {
    const reqSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
      setSimilarMovies(getSimilarMovies.data.results);
    };
    reqSimilarMovies();
  }, [id]);

  // custom slider settings for this page
  const settings = {
    infinite: true,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // custom slider settings for casts
  const settingsCast = {
    infinite: true,
    autoplay: false,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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
          slidesToShow: 2,
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
          <p>{movie.overview}</p>
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
          {/* <div className="flex flex-wrap gap-4 "> */}
          <Slider {...settingsCast}>
            {cast.map((castdata) => (
              <Cast
                image={`https://image.tmdb.org/t/p/original/${castdata.profile_path}`}
                castName={castdata.original_name}
                castRole={castdata.character}
              />
            ))}
          </Slider>
          {/* </div> */}
        </div>

        <div className="my-8">
          <hr />
        </div>

        {/* similar movies sliders */}
        <div className="my-8">
          <div className="container mx-auto px-4">
            <PosterSlider
              config={settings}
              images={similarMovies}
              title="You might also like"
              isDark={false}
            />
          </div>
        </div>

        <div className="my-8">
          <hr />
        </div>

        {/* recommendation slider */}
        <div className="my-8">
          <div className="container mx-auto px-4">
            <PosterSlider
              config={settings}
              images={recommendMovies}
              title="Recommendation"
              isDark={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
