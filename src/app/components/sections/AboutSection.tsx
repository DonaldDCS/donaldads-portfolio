import React from "react";
import Link from "next/link";

export default function About() {
    return (
        <section className="py-16 text-center">
            <h2 className="text-2xl font-bold">About Me</h2>
            <p className="mt-4 max-w-2xl mx-auto">I&apos;m passionate about tech, rural innovation, and building clean, user-friendly interfaces.</p>
            <Link href="/about" className="mt-4 inline-block text-violet-600">Learn More About Me</Link>
        </section>
    );
};