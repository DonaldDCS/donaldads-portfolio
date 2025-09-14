"use client";

import Animated from "./Animated";
import { buttonMotion } from "@lib/motionVariants";

export default function MotionButton(
    props: React.ComponentProps<typeof Animated>
) {
    return <Animated as="button" {...buttonMotion} {...props} />
}