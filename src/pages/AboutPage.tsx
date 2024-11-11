// src/pages/About.tsx
import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import FAQ from '../sections/FAQ';
import HeroSection3 from '../sections/HeroSection3';

const aboutTexts = [
  {
    title: "في قفزة تك",
    content: "نؤمن أن كل خطوة نحو التقدم تبدأ بقفزة صغيرة، لكنها مليئة بالشغف والرغبة في تحقيق الأحلام. اسمنا يعكس رؤيتنا؛ \"قفزة\" ليست مجرد كلمة، بل هي الانتقال إلى آفاق جديدة ومغامرات لا حدود لها، مدفوعة بالتكنولوجيا التي تفتح أبواب الفرص."
  },
  {
    title: "  نحن في قفزة",
    content: "لا نقدم لك مجرد تدريبات أو استشارات، بل نصبح شركاءك في رحلة التعلّم والنمو. نمنحك الأدوات التي تحتاجها لتطوير نفسك أو مشروعك، ونسير معك خطوة بخطوة، من البداية وحتى تصل إلى أهدافك"
  },
  {
    title: "في قفزة تك",
     content : "برامجنا التدريبية والمبادرات المجانية، والمكتبة الغنية بالموارد، كلها مصممة لتكون يدك الممدودة نحو مستقبل مليء بالإبداع والابتكار. قفزة تمنحك المساحة لتكون بطل قصتك، وتساعدك في كتابة فصول نجاحك بأفضل الأدوات والتقنيات."  },
  {
    title: "قفزة تك",
    content: "أكثر من مجرد تعليم، قفزة هي مجتمع يشجّعك على التطور، ويرافقك في كل قفزة تأخذها نحو التميز والنجاح."
  }
];

const About: React.FC = () => {
  return (
    <> 
    
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
                  {aboutTexts.map((item, index) => (
                    <p key={index} className="text-gray-900 text-1xl font-manrope leading-normal text-start text-center">
                      <span className='text-purpleRoyal font-bold'>{item.title}</span> {item.content}
                    </p>
                  ))}
                </div>
                
                <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                  <div className="flex-col justify-start items-start inline-flex">
                    <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                      <CountUp end={1000} duration={2} suffix="+" />
                    </h3>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">طالب سنوياً</h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                      <CountUp end={25} duration={2} suffix="+" />
                    </h4>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">مدرب ومحاضر</h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                      <CountUp end={46} duration={2} suffix="+" />
                    </h4>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">مشروع من قبل طلابنا</h6>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
         
        </div>
      </section>
      <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }} 
              >
                <HeroSection3/>
              </motion.div> 
      <FAQ/>
    </>
  );
};

export default About;
