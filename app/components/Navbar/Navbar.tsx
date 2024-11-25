"use client";
import React, { useState, useEffect } from "react";
import DropdownMenu from "./DropdownMenu";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { productItems, solutionItems, developerItems, resourceItems } from "./mockData";
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuData = {
    Products: productItems,
    Solutions: solutionItems,
    Developers: developerItems,
    Resources: resourceItems
  };

  const handleMouseEnter = (menu: string) => !isMobile && setActiveDropdown(menu);
  const handleMouseLeave = () => !isMobile && setActiveDropdown(null);

  const mobileMenuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0 }
  };

  return (
    <nav className="relative w-full bg-white px-4 py-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo and Navigation Items Container */}
          <div className="flex items-center gap-8">
            <h1 className="text-2xl text-text font-bold">Yawa</h1>
             {/* Logo */}
            {/* <Link href="/"> */}
            {/*     <Image src="/logo.jpg" alt="Logo" width={90} height={40} /> */}
            {/* </Link> */}

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              {Object.entries(menuData).map(([key, items]) => (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <motion.button
                    className="text-lg text-text font-medium"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {key}
                  </motion.button>
                  <AnimatePresence>
                    {activeDropdown === key && (
                      <DropdownMenu title={key} items={items} />
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Sign In and Contact Sales Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            <motion.button
              className="text-lg text-text"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Sign in
            </motion.button>
            <motion.button
              className="bg-background text-text-700 px-4 py-2 rounded-md font-medium"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Contact Sales
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-text"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="fixed top-0 right-0 bottom-0 w-full bg-white text-text p-6 z-50 overflow-y-auto lg:hidden"
              style={{ maxWidth: "400px" }}
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-text">Menu</h2>
                <button
                  className="text-gray-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="space-y-6">
                {Object.entries(menuData).map(([key, sections]) => (
                  <div key={key} className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-bold mb-4 text-text">{key}</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {sections.map((section, idx) => (
                        <div key={idx}>
                          <h4 className="font-medium mb-2">{section.title}</h4>
                          <ul className="space-y-2">
                            {section.links.map((link, linkIdx) => {
                              const Icon = link.icon;
                              return (
                                <li
                                  key={linkIdx}
                                  className="flex items-center gap-2 text-gray-600 hover:text-purple-600 cursor-pointer transition-colors"
                                >
                                  <Icon size={18} />
                                  <span>{link.name}</span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="flex flex-col gap-4 pt-4">
                  <button className="text-text font-medium hover:text-purple-600">Sign in</button>
                  <button className="bg-text text-white px-4 py-2 rounded-md font-medium hover:bg-background hover:text-text">
                    Contact Sales
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
