// react useeffect etc
import { useEffect, useState } from "react";

// components
import EntertainmentCardSlider from "../components/EntertainmentCard/EntertainmentCard.component";
import Premier from "../components/premier/premier.component";

// image slider
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

// images
// import premierePosters from "../config/posters.config";

// axios
import axios from "axios";

const HomePage = () => {
  // api call to tmdb for popular movie posters
  const [popularImages, setPopularImages] = useState([]);

  useEffect(() => {
    const reqPopularImages = async () => {
      const getImages = await axios.get("/movie/popular");
      setPopularImages(getImages.data.results);
    };
    reqPopularImages();
  }, []);

  // console.log(popularImages);

  // api call to tmdb for top rated movie posters
  const [topMoviePosters, setTopMoviePosters] = useState([]);

  useEffect(() => {
    const reqTopMoviePosters = async () => {
      const getTopMoviePosters = await axios.get("/movie/top_rated");
      setTopMoviePosters(getTopMoviePosters.data.results);
    };
    reqTopMoviePosters();
  }, []);

  // api call to tmdb for upcoming movie posters
  const [upcomingPosters, setUpcomingPosters] = useState([]);

  useEffect(() => {
    const reqUpcomingPosters = async () => {
      const getUpcomingPosters = await axios.get("/movie/upcoming");
      setUpcomingPosters(getUpcomingPosters.data.results);
    };
    reqUpcomingPosters();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-800 my-3">
            The best of entertainment
          </h1>
          <EntertainmentCardSlider />
        </div>

        {/* this section for premiere component */}
        <div className="bg-premierbg-100 py-12">
          <div className="container mx-auto px-4 flex flex-col gap-3">
            <Premier />
            <PosterSlider
              images={popularImages}
              title="Premieres"
              subTitle="Brand new releases every Friday."
              isDark
            />
          </div>
        </div>

        {/* this section for online streaming events */}
        <div className="container mx-auto px-4">
          <PosterSlider
            images={topMoviePosters}
            title="Online streaming events"
            isDark={false}
          />
        </div>

        {/* this section for Outdoor events */}
        <div className="container mx-auto px-4">
          <PosterSlider
            images={upcomingPosters}
            title="Outdoor events"
            isDark={false}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
