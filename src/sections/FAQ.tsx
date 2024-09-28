import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface QA {
  question: string;
  answer: string;
}

const faqs: QA[] = [
    {
      question: "من هم قفزة تِك؟",
      answer:
        "قفزة تك هي شركة متخصصة في تقديم حلول تكنولوجية مبتكرة باستخدام أدوات اللوكود والنوكود، التي تمكّن الشركات من تطوير تطبيقات مخصصة بسرعة وكفاءة وبتكلفة أقل.",
    },
    {
      question: "ما الفرق بين اللوكود والنوكود؟",
      answer:
        "اللوكود يتطلب معرفة تقنية بسيطة ويستخدم واجهات مرئية لتبسيط البرمجة، بينما النوكود لا يتطلب أي معرفة برمجية ويعتمد على أدوات بصرية بالكامل لإنشاء التطبيقات.",
    },
    {
      question: "هل يمكن بقفزة تك تطوير حلول مخصصة لاحتياجاتي؟",
      answer:
        "نعم، نحن نتخصص في تطوير حلول مخصصة تناسب احتياجاتك الفريدة. فريقنا يعمل معك لفهم متطلباتك وتقديم حلول تلبي أهدافك.",
    },
    {
      question: "هل يمكنني الحصول على استشارة مخصصة قبل البدء بمشروع؟",
      answer:
        "نعم، نقدم جلسات استشارية مجانية لمساعدتك على تحديد أفضل الحلول التكنولوجية لمشروعك.",
    },
    {
      question: "هل تقدمون دعمًا فنيًا بعد إطلاق المشروع؟",
      answer:
        "نعم، نقدم دعمًا فنيًا مستمرًا بعد إطلاق المشروع لضمان أن كل شيء يعمل بسلاسة.",
    },
    {
      question: "إذا كان لدي فكرة تطبيق غريبة، هل ستعملون معي على تطويرها؟",
      answer:
        "نحن نحب الأفكار الغريبة! إذا كانت لديك فكرة مبتكرة وغير تقليدية، نحن هنا لدعمك ومساعدتك في تحويلها إلى تطبيق فعلي.",
    },
    {
      question: "هل تساعدني قفزة تك في بناء تطبيق لجذب العملاء؟",
      answer:
        "نعم، يمكننا مساعدتك في بناء تطبيقات تهدف إلى جذب العملاء وزيادة التفاعل معهم.",
    },
    {
      question: "هل يجب أن تكون عالم رياضيات لاستخدام خوارزميات الذكاء الاصطناعي؟",
      answer:
        "لا، ليس عليك أن تكون عالم رياضيات لاستخدام الذكاء الاصطناعي. توجد مكتبات وأدوات تبسط استخدام الخوارزميات، لكن معرفة المبادئ الأساسية قد تساعد في فهم أعمق للتقنيات المستخدمة.",
    },
    {
      question: "ما هي مكتبات الذكاء الاصطناعي التي يمكن استخدامها؟",
      answer:
        "هناك العديد من المكتبات مثل TensorFlow, PyTorch, Scikit-learn، والتي تساعدك على بناء نماذج الذكاء الاصطناعي بسهولة وفعالية.",
    },
    {
      question: "هل يمكنني تعلم تطوير الويب من الصفر؟",
      answer:
        "نعم، يمكن لأي شخص تعلم تطوير الويب من الصفر. هناك العديد من المصادر المجانية والمدفوعة التي تغطي HTML, CSS, JavaScript وغيرها من التقنيات.",
    },
    {
      question: "ما هي الأدوات المطلوبة لتعلم تطوير الويب؟",
      answer:
        "ستحتاج إلى متصفح، محرر نصوص (مثل VS Code) وبعض الأساسيات حول HTML, CSS, وJavaScript لبدء تطوير مواقع الويب.",
    },
    {
      question: "هل الذكاء الاصطناعي سيأخذ مكان المطورين؟",
      answer:
        "الذكاء الاصطناعي لن يحل محل المطورين، لكنه سيصبح أداة قوية تساعدهم على تحسين كفاءة العمل وإتمام المهام الروتينية بشكل أسرع.",
    },
    {
      question: "كيف يمكنني البدء في تعلم الذكاء الاصطناعي؟",
      answer:
        "يمكنك البدء بتعلم المفاهيم الأساسية مثل التعلم الآلي وتحليل البيانات. ثم يمكنك الانتقال إلى الأدوات مثل Python ومكتبات الذكاء الاصطناعي مثل PyTorch وTensorFlow.",
    },
    {
      question: "هل تقدمون تدريبات على البرمجة والذكاء الاصطناعي؟",
      answer:
        "نعم، نقدم تدريبات شاملة تغطي مختلف مجالات التكنولوجيا، بما في ذلك البرمجة والذكاء الاصطناعي، لمساعدتك على تطوير مهاراتك وتحقيق أهدافك.",
    },
    {
      question: "ما هي أطر العمل الأكثر استخدامًا لتطوير تطبيقات الويب؟",
      answer:
        "أطر العمل الأكثر شيوعًا تشمل React, Angular, وVue لتطوير واجهات المستخدم، بالإضافة إلى Node.js وDjango لتطوير الخوادم.",
    }
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
