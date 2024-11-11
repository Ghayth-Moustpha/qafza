// AdPage.tsx
import React from 'react';
import { motion } from "framer-motion";
import Header from '../components/Header';
import AdCard from '../components/AdCard'; // Import the AdCard component

const Adds = [
    {
        title: 'مسارات مخصصة لغير التقنيين',
        image: 'https://imge.com/path-to-your-image.jpg', // Make sure to use a valid image URL
        type: 'online',
        duration: "ساعتان ونصف",
        link: '/nontech-path'
    },
    // You can add more ads here
];

const AdPage: React.FC = () => {
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
                        <h1 className="text-3xl font-bold text-center"> برامج قفزة التعليمية </h1>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Program Items */}
                            {Adds.map((program, index) => (
                                <AdCard
                                    key={index}
                                    title={program.title}
                                    image={program.image}
                                    type={program.type}
                                    duration={program.duration}
                                    link={program.link}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </motion.div>
        </div>
    );
};

export default AdPage;
