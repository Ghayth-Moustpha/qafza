import { motion } from "framer-motion";
import image from "../assets/images/hero2.png" ; 
const HeroSection2 = () => {
  return (
    <section className="relative bg-sunsetOrange text-center text-white my-2 py-10 w-full">
      <div className="container  mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          قفزة تك
        </motion.h1>
        <motion.image
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-6"
          > 


        </motion.image>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-2xl mb-8 text-center"
        >
          
 انضم الى مجتمع تقني عربي يرافقك في رحلتك!   
 
       </motion.p>
        <motion.button
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="bg-white text-blue-600 py-2 m-4 text-xl p-6 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
        >
          <a href="https://t.me/JoinQafza"> انضم الآن   </a>
       </motion.button>
       
      </div>
    </section>
  );
};

export default HeroSection2;
