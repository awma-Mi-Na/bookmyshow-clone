import { Poster } from "../components/poster/poster.component";

import PlaysFilter from "../components/PlaysFilter/PlaysFilter.component";

const plays = () => {
  return (
    <>
      {/* root element */}
      <div className="container mx-auto px-4">
        {/* left column */}
        <div className="w-full lg:flex lg:flex-row-reverse">
          <div className="lg:w-3/4">
            <h2 className="text-2xl font-bold mb-4">Plays in Aizawl</h2>

            {/* posters of plays */}
            <div className="flex flex-wrap ">
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCA1IE9jdCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00304172-qgmsptenrz-portrait.jpg"
                  title="Ranga Shankara"
                  subtitle="Kannada ₹150"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCA1IE9jdCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00304172-qgmsptenrz-portrait.jpg"
                  title="Ranga Shankara"
                  subtitle="Kannada ₹150"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCA1IE9jdCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00304172-qgmsptenrz-portrait.jpg"
                  title="Ranga Shankara"
                  subtitle="Kannada ₹150"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCA1IE9jdCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00304172-qgmsptenrz-portrait.jpg"
                  title="Ranga Shankara"
                  subtitle="Kannada ₹150"
                />
              </div>
            </div>
          </div>

          {/* right column filters */}
          <div className="lg:w-3/12">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <PlaysFilter
              title="Date"
              tags={["Today", "Tomorrow", "This Weekend"]}
            />
            <PlaysFilter
              title="Language"
              tags={["Tamil", "Telegu", "English"]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default plays;
