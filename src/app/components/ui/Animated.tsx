"use client";

import { motion, MotionProps, Variants } from "framer-motion";
import React, { JSX } from "react";
import { fadeInUp } from "@lib/motionVariants";

type AnimatedProps<T extends keyof JSX.IntrinsicElements> = {
  as?: T;
  children?: React.ReactNode;
  delay?: number;
  variants?: Variants;
  className?: string;
  href?: string;
} & React.ComponentPropsWithoutRef<T> & MotionProps;

export default function Animated<
  T extends keyof JSX.IntrinsicElements = "div"
>({
  as,
  children,
  delay = 0,
  variants = fadeInUp,
  className,
  href,
  ...rest
}: AnimatedProps<T>) {
  const Component = as || "div";
  const MotionComponent = motion(Component as React.ElementType);

  return (
    <MotionComponent
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={className}
      href={href}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}
