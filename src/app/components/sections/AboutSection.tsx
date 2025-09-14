"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { staggerFadeInUp } from "@lib/motionVariants";
import Animated from "@components/ui/Animated";

interface AboutSectionProps {
  heading?: string;
  text?: string;
  imageSrc?: string;
}

export default function AboutSection({
  heading = "About Me",
  text = "I'm Donald Stooks, a front-end developer in the making who is passionate about creating beautiful, modular, and functional web applications. I love combining design and technology to build experiences that users enjoy. My goal is to develop solutions that are both scalable and maintainable.",
  imageSrc,
}: AboutSectionProps) {
  return (
    <section className="py-16 px-8 bg-background text-foreground max-w-6xl mx-auto">
      <Animated
        variants={staggerFadeInUp.container}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        <Animated variants={staggerFadeInUp.child} className="flex-1 space-y-4">
          <h2 className="text-4xl font-bold mb-4">{heading}</h2>
          <p className="leading-relaxed text-lg mb-6">{text}</p>

          <Animated className="flex space-x-6" variants={staggerFadeInUp.child}>
            <a
              href="https://github.com/donalddcs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-scale hover-primary transition-transform duration-300"
            >
              <SiGithub size={28} />
            </a>
            <a
              href="https://linkedin.com/in/dadstooks"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-scale hover-primary transition-transform duration-300"
            >
              <SiLinkedin size={28} />
            </a>
            <a
              href="mailto:donald.stooks@gmail.com"
              className="hover-scale hover-primary transition-transform duration-300"
            >
              <Mail size={28} />
            </a>
          </Animated>
        </Animated>

        <Animated
          className="flex justify-center md:justify-end"
          variants={staggerFadeInUp.child}
        >
          <Image
            src="/images/DS_CV.jpg"
            alt="About me image"
            width={300}
            height={300}
            className="rounded-full border-4 border-primary shadow-lg hover:scale-110 transition-transform duration-300"
          />
        </Animated>
      </Animated>
    </section>
  );
}
