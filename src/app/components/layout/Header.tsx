"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const menuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: { height: 0, opacity: 0, transition: { durection: 0.3 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <header className="bg-background shadow-md sticky top-0 z-50">
      <div className="items-center px-4 md:px-8 py-4 relative grid grid-cols-[min-content_1fr_min-content] justify-items-center sm:justify-items-start gap-8">
        
          <ThemeToggle />
          <Link href="/" className="text-xl font-heading font-bold">
            Donald Stooks
          </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-body">
          {links.map((link) => (
            <div key={link.path} className="relative">
              <Link
                href={link.path}
                className={`pb-1 transition-colors duration-300 ${
                  pathname === link.path
                    ? "text-accentSecondary"
                    : "hover:text-accentSecondary"
                }`}
              >
                {link.name}
              </Link>
              {pathname === link.path && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute left-0 bottom-0 h-[2px] w-full bg-accentSecondary"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 bg-accentSecondary rounded text-white w-10 h-10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden bg-background transition-colors duration-400"
          >
            <div className="flex flex-col px-8 py-4 space-y-4">
              {links.map((link) => (
                <motion.div key={link.path} variants={linkVariants}>
                  <Link
                    href={link.path}
                    className={`block pb-1 transition ${
                      pathname === link.path
                        ? "text-accentSecondary font-semibold"
                        : "hover:text-accentSecondary"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
