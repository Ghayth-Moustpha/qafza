import React, { useEffect, useState } from "react";

const AnimatedText = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay to make animation noticeable
  }, []);

  const items = [
    { text: "تجربة فريدة من نوعها", delay: "delay-100" },
    { text: "اتقان ومواكبة كل ما هو جديد", delay: "delay-300" },
    { text: "مجتمع عربي تقني", delay: "delay-500" },
  ];

  return (
   <div >
      {items.map((item, index) => (
        <div
          key={index}
          className={`text-sm font-bold text-gray-800 inline-flex mx-4 my-2`}
        >
         {item.text}
        </div>
      ))}
    </div>
  );
};

export default AnimatedText;
