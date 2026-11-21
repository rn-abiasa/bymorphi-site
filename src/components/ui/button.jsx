const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-body font-semibold whitespace-nowrap cursor-pointer " +
  "transition duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 active:shadow-none " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent " +
  "disabled:pointer-events-none disabled:opacity-50 " +
  "motion-reduce:transition-none motion-reduce:hover:translate-y-0";

const variants = {
  primary:
    "bg-primary text-accent hover:shadow-[0_4px_0_0_var(--color-accent)]",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-background hover:shadow-[0_4px_0_0_var(--color-accent)]",
  light:
    "bg-background text-primary hover:shadow-[0_4px_0_0_var(--color-accent)]",
};

const sizes = {
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

/**
 * Button
 * - variant: "primary" | "outline" | "light"
 * - size: "md" | "lg"
 * - className: kelas tambahan (mis. "w-full")
 * - href: jika diisi, dirender sebagai <a>
 */
export default function Button({
  children,
  className = "",
  variant = "primary",
  size = "md",
  href,
  type = "button",
  ...props
}) {
  const classes = [base, variants[variant], sizes[size], className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} target="_blank" className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
