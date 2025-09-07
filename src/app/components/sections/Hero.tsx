import React from "react";

export default function Hero()  {
    return (
        <section className="text-center py-20 bg-violet-950">
            <h1 className="text-4xl font-bold">Hi, I'm Donald ADS</h1>
            <p className="mt-4 text-lg">IT Specialist & Front-End Developer in Progress</p>
            <div className="mt-6 flex justify-center gap-4">
                <a href="#projects" className="px-4 py-2 bg-purple-600 text-white rounded">View Projects</a>
                <a href="/contact" className="px-4 py-2 border border-purple-600 text-purple-600 rounded">Contact Me</a>
            </div>
        </section>
    );
};