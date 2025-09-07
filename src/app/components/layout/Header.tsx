import React from "react";
import Link from "next/link";

const Header = () => {
    return (
        <header className="p-4 shadow-md bg-violet-900">
            <nav className="flex justify-between">
                <h1 className="text-xl font-bold">Donald ADS</h1>
                <ul className="flex gap-4">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;