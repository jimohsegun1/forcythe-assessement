"use client";

import splitWord from "@/utils/splitWord";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const Testimonial = () => {
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab % TABS_DATA.length) + 1);
    }, 12000);

    return () => clearInterval(interval);
  }, [activeTab]);

  const companyCommonStyles =
    "min-h-[64px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border border-[#06438C] cursor-pointer relative";

  const TABS_DATA = [
    {
      id: 1,
      title: "Starks Associate",
      testimonial:
        "Partnering with Forcythe was like finding a hidden gem. Their genuine interest in our success was palpable, and the continuous support post-launch has been a testament to their commitment. They’ve become more than a service provider; they’re a trusted ally.",
      author: "John, Management",
      image: "/assets/john.webp",
      position: "",
    },
    {
      id: 2,
      title: "ExecutivePros",
      testimonial:
        "The team understood the assignment and delivered very well. One of the things that stood them out was how they took our concepts and turned it into visually appealing designs that caught the eyes of our clients and made increased web engagements. Kudos!",
      author: "Testimony, Co-founder",
      image: "/assets/testimony.webp",
      position: "lg:left-80",
    },
    {
      id: 3,
      title: "Stac AI",
      testimonial:
        "Forcythe is seriously amazing when it comes to coming up with new ideas. They took our rough ideas and turned them into something incredible online. Their team’s commitment to our vision was evident every step of the way.",
      author: "Edwin, Former CTO",
      image: "/assets/edwin.webp",
      position: "lg:right-64",
    },
    {
      id: 4,
      title: "Iwaria",
      testimonial:
        "The moment we engaged Forcythe, it was clear they were in a league of their own. Their strategic approach to our project not only enhanced our online platform but also enriched our brand’s story, captivating our audience like never before.",
      author: "Iwaria, Founder",
      image: "/assets/iwaria-ceo.webp",
      position: "lg:right-80",
    },
    {
      id: 5,
      title: "Beaupreneur",
      testimonial:
        "I’m beyond impressed with the dedication Forcythe showed. They didn’t just deliver—they educated us, involving us in the creative process. The result? A website that truly feels like ours and speaks directly to our customers’ hearts.",
      author: "Christiana, Founder",
      image: "/assets/chris.webp",
      position: "lg:right-24",
    },
  ];

  const TAB_ITEMS = [
    {
      id: 1,
      src: "/assets/starks.svg",
      alt: "starks",
      width: 20,
      height: 20,
      additionalStyles: "rounded-l-full border-r-0",
      label: "Starks",
      hasLabel: true, // Indicates if the item includes a label
    },
    {
      id: 2,
      src: "/assets/ExecutivePros.svg",
      alt: "executive_pros",
      width: 120,
      height: 120,
      additionalStyles: "border-x-0",
      hasLabel: false,
    },
    {
      id: 3,
      src: "/assets/stacai.svg",
      alt: "stacai",
      width: 90,
      height: 90,
      additionalStyles: "border-x-0",
      hasLabel: false,
    },
    {
      id: 4,
      src: "/assets/iwaria.svg",
      alt: "iwaria",
      width: 80,
      height: 80,
      additionalStyles: "border-x-0",
      hasLabel: false,
    },
    {
      id: 5,
      src: "/assets/Beaupreneur.svg",
      alt: "beaupreneur",
      width: 140,
      height: 140,
      additionalStyles: "rounded-r-full border-l-0",
      hasLabel: false,
    },
  ];

  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  return (
    <section className="bg-[#030516] pb-20 md:pb-80">
      <div className="flex flex-col py-10 md:py-0 pb-2 md:-mt-4 px-4 md:px-12 lg:px-24 justify-end items-center">
        <motion.h2
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.3 }}
          className="text-[32px] md:text-[36px] lg:text-[42px] mx-auto leading-[1.3] text-center max-w-4xl"
          viewport={{ once: true }}
        >
          {splitWord("Discover the").map((char, index) => (
            <motion.span
              key={index}
              transition={{ duration: 2 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}{" "}
          <span className="text-[#60a6e7]">
            {splitWord("transformative stories").map((char, index) => (
              <motion.span
                key={index}
                transition={{ duration: 2 }}
                variants={charVariants}
              >
                {char}
              </motion.span>
            ))}
          </span>{" "}
          {splitWord("of startups that scaled new heights with us").map(
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

      <div className="w-full overflow-x-scroll no-scrollbar px-4 md:px-12 xl:px-24">
        <div className="grid grid-cols-5 w-full mx-auto mt-10 min-w-[750px]">
          {TAB_ITEMS.map(
            ({
              id,
              src,
              alt,
              width,
              height,
              additionalStyles,
              label,
              hasLabel,
            }) => (
              <div
                key={id}
                onClick={() => setActiveTab(id)}
                className={`${additionalStyles} ${companyCommonStyles} ${
                  activeTab === id ? "bg-[#0c2645]" : ""
                }`}
              >
                <Image src={src} alt={alt} width={width} height={height} />
                {hasLabel && <span className="ml-2">{label}</span>}
              </div>
            )
          )}
        </div>
      </div>

      <div className="w-full px-4 md:px-12 lg:px-24 relative mt-5 md:pb-60">
        {TABS_DATA.map((tab) => {
          if (activeTab === tab.id) {
            return (
              <motion.div
                key={activeTab}
                className={`bg-[#0c2645] md:absolute ${tab.position} w-full md:w-[70%] lg:w-[40%] flex flex-col sm:flex-row p-5 sm:p-7 rounded-[28px]`}
              >
                <motion.div key={activeTab} className="sm:basis-[58%] pr-3">
                  <p className="font-semibold mb-4">{tab.title}</p>
                  <motion.p
                    key={activeTab}
                    initial="hidden"
                    whileInView="reveal"
                    transition={{ staggerChildren: 0.08 }}
                  >
                    {splitWord(tab.testimonial).map((char, index) => (
                      <motion.span
                        key={index}
                        transition={{ duration: 2 }}
                        variants={charVariants}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.p>
                  <motion.p
                    initial="hidden"
                    transition={{ staggerChildren: 0.02 }}
                    whileInView="reveal"
                    className="font-semibold mt-4"
                  >
                    {splitWord(tab.author).map((char, index) => (
                      <motion.span
                        key={index}
                        transition={{ duration: 2 }}
                        variants={charVariants}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.p>
                </motion.div>
                <div className="sm:basis-[42%] relative w-full h-[400px] mt-3 md:mt-0 md:ml-3">
                  <Image
                    src={tab.image}
                    alt={tab.title.toLowerCase()}
                    fill
                    className="object-cover object-center rounded-xl"
                  />
                </div>
              </motion.div>
            );
          }
          return null;
        })}
      </div>
    </section>
  );
};

export default Testimonial;
