"use client";

import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import Animated from "@components/ui/Animated";
import { staggerFadeInUp } from "@lib/motionVariants";

export default function Footer() {
  return (
    <Animated
      as="footer"
      variants={staggerFadeInUp.container}
      className="py-8 px-6 text-white animate-gradient"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <Animated variants={staggerFadeInUp.child} className="mb-4 md:mb-0">
          <p className="text-center md:text-left">
            © 2025 Donald AD Stooks. All rights reserved.
          </p>
        </Animated>

        <Animated
          variants={staggerFadeInUp.container}
          className="flex space-x-6"
        >
          <Animated
            as="a"
            variants={staggerFadeInUp.child}
            href="https://github.com/DonaldDCS"
            target="_blank"
            rel="noreferrer"
            className="hover-scale hover-accentSecondary transition-transform duration-300"
          >
            <SiGithub size={28} />
          </Animated>
          <Animated
            as="a"
            variants={staggerFadeInUp.child}
            href="https://www.linkedin.com/in/dadstooks/"
            target="_blank"
            rel="noreferrer"
            className="hover-scale hover-accentSecondary transition-transform duration-300"
          >
            <SiLinkedin size={28} />
          </Animated>
          <Animated
            as="a"
            variants={staggerFadeInUp.child}
            href="mailto:donald.stooks@gmail.com"
            className="hover-scale hover-accentSecondary transition-transform duration-300"
          >
            <Mail size={28} />
          </Animated>
        </Animated>
      </div>
    </Animated>
  );
}
