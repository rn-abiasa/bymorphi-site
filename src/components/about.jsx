import { Palette, UtensilsCrossed, Zap } from "lucide-react";
import Button from "./ui/button";

const values = [
  {
    icon: UtensilsCrossed,
    title: "Made for F&B",
    text: "Menus, online ordering, reservations and location pages, built around how restaurants and cafes really work.",
    tone: "bg-beige",
  },
  {
    icon: Palette,
    title: "Designed around your brand",
    text: "No templates with your logo pasted on. Your colors, photos and personality shape every page.",
    tone: "bg-secondary",
  },
  {
    icon: Zap,
    title: "Fast and easy to run",
    text: "Pages load quickly on any phone, and your team can update prices and menus without calling us.",
    tone: "bg-accent",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-primary px-5 pt-24 pb-16 text-background sm:pt-28 md:px-8 md:pt-36 md:pb-24"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl">
            About Us
          </h2>
          <p className="max-w-prose text-base text-background/80 md:text-lg">
            Bymorphi is a small web studio for food and beverage brands. A
            great meal starts before the first bite: on a phone screen, when
            someone decides where to eat. We make that moment look and taste
            like you.
          </p>
          <p className="max-w-prose text-base text-background/80 md:text-lg">
            From a single-outlet cafe to a growing restaurant group, we design
            and build the website, so you can focus on the kitchen.
          </p>
          <Button
            href="#contact"
            variant="light"
            size="lg"
            className="mt-2 w-full sm:w-auto"
          >
            Talk to Us
          </Button>
        </div>

        <ul className="grid gap-4">
          {values.map(({ icon: Icon, title, text, tone }) => (
            <li
              key={title}
              className={`${tone} flex gap-4 rounded-3xl p-5 text-primary md:p-6`}
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-background">
                <Icon size={22} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-body text-lg font-bold">{title}</h3>
                <p className="mt-1 font-body text-sm text-primary/80 md:text-base">
                  {text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
