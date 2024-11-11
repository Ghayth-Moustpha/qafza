import React, { useRef, useState, useEffect } from 'react';

interface CardProps {
  title: string;
  body: string[]; // body is an array of strings
  image?: string; // image is optional
  index: number;
}

const Card: React.FC<CardProps> = ({ title, body, index ,image}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.5 } // Adjust this value to control when the effect triggers
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`sticky top-40 mx-5 text-center md:mx-40 h-500 bg-white shadow-xl max-width-sm border  z-${index + 1} transition-transform duration-500 ease-in-out`}
      style={{
        transform: isVisible
          ? `scale3d(1, 1, 1) translateY(${index * 20}px)`
          : `scale3d(0.888686, 0.888686, 1) translateY(${index * 20}px)`,
        willChange: 'transform',
        transformStyle: 'preserve-3d',
      }}
    >
      <div className='border p-5 flex justify-start'>
      <img src={image} alt="imagecard" className='h-5 mx-2 md:h-10'/>

        <h2 className=" md:text-4xl  text-center w-full font-bold text-purpleRoyal">
          {title} 
        </h2>
      </div>
      <div className='p-5 mb-20'>
        <div className="transition-opacity text-xl duration-500 ease-in-out">
          {body.map((text, i) => (
            <p key={i} className="mt-2">
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
