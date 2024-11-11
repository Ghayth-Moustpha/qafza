import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface QA {
  question: string;
  answer: string;
}
const faqs: QA[] = [
 
 
  {
    question: "ما هي البرامج التدريبية التي تقدمها قفزة؟",
    answer:
      "نقدم مجموعة متنوعة من البرامج التدريبية في مجالات البرمجة، الذكاء الاصطناعي، تحليل البيانات، إدارة المشاريع، وغيرها من المهارات التقنية.",
  },
  {
    question: "هل التدريبات مناسبة للمبتدئين أم المحترفين فقط؟",
    answer:
      "تدريباتنا موجهة لجميع المستويات، من المبتدئين إلى المحترفين، مع محتوى تدريبي متدرج يناسب احتياجات كل مستوى.",
  },
  {
    question: "هل البرامج تتضمن تطبيق عملي؟",
    answer:
      "نعم، جميع برامجنا التدريبية تركز على التطبيق العملي من خلال مشاريع حقيقية وتجارب تفاعلية لضمان تعلم فعال وشامل.",
  },
  {
    question: "هل تقدمون تدريبات عن بعد؟",
    answer:
      "نعم، نقدم تدريبات عن بعد تتيح لك التعلم من أي مكان وفي أي وقت يناسبك، مع دعم مباشر من المدربين.",
  },
  {
    question: "في أي دول تقدمون تدريباتكم؟",
    answer:
      "نقدم تدريباتنا في عدة دول، وتشمل برامجنا التدريبية دورات عبر الإنترنت متاحة للجميع، بغض النظر عن الموقع الجغرافي.",
  },
  {
    question: "هل أستطيع الحصول على استشارة قبل التسجيل؟",
    answer:
      "بالطبع! نقدم استشارات مجانية لمساعدتك في اختيار البرنامج التدريبي المناسب لاحتياجاتك التعليمية والمهنية.",
  },
  {
    question: "هل أستطيع الوصول إلى المواد بعد انتهاء الدورة؟",
    answer:
      "نعم، يمكنك الوصول إلى جميع المواد التعليمية والموارد بعد انتهاء التدريب لضمان استمرار عملية التعلم.",
  },
  {
    question: "هل يوجد دعم من المدربين خلال فترة التدريب؟",
    answer:
      "نعم، نوفر دعمًا مباشرًا من المدربين المتخصصين خلال فترة التدريب لضمان تجربة تعلم شخصية ومثمرة.",
  },
];

  

const FAQ = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <section className="relative bg-gradient-to-r from-purpleRoyal to-sunsetOrange text-white p-20 w-full">
      <h2 className="text-4xl font-bold mb-8 text-center text-white">الأسئلة الشائعة</h2>
      <p className="text-center mb-12 text-white">
        هنا تجد إجابات على أكثر الأسئلة شيوعًا حول خدماتنا وكيفية الاستفادة من حلولنا المبتكرة. إذا كان لديك أي استفسار آخر لا تتردد في التواصل معنا – نحن هنا لمساعدتك!
      </p>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className={`bg-white border-gray border-gray-200 rounded-lg p-4 shadow-2xl border overflow-hidden`}
            onClick={() => toggleAnswer(index)}
            whileHover={{ scale: 1.05 }} // Scale the question on hover
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <motion.div
              className="flex justify-between items-center px-6 py-4 cursor-pointer"
              whileHover={{ scale: 1.02 }} // Slightly scale on hover for the question
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
              {selected === index ? (
                <button
                  className="text-red-500 hover:text-red-700 transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleAnswer(index);
                  }}
                >
                  ✕
                </button>
              ) : (
                <span className="text-gray-500 text-xl">+</span>
              )}
            </motion.div>

            {/* Framer Motion Animated Answer Section */}
            <motion.div
              initial={{ height: 0, opacity: 0 }} // Start hidden
              animate={selected === index ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }} // Animate when selected
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <motion.div
                className="px-6 py-4 bg-gray-50"
                initial={{ opacity: 0 }}
                animate={selected === index ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
