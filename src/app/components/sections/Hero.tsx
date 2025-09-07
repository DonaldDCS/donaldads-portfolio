import React from "react";

export default function Hero()  {
    return (
        <section className="text-center py-20 bg-linear-to-b from-primary to-accentPrimary">
            <h1 className="text-4xl font-bold">Hi, I&apos;m Donald ADS</h1>
            <p className="mt-4 text-lg px-4">IT Specialist & Front-End Developer in Progress</p>
            <div className="mt-6 flex justify-center gap-4">
                <a href="#projects" className="px-4 py-2 bg-accentPrimary text-white shadow-lg rounded">View Projects</a>
                <a href="/contact" className="px-4 py-2 text-accentPrimary bg-lightMode shadow-md rounded">Contact Me</a>
            </div>
        </section>
    );
};