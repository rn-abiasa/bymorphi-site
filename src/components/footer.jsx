import { Mail, MessageCircle } from "lucide-react";
import Button from "./ui/button";
import WaveDivider from "./ui/wave-divider";

// Placeholder: ganti dengan kontak asli Anda.
const contacts = [
  {
    icon: Mail,
    label: "hello@bymorphi.com",
    href: "mailto:byabiasa@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/6285935391713",
  },
];

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Pricing", href: "#pricing" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative scroll-mt-20 overflow-hidden bg-background pt-28 text-primary md:pt-40"
    >
      <WaveDivider className="absolute top-0 left-0 bg-primary" />

      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1.4fr_1fr_1fr] md:gap-12 md:px-8">
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-2xl leading-tight sm:text-3xl md:text-4xl">
            Ready to serve your brand online?
          </h2>
          <p className="max-w-md font-body text-sm text-primary/70 md:text-base">
            Tell us about your place and what you need. We reply within one
            working day.
          </p>
          <Button
            href={contacts[1].href}
            size="lg"
            className="w-full sm:w-auto"
          >
            Let's Build with Us
          </Button>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-3">
          <p className="font-body text-sm font-bold">Explore</p>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="w-fit font-body text-sm text-primary/70 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:text-base"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <p className="font-body text-sm font-bold">Contact</p>
          {contacts.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              className="flex w-fit items-center gap-2 font-body text-sm text-primary/70 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:text-base"
            >
              <Icon size={16} aria-hidden="true" />
              {label}
            </a>
          ))}
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-6xl px-5 font-body text-xs text-primary/60 md:mt-16 md:px-8 md:text-sm">
        © {new Date().getFullYear()} Bymorphi. All rights reserved.
      </p>

      <svg
        role="img"
        aria-label="Bymorphi"
        viewBox="0 0 800 140"
        className="mt-6 block w-full px-3 text-primary md:mt-10 md:px-6"
      >
        <text
          x="0"
          y="132"
          textLength="800"
          lengthAdjust="spacingAndGlyphs"
          fontSize="170"
          fill="currentColor"
          className="font-heading"
        >
          Bymorphi
        </text>
      </svg>
    </footer>
  );
}
