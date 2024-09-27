// src/pages/About.tsx
import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1 }} 
              className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex"
            >
              <img className="rounded-xl object-cover" src="./images/learn1.jpg" alt="about Us image" />
            </motion.div>
            <motion.img 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1 }} 
              className="sm:ml-0 ml-auto rounded-xl object-cover" 
              src="./images/learn2.webp" 
              alt="about Us image" 
            />
          </div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1 }} 
            className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex"
          >
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                <p className="text-gray-900 text-1xl font-manrope leading-normal text-start text-center">
                  <span className='text-purpleRoyal font-bold'>قفزة تك</span> هي منصة مبتكرة تجمع بين عالمين: "قفزة" التي تمثل الانتقال إلى آفاق جديدة، و"تك" التي تعبر عن التكنولوجيا. هذا المزيج يعكس إيماننا الراسخ بأن التكنولوجيا تفتح الأبواب للأفراد لتحقيق أحلامهم وبلوغ إنجازاتهم.
                </p>
                <p className="text-gray-900 text-1xl font-manrope leading-normal text-start text-center">
                  <span className='text-purpleRoyal font-bold'>في قفزة تك</span> نحن لا نقدم لك مجرد دروس في أدوات اللوكود والنوكود، بل نكون رفيقك في بداية مسيرتك نحو عالم التكنولوجيا المثير. برامجنا التعليمية المصممة بعناية تزودك بالمهارات اللازمة لإنشاء التطبيقات والحلول التي تخيلتها.
                </p>
                <p className="text-gray-900 text-1xl font-manrope leading-normal text-start text-center">
                  <span className='text-purpleRoyal font-bold'>في قفزة تك</span> نقدم لك كل ما تحتاجه، بدءًا من أساسيات أدوات اللوكود والنوكود وصولًا إلى مستويات متقدمة في تطوير مشاريعك أو الحلول التي تسعى إليها مؤسستك.
                </p>
                <p className="text-gray-900 text-1xl font-manrope leading-normal text-start text-center">
                  ببساطة، <span className='text-purpleRoyal font-bold'>قفزة تك</span> تمنحك الفرصة لتكون بطل قصتك الخاصة. نحن نزوّدك بالأدوات والمعرفة اللازمة لكتابة قصة مليئة بالإبداع والابتكار، مما يمهد لك الطريق لتكون القفزة التالية نحو النجاح.
                </p>
              </div>
              <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                <div className="flex-col justify-start items-start inline-flex">
                  <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                    <CountUp end={300} duration={2} suffix="+" />
                  </h3>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">طالب سنوياً</h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                    <CountUp end={30} duration={2} suffix="+" />
                  </h4>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">مدرب ومحاضر</h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                    <CountUp end={52} duration={2} suffix="+" />
                  </h4>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">مشروع من قبل طلابنا</h6>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
