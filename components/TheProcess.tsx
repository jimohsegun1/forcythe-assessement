"use client";

import splitWord from "@/utils/splitWord";
import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";

interface TabContent {
  tabName: string;
  title: string;
  description: string;
  image: string;
}

const tabs: TabContent[] = [
  {
    tabName: "Idea",
    title: "Your vision is unique.",
    description:
      "Nurture Your Idea into a Blueprint for Success with our strategic insights and industry expertise. Your vision is unique, let’s us shape it.",
    image: "/assets/idea.svg",
  },
  {
    tabName: "Design",
    title: "Crafting the blueprint for success",
    description:
      "Design is more than aesthetics, it’s about creating user experiences that resonate and convert. Our design experts shape your vision into a stunning reality.",
    image: "/assets/design.svg",
  },
  {
    tabName: "Develop",
    title: "Turning blueprints into reality.",
    description:
      "We breathe life into designs, building robust platforms ready to disrupt markets. Harness the experience of our development team to bring your Concept to Life.",
    image: "/assets/develop.svg",
  },
  {
    tabName: "Launch",
    title: "Your launchpad to the market.",
    description:
      "Launching is just the beginning, we ensure your product makes a splash and keeps making waves, ensuring a continual customer acquisition.",
    image: "/assets/launch.svg",
  },
];

const TheProcess = () => {
  const [activeTab, setActiveTab] = useState(0);
  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };
  return (
    <section className="bg-[#030516] pb-28 px-4 md:px-12 xl:px-24">
      <div className="flex flex-col py-10 pb-2 md:py-0 justify-end">
        <motion.h2
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.3 }}
          className="text-[30px] md:text-[36px] lg:text-[40px] leading-[1.3] max-w-[775px]"
          viewport={{ once: true }}
        >
          {splitWord("From to").map((char, index) => (
            <motion.span
              key={index}
              transition={{ duration: 2 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}{" "}
          <span className="text-[#60a6e7]">
            {splitWord("Spark").map((char, index) => (
              <motion.span
                key={index}
                transition={{ duration: 2 }}
                variants={charVariants}
              >
                {char}
              </motion.span>
            ))}
          </span>{" "}
          {splitWord("to").map((char, index) => (
            <motion.span
              key={index}
              transition={{ duration: 2 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}{" "}
          <span className="text-[#60a6e7]">
            {splitWord("Spotlight:").map((char, index) => (
              <motion.span
                key={index}
                transition={{ duration: 2 }}
                variants={charVariants}
              >
                {char}
              </motion.span>
            ))}
          </span>{" "}
          {splitWord("we take you every step of the way to success.").map(
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
      </div>

      <div className="flex flex-col md:flex-row md:items-center w-full pt-8">
        <div className="flex flex-col md:w-[50%] md:pr-10">
          <div className="flex justify-between space-x-2 md:space-x-0 lg:space-x-2 border-2 border-[#b3d0f2] rounded-full p-3 mb-10 overflow-hidden">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`w-full transition-all px-2 py-3 rounded-full lg:text-lg ${
                  activeTab === index ? "bg-[#b3d0f2] text-black" : ""
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.tabName}
              </button>
            ))}
          </div>

          {/* Active Tab Title and Description */}
          <div className="flex flex-col justify-center p-4">
            <motion.h2
              key={`title-${activeTab}`}
              initial="hidden"
              whileInView="reveal"
              transition={{ staggerChildren: 0.18 }}
              className="text-2xl font-semibold text-[1.8rem] sm:text-[2rem] leading-8 mb-10"
              viewport={{ once: true }} 
            >
              {splitWord(tabs[activeTab].title).map((char, index) => (
                <motion.span
                  key={`title-char-${index}-${activeTab}`}
                  transition={{ duration: 1.5 }}
                  variants={charVariants}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h2>

            <motion.p
              key={`description-${activeTab}`} // Unique key based on active tab index
              initial="hidden"
              whileInView="reveal"
              transition={{ staggerChildren: 0.18 }}
              className="text-[#a5a5a5] mb-8 text-base md:text-lg leading-7"
              viewport={{ once: true }} 
            >
              {splitWord(tabs[activeTab].description).map((char, index) => (
                <motion.span
                  key={`description-char-${index}-${activeTab}`}
                  transition={{ duration: 1.5 }}
                  variants={charVariants}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
          </div>

          <div className="group relative z-30 w-fit ml-4">
            <div className="w-[144px] h-12 border border-dashed border-white rounded-full group-hover:border-[#0066cc]"></div>
            <button className="absolute left-1 -top-1 lg:right-[90px] font-semibold text-black bg-white w-[144px] h-12 rounded-full group-hover:bg-[#154b81] group-hover:text-white transition ease-in-out flex items-center justify-center">
              Book a Call{" "}
              <Play className="w-4 h-4 ml-2 group-hover:transition-none fill-black group-hover:fill-white" />
            </button>
          </div>
        </div>

        {/* Active Tab Image */}
        <div className="items-center p-4 w-full md:w-[50%]">
          <div className="p-4 relative w-full h-[400px]">
            <Image
              src={tabs[activeTab].image}
              alt={tabs[activeTab].title}
              fill
              className="w-full h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheProcess;
