"use client";

import { linkMotion, staggerFadeInUp } from "@lib/motionVariants";
import Animated from "@components/ui/Animated";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient animate-gradient">
      <Animated
        variants={staggerFadeInUp.container}
        className="text-center px-4"
      >
        <Animated
          as="h1"
          variants={staggerFadeInUp.child}
          className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white"
        >
          Hei! I&apos;m Donald Stooks
        </Animated>

        <Animated
          as="p"
          variants={staggerFadeInUp.child}
          className="text-xl md:text-2xl font-body text-white/90 mb-8"
        >
          IT Specialist & Front-End Developer in Progress
        </Animated>
        <Animated
          variants={staggerFadeInUp.child}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Animated
            as="a"
            href="#projectSection"
            {...linkMotion}
            className="px-4 py-2 font-body border-2 border-accentSecondary bg-accentSecondary text-white shadow-lg rounded-md scroll-smooth"
          >
            View Projects
          </Animated>
          <Animated
            as="a"
            href="/contact"
            {...linkMotion}
            className="px-4 py-2 font-body border-2 border-white text-white shadow-lg rounded-md"
          >
            Contact Me
          </Animated>
        </Animated>
      </Animated>
    </section>
  );
}
