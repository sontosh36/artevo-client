import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const artists = [
  {
    image: "https://i.ibb.co.com/8LVm4X6W/rafiul-karim-artist.jpg",
    name: "Rafiqul Karim",
  },
  {
    image: "https://i.ibb.co.com/r2S8jPHF/tahia-chowdhury-artist.jpg",
    name: "Tahia Chowdhury",
  },
  {
    image: "https://i.ibb.co.com/Z61KDH45/maruf-hasan-artist.jpg",
    name: "Maruf Hassan",
  },
  {
    image: "https://i.ibb.co.com/XxsQmGhp/ayan-rahman-artist.jpg",
    name: "Ayan Rahman",
  },
  {
    image: "https://i.ibb.co.com/Tpf9wpC/fahim-ahmed-artist.jpg",
    name: "Fahim Ahmed",
  },
  {
    image: "https://i.ibb.co.com/fdjkkTvb/chris-walters.jpg",
    name: "Chris Walters",
  },
];

const FeaturedArtists = () => {
  return (
    <div className="max-w-7xl bg-base-300 mx-auto px-4 py-6 rounded-lg">
      <div className="flex flex-col mx-auto text-center items-center max-w-xl mb-8">
        <h2 className="font-bold text-3xl mb-2">Top Artist of the Week</h2>
        <p className="text-sm">
          Highlighting a visionary creator whose unique style, passion, and
          storytelling continue inspiring artists and art lovers worldwide.
        </p>
      </div>

      <Swiper
        spaceBetween={20}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {artists.map((artist, index) => (
          <SwiperSlide key={index}>
            <div className="bg-base-200 p-4 rounded-2xl shadow-md h-full">
              <div className="flex flex-col items-center gap-4">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-20 h-20 object-cover rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-lg">{artist.name}</h4>
                  <button className="mt-2 bg-blue-500 px-3 py-1 rounded text-white">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedArtists;
