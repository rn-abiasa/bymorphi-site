import Button from "./ui/button";

export default function Hero() {
  return (
    <section className="bg-background h-screen">
      <div class="bg-[linear-gradient(to_right,rgba(120,90,70,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,90,70,0.12)_1px,transparent_1px)] bg-[size:32px_32px] h-screen flex justify-center items-center p-5">
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="text-4xl text-primary text-center">
            Crafting Website as Your Taste
          </h1>
          <p className="text-sm font-medium text-primary/70 text-center">
            We build websites that serve F&B brands. Crafting digital
            experiences as good as your taste.
          </p>
          <Button>Let's Build with Us</Button>
        </div>
      </div>
    </section>
  );
}
