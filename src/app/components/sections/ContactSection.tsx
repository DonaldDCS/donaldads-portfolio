import React from "react";
import Link from "next/link";

export default function ContactSection() {
    return (
        <section className="py-16 text-center">
            <h2 className="text-2xl font-bold">Let&apos;s Connect</h2>
            <p className="mt-4">Interested in working together? Let&apos;s chat.</p>
            <Link href="/contact" className="mt-4 inline-block text-violet-600">Contact Me</Link>
        </section>
    );
};