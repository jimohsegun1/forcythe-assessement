"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import splitString from "@/utils/splitString";
import splitWord from "@/utils/splitWord";
import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [h1Complete, setH1Complete] = useState(false);
  const [h1InView, setH1InView] = useState(false);
  const h1Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !h1InView) {
          setH1InView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (h1Ref.current) {
      observer.observe(h1Ref.current);
    }

    return () => {
      if (h1Ref.current) {
        observer.unobserve(h1Ref.current);
      }
    };
  }, [h1InView]);

  const charVariants = {
    hidden: { opacity: 0.02 },
    reveal: { opacity: 1 },
  };

  return (
    <section className="relative w-full h-auto bg-[#030516]">
      <div className="absolute inset-0 z-10 top-28">
        <Image
          src="/assets/mapbackground.svg"
          quality={70}
          fill
          alt="background-img"
          className="object-cover object-center"
        />
      </div>

      <div className="h-auto pt-28 md:pt-28 pb-12 md:pb-20 flex flex-col px-4 md:px-12 xl:px-24 items-center">
        <div className="bg-white bg-opacity-10 rounded-[33px] md:rounded-[46px] w-full">
          <div className="px-4 py-6 md:p-10 xl:p-12" ref={h1Ref}>
            <motion.h1
              initial="hidden"
              animate={h1InView ? "reveal" : "hidden"}
              transition={{ staggerChildren: 0.09 }}
              onAnimationComplete={() => setH1Complete(true)}
              className="text-[56px] md:text-[80px] z-50 mb-7 leading-[1] max-w-[900px]"
            >
              {splitString("We build").map((char, index) => (
                <motion.span
                  key={index}
                  transition={{ duration: 0.1 }}
                  // variants={charVariants}
                >
                  {char}
                </motion.span>
              ))}{" "}
              <span className="text-[#60a6e7]">
                {splitString("products").map((char, index) => (
                  <motion.span
                    key={index}
                    transition={{ duration: 0.1 }}
                    variants={charVariants}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>{" "}
              {splitString("that shape a better future").map((char, index) => (
                <motion.span
                  key={index}
                  transition={{ duration: 0.1 }}
                  variants={charVariants}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              initial="hidden"
              animate={h1InView && h1Complete ? "reveal" : "hidden"}
              transition={{ staggerChildren: 0.02 }}
              className="z-50 text-[#aea9b1] mb-8 md:text-lg max-w-3xl"
            >
              {splitString(
                "We’re the architects of digital excellence across industries. Were define business with cutting-edge digital strategies that invokes sector-wide transformation."
              ).map((char, index) => (
                <motion.span
                  key={index}
                  transition={{ duration: 0.5 }}
                  variants={charVariants}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>

            <div className="group relative z-30 inline-block">
              <div className="w-[144px] h-12 border border-dashed border-white rounded-full  group-hover:border-[#0066cc]"></div>
              <button className="absolute left-1 -top-1 lg:right-[90px] font-semibold text-black bg-white w-[144px] h-12 rounded-full group-hover:bg-[#154b81] group-hover:text-white transition ease-in-out flex items-center justify-center">
                Book a Call{" "}
                <Play className="w-4 h-4 ml-2 fill-black group-hover:fill-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col py-10 md:py-0 pb-2 md:-mt-4 px-4 md:px-12 lg:px-24 justify-end items-center">
        <motion.h2
          initial="hidden"
          animate={h1InView && h1Complete ? "reveal" : "hidden"}
          transition={{ staggerChildren: 0.3 }}
          className="text-[32px] lg:text-[42px] mx-auto leading-[1.3] text-center"
        >
          {splitWord("Success in").map((char, index) => (
            <motion.span
              key={index}
              transition={{ duration: 2 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}{" "}
          <span className="text-[#60a6e7]">
            {splitWord("Motion").map((char, index) => (
              <motion.span
                key={index}
                transition={{ duration: 2 }}
                variants={charVariants}
              >
                {char}
              </motion.span>
            ))}
          </span>
          {splitWord(" - Our clients’ journey").map((char, index) => (
            <motion.span
              key={index}
              transition={{ duration: 2 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.h2>
      </div>
    </section>
  );
};

export default Hero;
