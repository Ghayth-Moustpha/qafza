import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const importAll = (r) => {
  return r.keys().map(r);
};

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const [images, setImages] = useState([]);
  const [isVisible, setIsVisible] = useState(false); // Visibility state for animation

  useEffect(() => {
    const loadedImages = importAll(
      require.context("../assets/images/HeroSlider", false, /\.(png|jpe?g|svg)$/)
    );
    setImages(loadedImages);

    // Trigger animation after component mounts
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // Small delay for better effect
  }, []);

  return (
    <section className={`bg-white py-12 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} dir="ltr">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center  md:px-0 ">
          <div className="border shadow-lg z-20 p-10">
            <h1 className="text-4xl font-bold m-4 ">
              كن أنت <span className="text-purpleRoyal">القفزة القادمة</span>
            </h1>
            <p className="text-gray-700 mb-6">
              مع قفزة، يمكنك تحويل أي حلم تعليمي إلى حقيقة، لأننا نؤمن بأن الشغف هو
              بداية كل تعلم <br />
              والنجاح هو النتيجة الحتمية لكل جهد مستمر
            </p>

            <div className="flex justify-center md:justify-start">
              <button className="bg-purpleRoyal text-white py-2 px-4 rounded-md mr-2">
                احجز استشارتك المجانية الآن
              </button>
              <button className="border border-gray-300 text-gray-700 py-2 px-4 rounded-md flex items-center">
                <span className="ml-2">الفيديو التعريفي</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.752 11.168l-6.518 4.326A1 1 0 017 14.748V9.252a1 1 0 011.234-.97l6.518 4.326a1 1 0 010 1.736z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className=" rounded-lg  w-full sm:w-full md:w-1/2 px-4 md:px-0 mt-8 md:mt-0">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="rounded-lg  "
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
