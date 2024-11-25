import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from 'lucide-react';

interface DropdownMenuProps {
  title: string;
  items: {
    title: string;
    links: { name: string; icon: LucideIcon }[];
  }[];
  isLastItem?: boolean;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, items, isLastItem = false }) => {
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        ease: "easeOut" 
      } 
    },
  };

  const positionClasses = isLastItem 
    ? "-translate-x-[calc(100%-80px)]"
    : "";

  const isProducts = title === "Products";
  const mainItems = isProducts ? items.slice(0, -1) : items;
  const moreSection = isProducts ? items[items.length - 1] : null;

  // Calculate the minimum width based on the title
  const getMinWidth = () => {
    if (isProducts) return 'min-w-[720px]';
    if (title === "Developers") return 'min-w-[560px]';
    return 'min-w-[560px]';
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={dropdownVariants}
      className={`absolute top-full left-0 text-text z-50 ${getMinWidth()} mt-3 ${positionClasses}`}
    >
      <div className="relative">
        {/* Arrow (Triangle) */}
        <div 
          className={`absolute -top-2.5 ${isLastItem ? 'right-10' : 'left-10'} w-0 h-0 
                     border-l-[10px] border-r-[10px] border-b-[10px] 
                     border-transparent border-b-text z-10`}
        />

        {/* Background arrow */}
        <div 
          className={`absolute -top-2.5 ${isLastItem ? 'right-10' : 'left-10'} w-0 h-0 
                     border-l-[10px] border-r-[10px] border-b-[10px] 
                     border-transparent border-b-gray-200 z-0 
                     translate-y-px`}
        />

        {/* Dropdown content */}
        <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-200">
          <div className={`${isProducts ? 'flex gap-4' : 'space-y-4'}`}>
            {/* Main sections */}
            <div className={`space-y-4 ${isProducts ? 'flex-1' : ''} ${isProducts && moreSection ? 'border-r border-gray-200 pr-4' : ''}`}>
              {mainItems.map((item, idx) => (
                <div 
                  key={idx} 
                  className={idx !== 0 ? "pt-4 border-t border-gray-200" : ""}
                >
                  <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                    {item.links.map((link, index) => {
                      const Icon = link.icon;
                      return (
                        <div
                          key={index}
                          className="group cursor-pointer"
                        >
                          <div className="flex items-center gap-2 p-1.5 rounded-md hover:bg-gray-50 transition-colors duration-200 w-max">
                            <div className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-md bg-gray-50 group-hover:bg-white group-hover:shadow-sm transition-all duration-200">
                              <Icon 
                                size={16}
                                className="text-gray-600 group-hover:text-purple-600 group-hover:scale-110 transition-all duration-200" 
                              />
                            </div>
                            <span className="text-gray-600 group-hover:text-purple-600 transition-colors duration-200 font-medium whitespace-nowrap">
                              {link.name}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* More section for Products */}
            {moreSection && (
              <div className="pl-4 min-w-[220px]">
                <h4 className="font-bold text-gray-800 mb-2">{moreSection.title}</h4>
                <div className="space-y-1">
                  {moreSection.links.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <div
                        key={index}
                        className="group cursor-pointer"
                      >
                        <div className="flex items-center gap-2 p-1.5 rounded-md hover:bg-gray-50 transition-colors duration-200">
                          <div className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-md bg-gray-50 group-hover:bg-white group-hover:shadow-sm transition-all duration-200">
                            <Icon 
                              size={16}
                              className="text-gray-600 group-hover:text-purple-600 group-hover:scale-110 transition-all duration-200" 
                            />
                          </div>
                          <span className="text-gray-600 group-hover:text-purple-600 transition-colors duration-200 font-medium">
                            {link.name}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DropdownMenu;
