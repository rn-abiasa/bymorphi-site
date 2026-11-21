import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/bymorphi.webp";
import Button from "./ui/button";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Pricing", href: "#pricing" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 z-100 w-full transition-colors duration-300 ${
        scrolled || open
          ? "bg-background/85 backdrop-blur-md shadow-[0_1px_0_0_rgba(59,33,25,0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <a href="#home" onClick={close} aria-label="Bymorphi, back to top">
          <img src={logo} alt="Bymorphi" className="h-14 w-auto md:h-16" />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-semibold text-primary/80 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {link.label}
            </a>
          ))}
          <Button href="#contact">Contact Us</Button>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex size-10 cursor-pointer items-center justify-center rounded-xl text-primary transition-colors hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <nav
          aria-label="Mobile"
          inert={!open}
          className="overflow-hidden"
        >
          <div className="flex flex-col gap-1 px-5 pb-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="rounded-xl px-3 py-3 font-body text-base font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                {link.label}
              </a>
            ))}
            <Button
              href="#contact"
              onClick={close}
              size="lg"
              className="mt-2 w-full"
            >
              Contact Us
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
