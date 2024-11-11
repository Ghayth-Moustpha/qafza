// AdCard.tsx
import React from 'react';

interface AdCardProps {
    title: string;
    image: string;
    type: string;
    duration: string;
    link: string;
}

const AdCard: React.FC<AdCardProps> = ({ title, image, type, duration, link }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between h-full transition-transform duration-300 hover:scale-105">
            <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
            <div>
                <div className="text-purpleRoyal font-bold text-2xl my-2">{title}</div>
                <p className="mt-2 text-gray-600"><strong>نوع الدورة:</strong> {type}</p>
                <p className="mt-2 text-gray-600"><strong>المدة:</strong> {duration}</p>
            </div>
            <a href={link} className="text-blue-600 hover:underline mt-4 block">
                &lt;&lt; المزيد من التفاصيل
            </a>
        </div>
    );
};

export default AdCard;
