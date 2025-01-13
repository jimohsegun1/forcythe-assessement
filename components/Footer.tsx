"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [clicked, setClicked] = useState(false);

  const icons = [
    {
      icon: "/assets/facebook.svg",
      link: "/",
    },
    {
      icon: "/assets/instagram.svg",
      link: "/",
    },
    {
      icon: "/assets/x.svg",
      link: "/",
    },
    {
      icon: "/assets/linkedin.svg",
      link: "/",
    },
    {
      icon: "/assets/youtube.svg",
      link: "/",
    },
    {
      icon: "/assets/Icon.svg",
      link: "/",
    },
  ];

  const links = [
    "About",
    "Services",
    "Portfolio",
    "Studio",
    "Foundation",
    "Careers",
    "Blog",
  ];
  return (
    <div className="bg-[#071626] px-4 md:px-12 xl:px-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:basis-[50%]">
          <div className="relative w-full max-w-lg">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full rounded-full pl-4 pr-20 py-3 focus:outline-none col-span-3 bg-transparent outline-none border border-white rounded-s-full px-4 text-sm"
            />
            <button
              type="button"
              className="absolute right-0 top-0 bottom-0 bg-white text-black rounded-r-full px-4 hover:bg-[#0066cc] border border-white hover:text-white transition text-sm font-semibold"
            >
              Subscribe
            </button>
          </div>

          <div
            onClick={() => setClicked(!clicked)}
            className="flex items-center mt-4 hover:cursor-pointer w-fit"
          >
            <div className="min-w-5 min-h-5 rounded-full border-2 border-white relative mr-3">
              {clicked && (
                <div className="min-w-2 min-h-2 rounded-full bg-white absolute right-1 bottom-1"></div>
              )}
            </div>
            <p className="text-sm lg:max-w-xs">
              I agree to receive other notifications from Forcythe
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full pt-10 lg:pt-0">
          <div className="lg:pl-14 lg:basis-[65%]">
            <Link href="/">
              <Image
                src="/assets/forcythelogo.svg"
                alt="logo"
                width={140}
                height={140}
                className="mb-5 md:mb-8"
              />
            </Link>

            <p className="text-[#a5a5a5] mb-5 md:mb-8 max-w-md lg:max-w-[400px]">
              We are the growth company for businesses looking to scale. We are
              dedicated to transforming businesses with bespoke digital
              solutions that drive growth.
            </p>

            <div className="flex space-x-2">
              {icons.map((icon, index) => (
                <Link key={index} href="/">
                  <div className="border border-[#60a6e7] w-9 h-9 rounded-full flex items-center justify-center">
                    <Image src={icon.icon} alt="icon" width={20} height={20} />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="md:pl-14 pt-8 md:pt-0">
            <h3 className="font-bold text-2xl mb-8">Company</h3>

            <div className="flex flex-col space-y-2 pb-10 text-[#b3d0f2] font-medium">
              {links.map((link, index) => (
                <Link key={index} href="/">
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-t-[#60a6e7] text-[#b3d0f2] text-sm text-center md:text-left">
        <p className="pt-4 pb-10">Copyright © 2024 Forcythe. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
