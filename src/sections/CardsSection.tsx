import React, { useState } from 'react';
import Card from '../components/Card';
import { m } from 'framer-motion';
import eng_ind from '../assets/images/icons/eng_int.jpg' ;
import eng_mob from '../assets/images/icons/eng_mob.jpg' ;
import marketing from '../assets/images/icons/markiting_up.jpg' ;
import { motion } from "framer-motion";

const content = [
    {
      title: "تصميم وتطوير الويب",
      body: [
        "من المدونات الشخصية البسيطة إلى المتاجر الإلكترونية المعقدة، نقدم حلولاً متكاملة لتطوير المواقع الإلكترونية التي تعزز من رؤية علامتك التجارية على الإنترنت، وتزيد التحويلات لموقعك وتعزز المصداقية.",
        "تطوير سريع ومبسط: من الفكرة إلى الإطلاق في وقت قياسي.",
  
      ],
      image:eng_ind
    },
    {
      title: "تطبيقات خاصّة بالأعمال",
      body: [
        "عزز إنتاجيتك وكفاءتك مع حلولنا المخصصة التي تُصمم بدقة لتلبية احتياجات شركتك الخاصة. نقدم تطبيقات موبايل وويب تفاعلية، مع تركيز على توفير تجربة مستخدم متكاملة.",
        "واجهات مستخدم سهلة الاستخدام ووظائف سلسة: تصميمات مبتكرة تسهل على المستخدمين التفاعل مع تطبيقك.",
    
      ],
      image:eng_mob

    },
    {
      title: "التسويق وأتمتة الأعمال",
      body: [
        "في قِصّة تك، نقدم حلولًا متقدمة في التسويق وأتمتة العمليات، بما في ذلك استراتيجيات تسويقية متكاملة عبر واتساب والبريد الإلكتروني.",
        "تسويق فعال عبر واتساب والبريد الإلكتروني: حلول تسويقية تصل جمهورك المستهدف مباشرة.",
      
      ],
      image:marketing

    },
    {
      title: "(MVP) النموذج الأولي للعمل",
      body: [
        "نقدم حلولاً متطورة لبناء النماذج الأولية (MVP) باستخدام أدوات اللوكود، مما يقلل من وقت التطوير ويخفض التكاليف.",
        "تطوير سريع باستخدام أدوات اللوكود: بناء نماذج أولية (MVP) بسرعة فائقة.",

      ],
      image:eng_mob

    }
  ];
  const CardsSection: React.FC = () => {

  
    return (
      <div className="sticky  top-20 mx-auto h-auto px-4  " >

        <div className=" mb-20 relative   scroll-smooth">
          {content.map((item, index) => (
            <Card 
              key={index}
              title={item.title}
              body={item.body}
              index={index} // Pass the index to set z-index
              image={item.image}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default CardsSection;