"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
    <header className="bg-primary shadow-md">
      <div className="flex justify-between items-center px-8 py-4 relative">
        <Link href="/" className="text-2xl font-bold">
          Donald ADS
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 relative">
          {links.map((link) => (
            <div key={link.path} className="relative">
              <Link
                href={link.path}
                className={`pb-1 transition ${
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
          className="md:hidden p-2 bg-accentSecondary rounded"
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
            className="overflow-hidden bg-primary md:hidden"
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
