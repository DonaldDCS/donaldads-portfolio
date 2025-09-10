"use client";

import Animated from "./Animated";
import { buttonMotion } from "@/app/lib/motionVariants";

export default function MotionButton(
    props: React.ComponentProps<typeof Animated>
) {
    return <Animated as="button" {...buttonMotion} {...props} />
}