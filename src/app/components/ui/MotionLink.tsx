"use client";

import Animated from "./Animated";
import { linkMotion } from "@/app/lib/motionVariants";

export default function MotionLink(
    props: React.ComponentProps<typeof Animated>
) {
    return <Animated as="a" {...linkMotion} {...props} />
}