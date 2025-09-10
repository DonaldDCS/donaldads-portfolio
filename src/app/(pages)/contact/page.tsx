"use client";

import { motion } from "framer-motion";
import Animated from "../../components/ui/Animated";
import { linkMotion, staggerFadeInUp } from "../../lib/motionVariants";
import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Contact() {
  return (
    <section className="flex flex-col items-center py-16 px-4">
      <Animated as="h1" className="text-4xl font-bold text-primary mb-6">
        Let's Connect
      </Animated>
      <Animated
        as="p"
        className="text-lg text-center max-w-2xl mb-12 text-foreground"
      >
        I’m always open to new opportunities, collaborations, or just a friendly
        chat. Feel free to reach out through any of the channels below.
      </Animated>
      <Animated
        as="div"
        variants={staggerFadeInUp.container}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl w-full"
      >
        <Animated
          as="a"
          variants={staggerFadeInUp.child}
          {...linkMotion}
          href="https://github.com/donalddcs"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-6 rounded-xl shadow-lg bg-card"
        >
          <SiGithub className="w-8 h-8 text-primary mb-3" />
          <span className="font-medium text-foreground">GitHub</span>
        </Animated>
        <Animated
          as="a"
          variants={staggerFadeInUp.child}
          {...linkMotion}
          href="https://linkedin.com/in/dadstooks"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-6 rounded-xl shadow-lg bg-card"
        >
          <SiLinkedin className="w-8 h-8 text-primary mb-3" />
          <span className="font-medium text-foreground">LinkedIn</span>
        </Animated>
        <Animated
          as="a"
          variants={staggerFadeInUp.child}
          {...linkMotion}
          href="mailto:donald.stooks@gmail.com"
          className="flex flex-col items-center justify-center p-6 rounded-xl shadow-lg bg-card"
        >
          <Mail className="w-8 h-8 text-primary mb-3" />
          <span className="font-medium text-foreground">Email</span>
        </Animated>
      </Animated>
    </section>
  );
}
