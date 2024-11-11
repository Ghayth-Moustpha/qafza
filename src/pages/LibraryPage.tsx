import React from 'react';
import { motion } from "framer-motion";
import Header from '../components/Header';

// Define the Book interface
interface Book {
    title: string;
    description: string;
    year: number;
    link: string; 
}

// Sample books data
const books: Array<Book> = [
  {
    title: "تعلم البرمجة بلغة بايثون",
    description: "دليل شامل للمبتدئين لتعلم البرمجة بلغة بايثون.",
    year: 2021,
    link: "https://example.com/python-book"
  },
  {
    title: "برمجة تطبيقات الويب باستخدام جافا سكريبت",
    description: "كتاب يعرض كيفية بناء تطبيقات الويب الحديثة باستخدام JavaScript.",
    year: 2020,
    link: "https://example.com/javascript-book"
  },
  {
    title: "مقدمة في الذكاء الاصطناعي",
    description: "استكشاف الذكاء الاصطناعي وتطبيقاته المختلفة.",
    year: 2022,
    link: "https://example.com/ai-book"
  },
];

const LibraryPage: React.FC = () => {
    if (books.length === 0) return (<></>);

    return (
        <div className="bg-white">
            <Header
                color='orchidPurple'
                title=' مكتبة تقنية باللغة العربية '
                description='مكتبة قفزة هي مصدرك الشامل للمعرفة التقنية! تحتوي على موارد تعليمية مميزة، كتب، مقالات، وأدلة إرشادية تغطي مجالات متنوعة من البرمجة والتكنولوجيا. بنوفر لك كل ما تحتاجه لتطوير مهاراتك بشكل مستقل وبخطوات واضحة، سواء كنت مبتدئ أو محترف.'
            />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: -5 }}
                transition={{ duration: 1 }}
            >
                {/* Main Section */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-screen-xl mx-auto px-4">
                        <h1 className="text-3xl font-bold text-center"> كتب قفزة التعليمية </h1>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Book Items */}
                            {books.map((book, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between h-full transition-transform duration-300 hover:scale-105"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div>
                                        <div className="text-purpleRoyal font-bold text-2xl my-4">{book.title}</div>
                                        <p className="mt-2 text-gray-600">
                                            {book.description}
                                        </p>
                                    </div>
                                    <a href={book.link} className="text-blue-600 hover:underline mt-4 block">
                                        تحميل 
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

export default LibraryPage;
