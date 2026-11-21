export default function Button({ children }) {
  return (
    <button className="bg-primary h-10 px-4 rounded-xl text-sm font-body font-semibold text-accent">
      {children}
    </button>
  );
}
