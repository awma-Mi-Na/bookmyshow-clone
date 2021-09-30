import React from "react";
import Slider from "react-slick";

// poster component
import { Poster } from "../poster/poster.component";
const Premier = () => {
  const settings = {
    infinite: true,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    resonsive: [
      {
        breakpoints: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoints: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoints: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const premierImages = [
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NDlrIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70/et00110039-cjywkkaltl-portrait.jpg",
      alt: "james",
      title: "james-bond",
      subtitle: "english",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NDlrIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70/et00110039-cjywkkaltl-portrait.jpg",
      alt: "james",
      title: "james-bond",
      subtitle: "english",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NDlrIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70/et00110039-cjywkkaltl-portrait.jpg",
      alt: "james",
      title: "james-bond",
      subtitle: "english",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NDlrIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70/et00110039-cjywkkaltl-portrait.jpg",
      alt: "james",
      title: "james-bond",
      subtitle: "english",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NDlrIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70/et00110039-cjywkkaltl-portrait.jpg",
      alt: "james",
      title: "james-bond",
      subtitle: "english",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NDlrIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70/et00110039-cjywkkaltl-portrait.jpg",
      alt: "james",
      title: "james-bond",
      subtitle: "english",
    },
  ];
  return (
    <>
      <Slider {...settings}>
        {premierImages.map((image) => (
          <Poster {...image} />
        ))}
      </Slider>
    </>
  );
};

export default Premier;
