import React from 'react';
import { motion } from "framer-motion";
import Header from '../components/Header';

const programs = [
  {
    title: 'مسارات مخصصة لغير التقنيين',
    points: [
      'تمكّنك هذه المسارات من دمج التكنولوجيا في عملك دون الحاجة للتعامل المباشر مع البرمجة.',
      'تدريب على أدوات الذكاء الاصطناعي وهندسة الأوامر (Prompt Engineering).',
      'الذكاء الاصطناعي بدون برمجة باستخدام منصة Azure.',
      'تحليل البيانات باستخدام Power BI.'
    ],
    link: '/nontech-path'
  },
  {
    title: 'مسارات تقنية شاملة ',
    points: [
      'من البداية حتى الاحتراف',
      'إذا كنت تبحث عن اكتساب المهارات التقنية بشكل تدريجي ومتخصص، نوفر لك مسارات متكاملة تغطي كافة الجوانب مثل:',
      'المسار الشامل لعلم البيانات.',
      'مسار متخصص في تحليل البيانات.',
      'مسار تطوير الواجهات الأمامية ومواقع الويب.',
      'مسار الأمن السيبراني.',
      'مسار ضمان الجودة.'
    ],
    link: '/comprehensive-tech-path'
  },
  {
    title: 'مسارات تقنية متقدمة للمحترفين',
    points: [
      'للمختصين الراغبين في تعزيز خبراتهم التقنية، نقدم برامج متقدمة تتناول:',
      'مسار هندسة تعلم الآلة وعملياتها (MLOps).',
      'مسار تطوير العمليات والبنية التحتية (DevOps).',
      'مسار الرؤية الحاسوبية ومعالجة اللغات الطبيعية (Computer Vision & NLP).'
    ],
    link: '/advanced-tech-path'
  },
];

const OurProgramsPage: React.FC = () => {
  return (
    <div className="bg-white">
      <Header
        color='orchidPurple'
        title='أكاديمية قفزة للتكنولوجيا'
        description='مع قفزة، طوّر مهاراتك بأحدث التقنيات بخطوات ثابتة! برامجنا تغطي أهم الأدوات العالمية، من الأساسيات للمبتدئين إلى المهارات المتقدمة للمحترفين. دوراتنا مليانة تجارب تفاعلية، مشاريع عملية، ودعم شخصي من مدربين مختصين لتعيش تجربة تعلم مختلفة وفعالة'
      />

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
              {/* Program Items */}
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between h-full transition-transform duration-300 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                >
                  <div>
                    <div className="text-purpleRoyal font-bold text-2xl my-4">{program.title}</div>
                    <p className="mt-2 text-gray-600">
                      {program.points.map((point, idx) => (
                        <span key={idx}>
                          {point}
                          {idx < program.points.length - 1 ? <br /> : null}
                        </span>
                      ))}
                    </p>
                  </div>
                  <a href={program.link} className="text-blue-600 hover:underline mt-4 block">
                    &lt;&lt; المزيد من التفاصيل
                  </a>
                </motion.div>
              ))}
             
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default OurProgramsPage;
