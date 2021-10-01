// components
import EntertainmentCardSlider from "../components/EntertainmentCard/EntertainmentCard.component";
import Premier from "../components/premier/premier.component";

// image slider
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

// images
import premierePosters from "../config/posters.config";

const HomePage = () => {
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
              images={premierePosters}
              title="Premieres"
              subTitle="Brand new releases every Friday."
              isDark
            />
          </div>
        </div>

        {/* this section for online streaming events */}
        <div className="container mx-auto px-4">
          <PosterSlider
            images={premierePosters}
            title="Online streaming events"
            isDark={false}
          />
        </div>

        {/* this section for Outdoor events */}
        <div className="container mx-auto px-4">
          <PosterSlider
            images={premierePosters}
            title="Outdoor events"
            isDark={false}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
