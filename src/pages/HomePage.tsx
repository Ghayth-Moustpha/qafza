// src/pages/HomePage.tsx
import React from 'react';
import HeroSection from '../sections/HeroSection';
import CardsSection from '../sections/CardsSection';
import ShuffleHero from '../sections/ShuffleHero';
import PromotionalSection from '../sections/PromotionalSection';
import Inverst from '../sections/Inverst';
import HeroSection2 from '../sections/HeroSection2';

const HomePage: React.FC = () => {
  return (
    <div className='w-full'>
      <HeroSection/>
      <HeroSection2/>

      <div className='relative'>
      <CardsSection/>
      </div>
      <ShuffleHero/>
      <Inverst/>

      <PromotionalSection/>

    </div>
  );
};

export default HomePage;
