import React from "react";

const Footer = () => {
    return (
        <footer className="p-4 text-center bg-violet-900 border-t">
            <p>© 2025 Donald AD Stooks. All rights reserved.</p>
            <div className="mt-2 flex justify-center gap-4">
                <a href="https://github.com/DonaldDCS" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/dadstooks/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="mailto:donald.stooks@gmail.com">Email</a>
            </div>
        </footer>
    );
};

export default Footer;