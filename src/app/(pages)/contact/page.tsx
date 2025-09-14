"use client";

import PageTitle from "@components/sections/PageTitle";
import Animated from "@components/ui/Animated";
import { linkMotion, staggerFadeInUp } from "@lib/motionVariants";
import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Contact() {
  return (
    <>
      <PageTitle
        title="Let's Connect"
        description="I'm always open to new opportunities, collaborations, or just a
          friendly chat. Feel free to reach out through any of the channels
          below."
      />
      <section className="flex flex-col items-center pb-14 px-6 text-center">
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
    </>
  );
}
