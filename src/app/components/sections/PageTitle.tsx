"use client";

import Animated from "../ui/Animated";

interface PageTitleProps {
  title: string;
  description?: string;
  bgClass?: string;
}

export default function PageTitle({ title, description, bgClass }: PageTitleProps) {
  return (
    <header className={`text-center py-14 px-6 md:px-12 lg:px-24 ${bgClass}`}>
      <Animated
        as="h1"
        className="text-4xl font-heading font-bold mb-8 text-primary"
      >
        {title}
      </Animated>
      {description && (
        <Animated
          as="p"
          className="max-w-2/3 mx-auto text-lg md:text-xl font-body text-foreground"
        >
          {description}
        </Animated>
      )}
    </header>
  );
}
