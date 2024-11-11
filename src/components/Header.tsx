import React from "react";
import { motion } from "framer-motion";

interface props {
    color:string  ; 
    title:string  ; 
    description: string ; 
}

const  Header: React.FC<props> =  ({color, title, description  } )=>
{
    return (
        <section className={`relative text-center bg-${color} text-white px-5  py-20 w-full`}>
      <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl mb-4 font-bold m-4">
{
title }          </h1>
          <p className="text-lg mt-10">
            {description}
          </p>
        </motion.div>
      </section>
    )
}
export default Header; 
