interface AboutSectionProps {
    heading?: string;
    text?: string;
}

export default function AboutSection({ heading, text }: AboutSectionProps) {
    return (
        <section className="py-16 px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">{heading || "About Me"}</h2>
            <p className="max-w-2xl mx-auto">{text || "I'm passionate about tech, rural innovation, and building clean, user-friendly interfaces."}</p>
        </section>
    );
};