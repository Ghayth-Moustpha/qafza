import { motion } from "framer-motion";

const Inverst: React.FC = () => {
  return (
    <section className="w-full bg-purpleRoyal px-8 py-16 flex flex-col items-center justify-center">
      <motion.div
        className="text-center max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-semibold text-white mb-4">
          استثمارك في التعلم اليوم هو استثمار في نجاحك غدًا
        </h1>
        <p className="text-lg text-white mb-8">
          اغتنم الفرصة الآن، واستعد للمستقبل مع برامجنا المتنوعة والشاملة التي
          تلبي احتياجاتك التعليمية.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#4F46E5" }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-500 text-white font-medium py-3 px-6 rounded-lg shadow transition-all"
          >
            احجز استشارتك المجانية الآن
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#4F46E5" }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-white text-white font-medium py-3 px-6 rounded-lg shadow transition-all hover:bg-indigo-500 hover:text-white"
          >
            استكشف المزيد من برامجنا
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Inverst;
