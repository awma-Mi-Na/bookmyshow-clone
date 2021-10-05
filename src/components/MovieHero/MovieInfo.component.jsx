import { useContext } from "react";

// movie context
import { MovieContext } from "../../context/movie.context";

const MovieInfo = () => {
  const { movie } = useContext(MovieContext);

  // get genres of the movie
  const genres = movie.genres?.map(({ name }) => name).join(", "); //optional chaining
  // similar to this statement:
  // const genres = movie.genre && movie.genres?.map(({ name }) => name).join(", ");

  return (
    <>
      <div className="flex flex-col gap-3 lg:gap-5 ">
        <div className="flex items-center md:px-3">
          <div className="w-36 h-8">
            <img
              src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
              alt="premiere"
              className="h-full w-full"
            />
          </div>
          <span className="bg-navclr-700 p-1 text-white rounded-md text-xs">
            Streaming now
          </span>
        </div>
        <div className="flex flex-col-reverse lg:flex-col gap-3 lg:gap-5 ">
          <h1 className="text-white lg:text-5xl font-bold hidden lg:block md:px-3">
            {movie.original_title}
          </h1>
          <div className="text-white font-light flex flex-col gap-3 md:px-3">
            <h4>4k &bull; {movie.original_language} &bull; Action </h4>
            <h4>
              {parseInt(movie.runtime / 60)}h {movie.runtime % 60}min &bull;{" "}
              {/* {(movie.runtime / 60).toFixed(2)}h {movie.runtime % 60}min &bull;{" "} */}
              {genres} &bull; 13+{" "}
            </h4>
          </div>
          <div className="flex items-center gap-3 md:w-screen lg:w-full md:px-3">
            <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
              Rent ₹149
            </button>
            <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
              Buy ₹189
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
