import { motion } from "framer-motion";

const HeroSection2 = () => {
  return (
    <section className="relative bg-gradient-to-r from-purpleRoyal to-sunsetOrange text-white py-20 w-full">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          قفزة تك
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-2xl mb-8"
        >
          منصة تكنولوجية مبتكرة تُلهمك للإبحار في عالم التكنولوجيا الحديث. نحن ندربك على أدوات اللوكود والنوكود لتتمكن من بناء تطبيقات وحلول فريدة، وتبدأ رحلتك إلى المستقبل.
        </motion.p>
        <motion.button
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="bg-white text-blue-600 py-2 px-6 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
        >
          ابدأ الآن
        </motion.button>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10 flex justify-center gap-10"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold">300+</h2>
            <p className="text-sm">طالب سنوياً</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold">30+</h2>
            <p className="text-sm">مدرب ومحاضر</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold">52+</h2>
            <p className="text-sm">مشروع ناجح</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection2;
