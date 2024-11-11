import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 min-h-[200px] md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <h1 className="block mb-4 text-2xl text-indigo-500 font-medium">
تعلم أي تقنية، قفزة بقفزة         </h1>
        <h3 className="text-2xl font-semibold">
          
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
        "برامج قفزة التعليمية تشمل أشهر التقنيات العالمية، مع دورات شاملة تغطي كافة المستويات من المبتدئين إلى المحترفين، وتوفر مواد تعليمية تفاعلية، مشاريع عملية، ودعم مباشر من المدربين لضمان تجربة تعلم فعالة وشخصية."

</p>
      
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};
const importAll = (requireContext) => {
  return requireContext.keys().map((key, index) => ({
    id: index + 1,
    src: requireContext(key).default || requireContext(key), // Handle default export if present
  }));
};

// Dynamically import all image files (with common extensions) from the /assets/images/programming folder
const squareData = importAll(require.context('../assets/images/programing', false, /\.(png|jpe?g|gif|svg|bmp|webp)$/));


const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className=""
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
         backgroundRepeat: "no-repeat"
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };
  const renderedSquares = useMemo(() => squares.map((sq) => sq), [squares]);

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[500px] min-h-500px gap-1">
      {renderedSquares}
      </div>
  );
};

export default ShuffleHero;