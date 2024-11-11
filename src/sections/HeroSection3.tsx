// src/components/HeroSection3.tsx
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection3: React.FC = () => {
  const features = [
    {
      title: "نهج عربي مبتكر",
      content: "في قفزة، نأخذ على عاتقنا نقل أحدث التقنيات والعلوم الحديثة للشباب العربي بلغتهم الأم. نؤمن أن التعلم بلغتنا يعزز الفهم العميق ويحقق نتائج أفضل، مما يمكن الجيل الصاعد من إتقان التقنيات المتقدمة بطرق أكثر فعالية."
    },
    {
      title: "دمج القطاعات",
      content: "نعمل في قفزة على بناء جسور التعاون بين القطاعات المختلفة، لخلق بيئة تربط بين الشركات، المؤسسات التعليمية، والشباب العربي."
    },
    {
      title: "تمكين الشباب",
      content: "نؤمن بأن الشباب العربي هو ركيزة المستقبل، ولذلك نوفر لهم ليس فقط المهارات التقنية، بل أيضًا الدعم والمجتمع الذي يحتاجونه لتحقيق قفزتهم نحو التميز في مجالاتهم."
    }
  ];

  return (
    <section className="bg-sunsetOrange py-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          className="text-white text-4xl md:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          لماذا تختار قفزة؟
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-gray-900 text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-700 text-base leading-relaxed">{feature.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection3;
