import React from 'react';
import { motion } from "framer-motion";

const OurProgramsPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Navigation */}
      <section className="relative bg-gradient-to-r from-purpleRoyal to-sunsetOrange text-white py-20 w-full">
      <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-4">
            برامج قفزة الاكاديمية
          </h1>
          <p className="text-lg">
مجموعة واسعة من البرامج التعليمية والتدريبية في مختلف المجالات التقنية، والعلوم           </p>
        </motion.div>
      </section>
      <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: -5 }}
          transition={{ duration: 1 }}
        >
      {/* Main Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center"> برامج قفزة التعليمية  </h1>
        
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefits Items */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <div className="text-pink-600 font-bold">المسارات لغير التقنيين</div>
              <p className="mt-2 text-gray-600">
                مصممة خصيصًا للأفراد الذين يرغبون في اكتساب المعرفة التقنية الأساسية دون الحاجة لخلفية تقنية...
              </p>
              <a href="/nontech-path" className="text-blue-600 hover:underline mt-2 block">
                &lt;&lt; المزيد من التفاصيل
              </a>
            </div>
            <img
            className="mx-auto mt-4 h-40"
            sizes=""
            srcSet="./logo.png"
            alt="SHAI platform"
          />
            <div className="bg-white shadow-md rounded-lg p-4">
              <div className="text-pink-600 font-bold">مسار تحليل البيانات وابتكار الحلول</div>
              <p className="mt-2 text-gray-600">
                يركز على تحليل البيانات وعرضها بشكل تفاعلي، واستخدام تقنيات متقدمة...
              </p>
              <a href="/data-and-development-path" className="text-blue-600 hover:underline mt-2 block">
                &lt;&lt; المزيد من التفاصيل
              </a>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <div className="text-pink-600 font-bold">المسارات للتقنيين</div>
              <p className="mt-2 text-gray-600">
                تركّز هذه المسارات على تعزيز مهارات البرمجة، وتطوير التطبيقات...
              </p>
              <a href="/technical-path" className="text-blue-600 hover:underline mt-2 block">
                &lt;&lt; المزيد من التفاصيل
              </a>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <div className="text-pink-600 font-bold">مسار الأتمتة وتطوير الروبوتات</div>
              <p className="mt-2 text-gray-600">
                يركز هذا المسار على تعليم تقنيات الأتمتة وتطوير الروبوتات...
              </p>
              <a href="/automation-and-rpa-path" className="text-blue-600 hover:underline mt-2 block">
                &lt;&lt; المزيد من التفاصيل
              </a>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
            <div className="text-pink-600 font-bold"> المسارات الاكاديمية  </div>
              <p className="mt-2 text-gray-600">
يركز هذا المسار على المواد الدراسية الاكاديمية المختلفية في مجالات الهندسة والعلوم البحتة              </p>
              <a href="/automation-and-rpa-path" className="text-blue-600 hover:underline mt-2 block">
                &lt;&lt; المزيد من التفاصيل
              </a>
            </div>
          </div>
        </div>
      </section>
      </motion.div>

   
    </div>
  );
};

export default OurProgramsPage;
