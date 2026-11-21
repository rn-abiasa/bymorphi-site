import { ArrowUpRight } from "lucide-react";
import Button from "./ui/button";
import WaveDivider from "./ui/wave-divider";

import kopikeun from "../assets/projects/kopikeun.webp";

// Placeholder projects: ganti dengan klien dan hasil kerja Anda yang sebenarnya.
const projects = [
  {
    name: "Kopiekun - Kedai Kopi 24 di Bandung",
    type: "Coffee shop · Online menu",
    text: "A warm one-page site with a full menu and a opening hours, built for walk-in customers searching on their phones.",
    href: "https://kopikeun.pages.dev",
    image: kopikeun,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-20 bg-background px-5 pt-28 pb-16 md:px-8 md:pt-40 md:pb-24"
    >
      <WaveDivider className="absolute top-0 left-0 -translate-y-px bg-primary" />

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:max-w-2xl">
          <h2 className="text-3xl leading-tight text-primary sm:text-4xl md:text-5xl">
            Our Projects
          </h2>
          <p className="text-base text-primary/70 md:text-lg">
            A few websites we have made for food and beverage brands, each
            shaped around its own menu, crowd and kitchen.
          </p>
        </div>

        <ul className="mt-10 grid gap-8 md:mt-14 md:grid-cols-2 md:gap-10">
          {projects.map((project) => (
            <li key={project.name}>
              <a
                href={project.href}
                target="_blank"
                className="group flex h-full flex-col gap-5 rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <div className="transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0">
                  <img
                    src={project.image}
                    className="border border-accent rounded-3xl"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-body text-xl font-bold text-primary">
                      {project.name}
                    </h3>
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-accent transition-colors group-hover:bg-accent group-hover:text-primary">
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </span>
                  </div>
                  <p className="font-body text-sm font-semibold text-accent">
                    {project.type}
                  </p>
                  <p className="font-body text-sm text-primary/70 md:text-base">
                    {project.text}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-start gap-4 rounded-3xl bg-beige p-6 sm:flex-row sm:items-center sm:justify-between md:mt-16 md:p-8">
          <p className="font-body text-lg font-bold text-primary md:text-xl">
            Have a place that deserves a better website?
          </p>
          <Button href="#pricing" size="lg" className="w-full sm:w-auto">
            Let's Build with Us
          </Button>
        </div>
      </div>
    </section>
  );
}
