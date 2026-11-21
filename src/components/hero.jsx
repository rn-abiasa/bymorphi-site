import Button from "./ui/button";
import WaveDivider from "./ui/wave-divider";

export default function Hero() {
  return (
    <section id="home" className="relative bg-background">
      <div className="relative flex min-h-svh items-center justify-center overflow-hidden bg-[linear-gradient(to_right,rgba(120,90,70,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,90,70,0.12)_1px,transparent_1px)] bg-[size:32px_32px] px-5 pt-28 pb-24 md:px-8 md:pb-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 -left-20 size-64 rounded-full bg-secondary/50 blur-3xl md:size-96"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 bottom-24 size-56 rounded-full bg-accent/25 blur-3xl md:size-80"
        />

        <div className="relative flex max-w-3xl flex-col items-center gap-5 md:gap-7">
          <h1 className="text-center text-4xl leading-[1.1] text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Crafting Website as Your Taste
          </h1>
          <p className="max-w-xl text-center text-sm font-medium text-primary/70 sm:text-base md:text-lg">
            We build websites that serve F&B brands. Crafting digital
            experiences as good as your taste.
          </p>
          <div className="mt-2 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
            <Button href="#pricing" size="lg" className="w-full sm:w-auto">
              Let's Build with Us
            </Button>
            <Button
              href="#about"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <WaveDivider className="absolute bottom-0 left-0 z-10 translate-y-[calc(100%-1px)] bg-background" />
    </section>
  );
}
