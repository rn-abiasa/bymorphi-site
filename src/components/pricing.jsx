import { Check } from "lucide-react";
import Button from "./ui/button";
import WaveDivider from "./ui/wave-divider";

// Placeholder: sesuaikan harga, fitur, dan paket dengan layanan Anda.
const plans = [
  {
    name: "Starter",
    price: "Rp 350.000",
    note: "/year",
    text: "A single, polished page for a cafe or stall that needs to be found and trusted online.",
    features: [
      "One-page website",
      "Menu and opening hours",
      "Map and WhatsApp order button",
      "Free .site domain",
      "1 month of free maintenance",
    ],
    cta: "Choose Starter",
    featured: false,
  },
  {
    name: "Growth",
    price: "Rp 800.000",
    note: "/year",
    text: "A full website for restaurants that want bookings, orders and a brand that stands out.",
    features: [
      "Up to 5 pages",
      "WhatsApp button with simple reservation form",
      "Menu you can edit yourself",
      "Photo gallery and reviews",
      "Basic SEO and Google Maps setup",
      "Free .com domain",
      "2 month of free maintenance",
    ],
    cta: "Choose Growth",
    featured: true,
  },
  {
    name: "Custom",
    price: "Let's talk",
    note: "tailored quote",
    text: "For restaurant groups and chains with several outlets or special needs.",
    features: [
      "Multi-outlet pages",
      "Custom ordering flow",
      "Integrations with your tools",
      "Priority support",
    ],
    cta: "Ask for a Quote",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative scroll-mt-20 bg-primary px-5 pt-28 pb-16 text-background md:px-8 md:pt-40 md:pb-24"
    >
      <WaveDivider className="absolute top-0 left-0 -translate-y-px bg-background" />

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:max-w-2xl">
          <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl">
            Pricing
          </h2>
          <p className="text-base text-background/80 md:text-lg">
            Clear prices with no surprise add-ons. Pick the plan that fits your
            kitchen today, and upgrade when you grow.
          </p>
        </div>

        <ul className="mt-10 grid gap-6 md:mt-14 lg:grid-cols-3 lg:items-stretch lg:gap-8">
          {plans.map((plan) => (
            <li
              key={plan.name}
              className={`relative flex flex-col gap-6 rounded-3xl p-6 text-primary md:p-8 ${
                plan.featured
                  ? "bg-secondary lg:-my-4 lg:py-12"
                  : "bg-background"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 font-body text-xs font-bold text-accent ring-2 ring-secondary md:left-8">
                  Most popular
                </span>
              )}

              <div className="flex flex-col gap-2">
                <h3 className="font-body text-xl font-bold">{plan.name}</h3>
                <p className="flex items-baseline gap-2">
                  <span className="font-heading text-3xl">{plan.price}</span>
                  <span className="font-body text-sm text-primary/70">
                    {plan.note}
                  </span>
                </p>
                <p className="font-body text-sm text-primary/80">{plan.text}</p>
              </div>

              <ul className="flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 font-body text-sm"
                  >
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-accent">
                      <Check size={12} strokeWidth={3} aria-hidden="true" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                href="#contact"
                size="lg"
                variant={plan.featured ? "primary" : "outline"}
                className="w-full"
              >
                {plan.cta}
              </Button>
            </li>
          ))}
        </ul>

        <p className="mt-8 font-body text-sm text-background/70">
          Prices are starting points. Hosting and domain renewal are billed
          separately, and we confirm the final scope before we begin.
        </p>
      </div>
    </section>
  );
}
