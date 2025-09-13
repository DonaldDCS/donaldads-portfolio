"use client";

import Animated from "../ui/Animated";

interface PageTitleProps {
  title: string;
  description?: string;
  bgClass?: string;
}

export default function PageTitle({ title, description, bgClass }: PageTitleProps) {
  return (
    <header className={`max-w-6xl mx-auto text-center py-14 px-6 md:px-12 lg:px-24 ${bgClass}`}>
      <Animated
        as="h1"
        className="text-4xl font-heading font-bold mb-8 text-primary"
      >
        {title}
      </Animated>
      {description && (
        <Animated
          as="p"
          className="text-lg md:text-xl font-body text-foreground"
        >
          {description}
        </Animated>
      )}
    </header>
  );
}
