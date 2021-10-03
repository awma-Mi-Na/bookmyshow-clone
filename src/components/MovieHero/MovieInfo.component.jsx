const MovieInfo = () => {
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
            Justice League
          </h1>
          <div className="text-white font-light flex flex-col gap-3 md:px-3">
            <h4>4k &bull; English &bull; Action </h4>
            <h4>1h58m &bull; Action, Sci-fi, Superhero &bull; 13+ </h4>
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
