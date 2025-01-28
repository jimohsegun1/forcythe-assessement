"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex justify-between space-x-4 items-center px-4 md:px-12 xl:px-24 h-[105px] backdrop-blur-md fixed z-50 top-0 left-0 right-0 mx-auto">
      <Link href="/" className="md:hidden">
        <Image
          src="/assets/forcythelogo.svg"
          alt="logo"
          width={110}
          height={110}
        />
      </Link>

      <div className="hidden md:flex md:space-x-8 lg:space-x-16 items-center">
        <Link href="/">
          <Image
            src="/assets/forcythelogo.svg"
            alt="logo"
            width={140}
            height={140}
          />
        </Link>
        <ul className="flex">
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/services">
            <li>Services</li>
          </Link>
          <Link href="/services#portfolio">
            <li>Portfolio</li>
          </Link>
          <Link href="/studio">
            <li>Studio</li>
          </Link>
          <Link href="/foundation">
            <li>Foundation</li>
          </Link>
        </ul>
      </div>

      <div className="hidden md:inline-block group relative z-50">
        <div className="w-[132px] h-12 border border-dashed border-white rounded-full  group-hover:border-[#0066cc]"></div>
        <button className="absolute left-1 -top-1 lg:right-[90px] font-semibold text-black bg-white w-[132px] h-12 rounded-full group-hover:bg-[#154b81] group-hover:text-white transition ease-in-out delay-150 flex items-center justify-center">
          Book a Call
        </button>
      </div>

      <div className="md:hidden relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white bg-opacity-10 rounded-md p-3 cursor-pointer"
        >
          <Image src="/assets/menu.svg" alt="menu" width={20} height={20} />
        </button>

        {isOpen && (
          <ul className="flex flex-col space-y-2 fixed z-50 top-28 right-5 py-8 px-5 bg-gradient-to-b from-[#0c2645] via-[#000000] to-[#000000] w-60 rounded-[33px]">
            <Link href="/about">
              <li>About</li>
            </Link>
            <Link href="/services">
              <li>Services</li>
            </Link>
            <Link href="/services#portfolio">
              <li>Portfolio</li>
            </Link>
            <Link href="/studio">
              <li>Studio</li>
            </Link>
            <Link href="/foundation">
              <li>Foundation</li>
            </Link>
            <Link href="/careers">
              <li>Careers</li>
            </Link>
            <Link href="/blog">
              <li>Blog</li>
            </Link>
          </ul>
        )}
      </div>

    </nav>
  );
};

export default Navbar;
