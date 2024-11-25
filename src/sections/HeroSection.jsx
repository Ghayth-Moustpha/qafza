import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimatedText from "../components/AnimatedText";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const importAll = (r) => {
  return r.keys().map(r);
};

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "cubic-bezier(0.65, 0.05, 0.36, 1)",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [images, setImages] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  useEffect(() => {
    const loadedImages = importAll(
      require.context("../assets/images/HeroSlider", false, /\.(png|jpe?g|svg)$/)
    );
    setImages(loadedImages);

    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  const openModal = () => {
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <section className={`bg-white py-12 transition-opacity duration-1000 overflow-hidden ${isVisible ? 'opacity-100' : 'opacity-0'}`} dir="ltr">
      <div className="container mx-auto  flex-col md:flex md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:px-0">
          <div className="border shadow-lg z-20 p-10">
            <h1 className="text-4xl font-bold m-4 ">
              <span className="text-purpleRoyal"> جاهز للقفزة الكبيرة ؟ </span>
            </h1>
            <p className="text-gray-700 mb-8 text-xl">
              قفزة تِك موجودة لتساعدك تحترف أحدث التقنيات! من تطوير البرمجيات،
              الذكاء الاصطناعي، الأمن السيبراني، تصميم تجربة المستخدم وغيرهم.
              <br />
              <br />
              <span className="text-orchidPurple font-bold ">
                موجودين لنخلي قفزتك إلى عالم التكنولوجيا قصة نجاح
              </span>
              <AnimatedText/>
            </p>
            <div className="flex justify-center md:justify-start">
              <Link  to="booking" className="bg-purpleRoyal hover:bg-orchidPurple text-white py-2 px-4 rounded-md mr-2">
                احجز استشارتك المجانية الآن
              </Link>
              <button
                onClick={openModal} // Open the modal when clicked
                className="border border-gray-300 text-gray-700 py-2 px-4 hover:bg-orchidPurple hover:text-white rounded-md flex items-center"
              >
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

        <div className="slider-container rounded-lg md:w-1/2 px-4 md:px-0 mt-8 md:mt-0">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="YouTube Video"
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-11/12 md:w-3/4 h-3/4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <button onClick={closeModal} className="absolute top-4 right-4 text-white text-xl">X</button>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/6sNtkH3prtg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Modal>
    </section>
  );
};

export default HeroSection;
