import React from "react";
import { motion } from "framer-motion";
import trioLogo from "../assets/TriO_vector-file.svg";
import Hero3DElement from "./Hero3DElement";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-10">
      {/* 3D Background Element */}
      <div className="absolute inset-0 z-0">
        <Hero3DElement />
      </div>

      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full hero-pattern opacity-40 pointer-events-none [mask-image:linear-gradient(to_bottom,black_70%,transparent)]"></div>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/40 blur-[120px] rounded-full pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/40 blur-[120px] rounded-full pointer-events-none translate-y-1/2"
      />

      <div className="max-w-6xl mx-auto space-y-12 z-10 flex flex-col items-center pointer-events-none">
        {/* Large Brand Logo - Central Focus */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4 pointer-events-auto"
        >
          <img src={trioLogo} alt="Trio Logo" className="h-24 md:h-40" />
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative group cursor-default inline-block py-4 pointer-events-auto"
          >
            <h3 className="text-3xl md:text-6xl font-light tracking-[0.2em] text-grey-400 uppercase transition-all duration-500 group-hover:text-grey-900 group-hover:tracking-[0.25em] relative">
              Gateway to <span className="font-bold italic">Web3</span>
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-blue-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
            </h3>
            {/* Animated Bottom Line */}
            <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-purple-600 to-blue-400 mx-auto transition-all duration-700 ease-out mt-2"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="max-w-2xl mx-auto text-grey-500 text-xl md:text-2xl font-medium leading-relaxed pointer-events-auto"
          >
            Transforming business logic into blockchain reality.{" "}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 pt-10 pointer-events-auto"
        >
          <a 
            href="#intro"
            className="bg-grey-900 text-white font-bold py-5 px-14 rounded-full text-lg shadow-2xl hover:bg-black transition-all hover:-translate-y-1 active:scale-95 text-center"
          >
            Get Started
          </a>
          <a 
            href="#solutions"
            className="bg-white text-grey-900 border-2 border-grey-100 font-bold py-5 px-14 rounded-full text-lg shadow-xl hover:bg-grey-50 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
          >
            Our Products
            <span className="material-symbols-outlined text-sm">
              arrow_downward
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
