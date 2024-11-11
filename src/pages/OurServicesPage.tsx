import { motion } from "framer-motion";

const OurServicesPage: React.FC = () => {
  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purpleRoyal to-sunsetOrange text-white py-20 w-full">
      <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-4">
            خدماتنا
          </h1>
          <p className="text-lg">
            نقدم مجموعة متنوعة من الخدمات التي تلبي احتياجاتك التعليمية والمهنية، 
            مصممة خصيصًا لتحقيق أقصى استفادة وتطور في مجالك.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: -5 }}
          transition={{ duration: 1 }}
        >
      <section className="w-full py-16 px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Service 1 */}
        <motion.div
          className="bg-gray-100 p-8 rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            استشارات مهنية
          </h2>
          <p className="text-base text-slate-700 mb-6">
            نقدم لك استشارات مهنية مخصصة تساعدك على اتخاذ قرارات ذكية وتوجيه مستقبلك الوظيفي في الاتجاه الصحيح.
          </p>
          <button className="bg-orchidPurple text-white py-2 px-4 rounded transition-all hover:bg-indigo-600">
            اكتشف المزيد
          </button>
        </motion.div>

        {/* Service 2 */}
        <motion.div
          className="bg-gray-100 p-8 rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            دورات تدريبية
          </h2>
          <p className="text-base text-slate-700 mb-6">
            احصل على تدريب متخصص في مختلف المجالات التقنية والإدارية، مع برامج تدريبية متكاملة لكل المستويات.
          </p>
          <button className="bg-orchidPurple text-white py-2 px-4 rounded transition-all hover:bg-indigo-600">
            اكتشف المزيد
          </button>
        </motion.div>

        {/* Service 3 */}
        <motion.div
          className="bg-gray-100 p-8 rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            تطوير المهارات
          </h2>
          <p className="text-base text-slate-700 mb-6">
            نوفر برامج تطوير المهارات التي تساعدك على تعزيز مهاراتك الشخصية والمهنية لتكون جاهزًا لمواجهة تحديات سوق العمل.
          </p>
          <button className="bg-orchidPurple text-white py-2 px-4 rounded transition-all hover:bg-indigo-600">
            اكتشف المزيد
          </button>
        </motion.div>
      </section>

      {/* Call-to-Action Section */}
      <section className="w-full bg-indigo-100 py-16 px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">
            مستعد للانطلاق في رحلتك التعليمية؟
          </h2>
          <p className="text-lg text-slate-700 mb-8">
            لا تنتظر، انضم الآن إلى برامجنا التعليمية واحجز استشارتك المجانية للبدء في تحسين مهاراتك ومستقبلك.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-orchidPurple text-white py-3 px-6 rounded-lg transition-all hover:bg-indigo-600"
          >
            احجز استشارتك الآن
          </motion.button>
        </motion.div>
      </section>
      </motion.div>
    </main>
  );
};

export default OurServicesPage;
