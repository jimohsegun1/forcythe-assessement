"use client";

import splitWord from "@/utils/splitWord";
import Image from "next/image";
import { motion } from "motion/react";
import AnimatedCounter from "./Counter";

const Values = () => {
  const values = [
    {
      title: "Experience",
      description:
        "Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth.",
    },
    {
      title: "Quick Support",
      description:
        "We are your reliable partner, always there when you need us, ensuring smooth operations at every stage of your growth.",
    },
    {
      title: "Cost Savings",
      description:
        "Maximising impact, minimising costs efficiency is key. We provide cost-effective solutions without compromising on quality.",
    },
  ];

  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };
  return (
    <section className="bg-gradient-to-b from-[#030516] via-[#0c2645] to-[#0c2645]">
      <motion.h2
        initial="hidden"
        whileInView="reveal"
        transition={{ staggerChildren: 0.3 }}
        className="text-[30px] md:text-[36px] lg:text-[42px] leading-[1.3] text-center text-[#b3d0f2] px-4 md:px-12 lg:px-24"
        viewport={{ once: true }}
      >
        {splitWord("Your best call for B2B/B2C product innovation").map(
          (char, index) => (
            <motion.span
              key={index}
              transition={{ duration: 2 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          )
        )}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 pb-48 gap-8 mt-10 px-4 md:px-12 xl:px-24">
        {values.map((value, index) => (
          <div
            key={index}
            className="w-full bg-[#030516] rounded-2xl p-8 sm:p-10"
          >
            <div className="bg-[#60A6E7] bg-opacity-60 rounded-md w-fit p-2 mb-5">
              <Image
                src="/assets/layers.svg"
                alt="icon"
                width={30}
                height={30}
              />
            </div>

            <div>
              <h3 className="text-2xl font-medium mb-5">{value.title}</h3>
              <motion.p
                initial="hidden"
                whileInView="reveal"
                transition={{ staggerChildren: 0.18 }}
                className="md:text-lg text-[#a5a5a5]"
                viewport={{ once: true }}
              >
                {splitWord(value.description).map((char, index) => (
                  <motion.span
                    key={index}
                    transition={{ duration: 1.5 }}
                    variants={charVariants}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full bg-gradient-to-t from-[#030516] via-[#061527] to-[#0c2645] flex md:justify-center md:items-center overflow-hidden">
        <div className="relative w-full h-[300px] md:w-[600px] md:h-[400px] lg:w-[830px] lg:h-[460px] px-4 md:px-12 xl:px-24">
          <div className="absolute bottom-0 left-0 w-full h-full rounded-t-full bg-gradient-to-b from-white/10 via-transparent to-[#030516] border-t-2 border-blue-200">
            <div className="h-full place-content-end md:h-auto md:absolute bottom-2 right-8 md:right-6 lg:right-36">
              <motion.h2
                initial="hidden"
                whileInView="reveal"
                transition={{ staggerChildren: 0.3 }}
                className="font-medium text-xl md:text-2xl lg:text-3xl text-center mb-10 lg:mb-16 max-w-[304px] md:max-w-md mx-auto"
                viewport={{ once: true }}
              >
                {splitWord("We build solutions that help").map(
                  (char, index) => (
                    <motion.span
                      key={index}
                      transition={{ duration: 2 }}
                      variants={charVariants}
                    >
                      {char}
                    </motion.span>
                  )
                )}{" "}
                <span className="text-[#60a6e7]">
                  {splitWord("businesses").map((char, index) => (
                    <motion.span
                      key={index}
                      transition={{ duration: 2 }}
                      variants={charVariants}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>{" "}
                {splitWord("of all sizes to").map((char, index) => (
                  <motion.span
                    key={index}
                    transition={{ duration: 2 }}
                    variants={charVariants}
                  >
                    {char}
                  </motion.span>
                ))}{" "}
                <span className="text-[#60a6e7]">
                  {splitWord("scale").map((char, index) => (
                    <motion.span
                      key={index}
                      transition={{ duration: 2 }}
                      variants={charVariants}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              </motion.h2>

              <div className="flex justify-center items-center space-x-4 md:space-x-9">
                <div className="flex flex-col justify-center md:-space-y-3">
                  <h3 className="text-[#60a6e7] text-[1.5rem] sm:text-[2rem] md:text-[3rem] font-medium">
                    <AnimatedCounter from={0} to={50} />+
                  </h3>
                  <p className="text-sm md:text-lg">Clients</p>
                </div>
                <div className="flex flex-col justify-center md:-space-y-3">
                  <h3 className="text-[#60a6e7] text-[1.5rem] sm:text-[2rem] md:text-[3rem] font-medium">
                    <AnimatedCounter from={0} to={120} />+
                  </h3>
                  <p className="text-sm md:text-lg">Projects</p>
                </div>
                <div className="flex flex-col justify-center md:-space-y-3">
                  <h3 className="text-[#60a6e7] text-[1.5rem] sm:text-[2rem] md:text-[3rem] font-medium">
                    <AnimatedCounter from={0} to={10} />+
                  </h3>
                  <p className="text-sm md:text-lg text-nowrap">Team Leads</p>
                </div>
                <div className="flex flex-col justify-center md:-space-y-3">
                  <h3 className="text-[#60a6e7] text-[1.5rem] sm:text-[2rem] md:text-[3rem] font-medium">
                    <AnimatedCounter from={0} to={10} />+
                  </h3>
                  <p className="text-sm md:text-lg text-nowrap">
                    Glorious Years
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
