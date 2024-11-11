import { motion } from "framer-motion";
import image from "../assets/images/sections/section2.jpg";
const PromotionalSection: React.FC = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
     {/* Image with Animation */}
     <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={image}
          alt="Promotional"
          className="w-full h-auto rounded-lg shadow-lg"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="block mb-4 text-3xl text-indigo-500 font-medium">
          انطلق في رحلتك المهنية اليوم
        </h1>
        <h3 className="text-2xl font-semibold mb-4">
          تعلم بسرعة، وحقق تقدمًا حقيقيًا
        </h3>
        <p className="text-base md:text-lg text-slate-700 mb-6">
          اكتسب مهارات جديدة من خلال برامجنا المكثفة التي توفر لك المعرفة 
          العملية المطلوبة في السوق. احصل على شهادة معتمدة واجعل سيرتك الذاتية 
          تبرز أمام الشركات.
        </p>
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#4F46E5" }}
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all"
        >
          اشترك الآن واحصل على خصم 50%
        </motion.button>
      </motion.div>

     
    </section>
  );
};

export default PromotionalSection;
